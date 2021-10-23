import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRolDto } from './dto/create-user-rol.dto';
import { UpdateUserRolDto } from './dto/update-user-rol.dto';
import { UserRol } from './entities/user-rol.entity';

@Injectable()
export class UserRolService {

  constructor(
    @InjectRepository(UserRol)
    private readonly _userolrepository: Repository<UserRol>
  ){

  }


  create(createUserRolDto: CreateUserRolDto) {
    return this._userolrepository.save(createUserRolDto);
  }

  findAll() {
    return this._userolrepository.find({ where:{ state:'1'}});
  }

  findOne(id: number) {
    return this._userolrepository.findOne(id, { where:{ state:'1'}});
  }

  update(id: number, updateUserRolDto: UpdateUserRolDto) {
    return this._userolrepository.update(id, updateUserRolDto);
  }

  remove(id: number) {
    return this._userolrepository.update(id, { state:'0'});
  }
}
