import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createQuestion(@Body() question: CreateQuestionDto) {
    return this.questionService.createQuestion(question);
  }
}
