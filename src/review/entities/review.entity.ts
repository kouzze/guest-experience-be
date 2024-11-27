import { Property } from 'src/property/entities/property.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'review' })
export class Review {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Property, (property) => property.reseñas)
  property: Property;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @Column('int')
  rating: number;

  @Column()
  commentary: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
