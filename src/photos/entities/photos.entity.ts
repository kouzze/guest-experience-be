import { Property } from 'src/property/entities/property.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photos' })
export class Photos {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @ManyToOne(() => Property, (property) => property.fotos)
  property: Property;

  @Column()
  url: string;

  @Column()
  description: string;
}
