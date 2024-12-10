import { Property } from 'src/property/entities/property.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reservation' })
export class Reservation {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Property, (property) => property.reservas)
  property: Property;

  @ManyToOne(() => User, (user) => user.reservation)
  user: User;

  @Column('date')
  date_start: Date;

  @Column('date')
  date_end: Date;

  @Column('numeric')
  total: number;

  @Column({ default: 'reservado' })
  status: string;
}
