import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

const configService = new ConfigService();

const connectionPg = new Pool({
  user: configService.get<string>('USER_BD'),
  host: configService.get<string>('HOST_BD'),
  database: configService.get<string>('DATABASE_NAME'),
  password: configService.get<string>('PASSWORD_BD'),
  port: configService.get<string>('PORT_BD'),
  ssl: {
    rejectUnauthorized: false,
  },
});

connectionPg.on('connect', () => {
  console.log('Connected to the database');
});

connectionPg.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default connectionPg;
