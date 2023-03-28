import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly questionRepository: QuestionRepository,
  ) {}

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
