import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Riddle } from './riddle.interface';

@Injectable()
export class RiddleService {
  
  constructor(
    @InjectModel('Riddle') 
    private readonly riddleModel: Model<Riddle>
  ) {}

  async createRiddle(riddle: Riddle): Promise<Riddle> {
    const newRiddle = new this.riddleModel(riddle); 
    return await newRiddle.save();
  }

  async findAllRiddle(): Promise<Riddle[]> {
    return await this.riddleModel.find().exec();
  }

  async findRiddleById(id: string): Promise<Riddle> {
    const riddle = await this.riddleModel.findById(id).exec();
    if (!riddle) {
      throw new NotFoundException(`Riddle with id ${id} not found`);
    }
    return riddle;
  }

  async findRiddleByDifficulty(difficulty: string): Promise<Riddle[]> {
    return await this.riddleModel.find({ difficulty }).exec();
  }

  async updateRiddleById(id: string, riddle: Partial<Riddle>): Promise<Riddle> {
    const updatedRiddle = await this.riddleModel.findByIdAndUpdate(
      id, 
      riddle, 
      { new: true }
    ).exec();
    if (!updatedRiddle) {
      throw new NotFoundException(`Riddle with id ${id} not found`);
    }
    return updatedRiddle;
  }

  async deleteRiddleById(id: string): Promise<Riddle> {
    const deletedRiddle = await this.riddleModel.findByIdAndDelete(id).exec();
    if (!deletedRiddle) {
      throw new NotFoundException(`Riddle with id ${id} not found`);
    }
    return deletedRiddle;
  }
}
