import { CustomRepository } from 'src/typeorm-ex/typeorm-ex.decorator';
import { Option } from '../entities/option.entity';
import { Repository } from 'typeorm';

@CustomRepository(Option)
export class OptionRepository extends Repository<Option> {}
