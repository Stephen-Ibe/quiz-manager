import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { CustomRepository } from 'src/typeorm-ex/typeorm-ex.decorator';

@CustomRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {}
