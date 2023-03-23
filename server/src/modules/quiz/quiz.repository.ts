import { EntityRepository, Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
// import { CreateQuizDto } from './dto/CreateQuiz.dto';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {}
