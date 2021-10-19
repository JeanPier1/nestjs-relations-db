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
    return this._questionRepository.find();
  }

  findOne(id: number) {
    return this._questionRepository.findOne(id);
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this._questionRepository.update(id, updateQuestionDto);
  }

  remove(id: number) {
    return this._questionRepository.delete(id);
  }
}
