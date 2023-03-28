import { OptionRepository } from './../repositories/option.respository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private readonly optionRepository: OptionRepository,
  ) {}
}
