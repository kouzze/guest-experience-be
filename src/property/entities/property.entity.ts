import { Photos } from 'src/photos/entities/photos.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Review } from 'src/review/entities/review.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'property' })
export class Property {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, (user) => user.properties)
  users: User;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column('numeric')
  price_per_night: number;

  @Column('int')
  capacity: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: 'disponible' })
  status: string;

  @OneToMany(() => Reservation, (reservation) => reservation.property)
  reservas: Reservation[];

  @OneToMany(() => Review, (review) => review.property)
  reseñas: Review[];

  @OneToMany(() => Photos, (photo) => photo.property)
  fotos: Photos[];
}
