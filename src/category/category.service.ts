import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly _createRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this._createRepository.save(createCategoryDto);
  }

  findAll() {
    return this._createRepository.find({ where: { state: '1' } });
  }

  findOne(id: number) {
    return this._createRepository.findOne(id, { where: { state: '1' } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this._createRepository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this._createRepository.update(id, { state: '0' });
  }

  createpull(createCategoryDto: CreateCategoryDto[]) {
    return this._createRepository.save(createCategoryDto);
  }
}
