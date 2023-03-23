import { CreateQuestionDto } from './dto/createQuestion.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async saveQuestion(@Body() question: CreateQuestionDto) {
    return await this.questionService.createQuestion(question);
  }
}
