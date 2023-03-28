import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';
import { CustomRepository } from 'src/typeorm-ex/typeorm-ex.decorator';

@CustomRepository(Question)
export class QuestionRepository extends Repository<Question> {}
