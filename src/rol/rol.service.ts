import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly _rolreposirtory: Repository<Rol>,
  ) {}

  create(createRolDto: CreateRolDto) {
    return this._rolreposirtory.save(createRolDto);
  }

  findAll() {
    return this._rolreposirtory.find({ where: { state: '1' } });
  }

  findOne(id: number) {
    return this._rolreposirtory.findOne(id, { where: { state: '1' } });
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return this._rolreposirtory.update(id, updateRolDto);
  }

  remove(id: number) {
    return this._rolreposirtory.update(id, { state: '0' });
  }
}
