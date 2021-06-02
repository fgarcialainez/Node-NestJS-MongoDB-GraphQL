import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from './dog.schema';
import { DogType } from './dog.dto';

@Injectable()
export class DogService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) {}

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async create(createDogDto: DogType): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return createdDog.save();
  }

  async update(id: string, updateCatDto: DogType): Promise<Dog> {
    return this.dogModel.findByIdAndUpdate(id, updateCatDto);
  }

  async delete(id: string): Promise<Dog> {
    return this.dogModel.findByIdAndDelete(id);
  }
}
