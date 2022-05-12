import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = await this.usersRepository.create(createUserDto);
      return this.usersRepository.save(createdUser);
    } catch (error) {
      throw error;
    }
  }

  findById(id: string): Promise<FindUserDto> {
    try {
      return this.usersRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      await this.usersRepository.update(id, updateUserDto);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      await this.usersRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
