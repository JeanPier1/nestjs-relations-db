import { IsString, Validate } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';

export class CreateQuestionDto {
  @IsString()
  title: string;
  @IsString()
  text: string;
  @Validate(Category)
  categories: Category[];
}
