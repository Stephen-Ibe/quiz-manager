import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from '../question/question.entity';

@Entity('quizzes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'Quiz unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question)
  questions: Question[];
}
