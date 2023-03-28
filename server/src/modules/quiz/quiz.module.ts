import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizService } from './services/quiz.service';

import { TypeOrmExModule } from 'src/typeorm-ex/typeorm-ex.module';
import { QuestionController } from './controllers/question.controller';
import { QuestionRepository } from './repositories/question.repository';
import { QuestionService } from './services/question.service';
import { OptionRepository } from './repositories/option.respository';
import { OptionService } from './services/option.service';
import { OptionController } from './controllers/option.controller';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [
    TypeOrmExModule.forCustomRepository([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
  ],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
