import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiddleModule } from './riddle/riddle.module';
import { PlayerModule } from './player/player.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://om3160204:zUHtAEBjnfppKtWv@cluster0.oyt1v8m.mongodb.net/riddle-game'),
    RiddleModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
