import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import { Category } from './category/entities/category.entity';
import { Question } from './question/entities/question.entity';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { UserRolModule } from './user-rol/user-rol.module';
import { Rol } from './rol/entities/rol.entity';
import { User } from './user/entities/user.entity';
import { UserRol } from './user-rol/entities/user-rol.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'base_db',
      password: 'root123',
      database: 'base_db',
      entities: [Category, Question, Rol, User, UserRol],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    CategoryModule,
    QuestionModule,
    UserModule,
    RolModule,
    UserRolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
