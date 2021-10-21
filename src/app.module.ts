import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import { Category } from './category/entities/category.entity';
import { Question } from './question/entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'base_db',
      password: 'root123',
      database: 'base_db',
      entities: [Category, Question],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    CategoryModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
