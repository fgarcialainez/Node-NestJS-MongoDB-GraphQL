import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { DogService } from './dog.service';
import { DogType } from './dog.dto';

@Resolver()
export class DogResolver {
  constructor(private readonly dogService: DogService) {}

  @Query(() => [DogType])
  async dogs() {
    return this.dogService.findAll();
  }

  @Mutation(() => DogType)
  async createDog(@Args('input') input: DogType) {
    return this.dogService.create(input);
  }

  @Mutation(() => DogType)
  async updateDog(@Args('id') id: string, @Args('input') input: DogType) {
    return this.dogService.update(id, input);
  }

  @Mutation(() => DogType)
  async deleteDog(@Args('id') id: string) {
    return this.dogService.delete(id);
  }
}
