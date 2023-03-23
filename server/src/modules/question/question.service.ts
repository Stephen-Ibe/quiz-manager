import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { QuizRepository } from '../quiz/quiz.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuizRepository,
  ) {}

  async createQuestion(questionData: CreateQuestionDto) {
    return { data: questionData };
  }
}
