import { CreateQuestionDto } from './dto/createQuestion.dto';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async saveQuestion(
    @Body() questionData: CreateQuestionDto,
  ): Promise<Question> {
    return await this.questionService.createQuestion(questionData);
  }
}
