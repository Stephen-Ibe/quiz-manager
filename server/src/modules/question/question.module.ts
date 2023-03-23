import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { TypeOrmExModule } from 'src/typeorm-ex/typeorm-ex.module';
import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuestionController],
  imports: [TypeOrmExModule.forCustomRepository([QuestionRepository])],
  providers: [QuestionService],
})
export class QuestionModule {}
