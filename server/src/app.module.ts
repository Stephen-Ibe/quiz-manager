import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), QuestionModule, QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
