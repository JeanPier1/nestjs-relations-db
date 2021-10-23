import { Module } from '@nestjs/common';
import { UserRolService } from './user-rol.service';
import { UserRolController } from './user-rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRol } from './entities/user-rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRol])],
  controllers: [UserRolController],
  providers: [UserRolService]
})
export class UserRolModule {}
