import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private readonly questionRepository: QuestionRepository,
  ) {}

  async createQuestion(question: CreateQuestionDto): Promise<Question> {
    return await this.questionRepository.save(question);
  }
}
