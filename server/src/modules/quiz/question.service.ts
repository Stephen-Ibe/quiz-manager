import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';

@Injectable()
export class QuestionService {
  createQuestion(question: CreateQuestionDto) {
    return question;
  }
}
