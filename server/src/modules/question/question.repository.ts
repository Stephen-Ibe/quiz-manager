import { CustomRepository } from 'src/typeorm-ex/typeorm-ex.decorator';
import { Question } from './question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/createQuestion.dto';

@CustomRepository(Question)
export class QuestionRepository extends Repository<Question> {
  async createQuestion(question: CreateQuestionDto) {
    await this.save(question);
  }
}
