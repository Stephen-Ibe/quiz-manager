import { QuizRepository } from './quiz.repository';
import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

import { TypeOrmExModule } from 'src/typeorm-ex/typeorm-ex.module';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmExModule.forCustomRepository([QuizRepository])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
