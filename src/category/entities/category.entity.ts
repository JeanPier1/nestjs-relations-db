import { Question } from 'src/question/entities/question.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: '1', length: '1', type: 'char' })
  state: string;

  @ManyToMany(() => Question, (question) => question.categories)
  questions: Question;
}
