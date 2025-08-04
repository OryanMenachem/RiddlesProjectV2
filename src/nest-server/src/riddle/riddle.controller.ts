import { Controller, Put, Param, Get, Post, Delete, Body } from '@nestjs/common';
import { RiddleService } from './riddle.service';
import type { Riddle } from './riddle.interface';
import getId from '../utils/utils';

@Controller('riddle')
export class RiddleController {
    constructor(
        private readonly riddleService: RiddleService
    ) {}


    /**
     * This code is likely incorrect for the following reasons:
     * 1. The RiddleService (and the underlying Mongoose model) expects MongoDB ObjectIds for the `_id` field, not a numeric `id`.
     * 2. The code assigns a numeric id using getId(), but MongoDB will generate its own _id if not provided.
     * 3. The Riddle interface may not have an `id` property, or it may be `_id` instead.
     * 4. It's best to let MongoDB handle the id generation.
     * 
     * The correct approach is to simply pass the riddle object to the service, and let Mongoose handle the id.
     */

    @Post()
    async createRiddle(
        @Body() riddle: Riddle
    ): Promise<Riddle> {      
        return this.riddleService.createRiddle(riddle);
    }


    @Get()
    async getAllRiddles(): Promise<Riddle[]> {
        return this.riddleService.findAllRiddle();
    }


    @Get(':id')
    async getRiddleById(
        @Param('id') id: string
    ): Promise<Riddle> {
        return this.riddleService.findRiddleById(id);
    }


    @Put(':id')
    async updateRiddle(
        @Param('id') id: string,
        @Body() riddle: Riddle
    ): Promise<Riddle> {
        return this.riddleService.updateRiddleById(id, riddle);
    }


    @Delete(':id')
    async deleteRiddle(
        @Param('id') id: string
    ): Promise<Riddle> {
        return this.riddleService.deleteRiddleById(id);
    }
}
