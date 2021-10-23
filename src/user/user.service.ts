import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly _userrepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this._userrepository.save(createUserDto);
  }

  findAll() {
    return this._userrepository.find({ where: { state: '1' } });
  }

  findOne(id: number) {
    return this._userrepository.findOne(id, { where: { state: '1' } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this._userrepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this._userrepository.update(id, { state: '0' });
  }
}
