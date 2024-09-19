import {
  ObjectType,
  Field,
  ID,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum QuantityUnits {
  UNIT_G = 'g',
  UNIT_ML = 'ml',
  UNIT_KG = 'kg',
  UNIT_TSP = 'tsp',
}

registerEnumType(QuantityUnits, {
  name: 'QuantityUnits', // Name used in the GraphQL schema
  description: 'Units of measurement for quantity', // Optional description
});

@Entity({ name: 'items' })
@ObjectType()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Float)
  quantity: number;

  @Column({
    type: 'enum',
    enum: QuantityUnits,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  quantityUnits?: QuantityUnits;

  // stores
  // user
}
