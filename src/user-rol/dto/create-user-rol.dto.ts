import { IsString, Validate } from 'class-validator';
import { Rol } from 'src/rol/entities/rol.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateUserRolDto {
  @IsString()
  state: string;

  @Validate(Rol)
  rol: Rol;

  @Validate(User)
  user: User;
}
