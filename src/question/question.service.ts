import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly _questionRepository: Repository<Question>,
  ) {}

  create(createQuestionDto: CreateQuestionDto) {
    return this._questionRepository.save(createQuestionDto);
  }

  findAll() {
    return this._questionRepository.find({ where: { state: '1' } });
  }

  findOne(id: number) {
    return this._questionRepository.findOne(id, { where: { state: '1' } });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this._questionRepository.update(id, updateQuestionDto);
  }

  remove(id: number) {
    return this._questionRepository.update(id, { state: '0' });
  }

  createpull(createQuestionDto: CreateQuestionDto[]) {
    return this._questionRepository.save(createQuestionDto);
  }

  async findAllCategoy(id: number) {
    return await this._questionRepository
      .createQueryBuilder('question')
      .leftJoinAndSelect('question.categories', 'category')
      .where("question.state = '1'")
      .andWhere('question.id = :id', { id: id })
      .andWhere("category.state = '1'")
      .getMany();
  }
}
