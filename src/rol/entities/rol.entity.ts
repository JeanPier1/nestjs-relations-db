import { UserRol } from 'src/user-rol/entities/user-rol.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '1', length: '1', type: 'char' })
  state: string;

  @Column()
  name: string;

  @OneToMany(() => UserRol, (userRol) => userRol.rol)
  userRols: UserRol[];
}
