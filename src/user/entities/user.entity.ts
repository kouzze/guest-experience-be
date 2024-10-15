import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text', name: 'name' })
  name: string;
  @Column({ type: 'text', name: 'email' })
  email: string;
  @Column({ type: 'text', name: 'password' })
  password: string;
  @CreateDateColumn({ type: 'date', name: 'date' })
  createdAt: Date;
}
