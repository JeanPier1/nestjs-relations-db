import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ default: '1', length: '1', type: 'char' })
  state: string;

  @ManyToMany(() => Category, (category) => category.questions)
  @JoinTable()
  categories: Category[];
}
