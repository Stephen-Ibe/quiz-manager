import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfigAsync: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'root',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
