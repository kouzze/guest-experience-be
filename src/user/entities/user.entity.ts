import { Property } from 'src/property/entities/property.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Review } from 'src/review/entities/review.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text', name: 'name' })
  name: string;

  @Column({ type: 'text', name: 'email' })
  email: string;

  @Column({ type: 'text', name: 'password' })
  password: string;

  @CreateDateColumn({ type: 'date', name: 'date' })
  createdAt: Date;

  @OneToMany(() => Property, (property) => property.users)
  properties: Property[];

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservation: Reservation[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
