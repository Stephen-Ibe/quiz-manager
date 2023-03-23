import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question must have a title' })
  @Length(3, 255)
  question: string;
}
