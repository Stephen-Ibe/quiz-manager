import { QuizRepository } from './quiz.repository';
import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

import { TypeOrmExModule } from 'src/typeorm-ex/typeorm-ex.module';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmExModule.forCustomRepository([QuizRepository])],
  providers: [QuizService],
})
export class QuizModule {}
