import { CustomRepository } from 'src/typeorm-ex/typeorm-ex.decorator';
import { Question } from './question.entity';
import { Repository } from 'typeorm';

@CustomRepository(Question)
export class QuestionRepository extends Repository<Question> {}
