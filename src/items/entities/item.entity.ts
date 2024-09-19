import { ObjectType, Field, ID, Float, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum QuantityUnits {
  UNIT_G = 'UNIT_G',
  UNIT_ML = 'UNIT_ML',
  UNIT_KG = 'UNIT_KG',
  UNIT_TSP = 'UNIT_TSP',
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
    nullable: true 
  })
  @Field(() => QuantityUnits, { nullable: true })
  quantityUnits?: QuantityUnits; // g, ml, kg, tsp

  // stores
  // user
}
