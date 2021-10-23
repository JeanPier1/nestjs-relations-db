import { IsString, Validate } from 'class-validator';
import { UserRol } from 'src/user-rol/entities/user-rol.entity';

export class CreateUserDto {
  @IsString()
  state: string;
  @IsString()
  username: string;
  @Validate(UserRol)
  userRols: UserRol[];
}
