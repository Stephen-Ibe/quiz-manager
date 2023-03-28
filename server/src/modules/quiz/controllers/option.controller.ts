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

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  saveOptionToQuestion(@Body() option: CreateOptionDto) {
    return option;
  }
}
