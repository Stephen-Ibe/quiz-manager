import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';

@Controller('question')
export class QuestionController {
  @Post()
  @UsePipes(ValidationPipe)
  createQuestion(@Body() question: CreateQuestionDto) {
    return question;
  }
}
