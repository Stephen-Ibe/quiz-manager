import { OptionRepository } from './../repositories/option.respository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from '../dto/CreateOption.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private readonly optionRepository: OptionRepository,
  ) {}

  async createOption(option: CreateOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, newOption];
    await question.save();

    return newOption;
  }
}
