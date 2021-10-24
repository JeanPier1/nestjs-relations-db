import { Rol } from 'src/rol/entities/rol.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserRol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '1', length: '1', type: 'char' })
  state: string;

  @ManyToOne(() => Rol, (rol) => rol.userRols, { nullable: false })
  rol: Rol;

  @ManyToOne(() => User, (user) => user.userRols, { nullable: false })
  user: User;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updateAt: Date;
}
