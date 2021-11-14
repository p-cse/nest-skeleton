import { Injectable } from '@nestjs/common';
import { StoreUserDto } from './dto/store-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    public constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    public findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    public store(dto: StoreUserDto): Promise<User> {
        const { email, name, password } = dto;

        const newUser = new User();
        newUser.name = name;
        newUser.email = email;
        newUser.password = password;

        return this.usersRepository.save(newUser);
    }
}
