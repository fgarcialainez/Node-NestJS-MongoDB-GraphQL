import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogService } from './dog.service';
import { DogResolver } from './dog.resolver';
import { Dog, DogSchema } from './dog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
  providers: [DogService, DogResolver],
})
export class DogModule {}
