import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RiddleController } from './riddle.controller';
import { RiddleService } from './riddle.service';
import { RiddleSchema } from './riddle.schema';



@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Riddle', schema: RiddleSchema }
    ]),
  ],
  controllers: [RiddleController],
  providers: [RiddleService],
  exports: [RiddleService],
})
export class RiddleModule {}
