import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Characteristics {
  lifespan: string;
  size: 'small' | 'medium' | 'large';
  coat: 'short' | 'medium' | 'long';
  color: string;
}

@Schema()
export class Dog {
  @Prop()
  breed: string;

  @Prop()
  characteristics: Characteristics;
}

export type DogDocument = Dog & Document;
export const DogSchema = SchemaFactory.createForClass(Dog);
