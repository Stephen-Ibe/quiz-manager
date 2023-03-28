import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { QuestionService } from './question.service';
import { QuizService } from './quiz.service';
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestion(question, quiz);
  }
}
