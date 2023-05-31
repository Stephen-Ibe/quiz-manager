import { QuestionService } from './../services/question.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { CreateOptionDto } from '../dto/CreateOption.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Questions')
@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() optionData: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      optionData.questionId,
    );
    const option = await this.optionService.createOption(optionData, question);

    return { question, optionData, option };
  }
}
