import {
    Controller,
    Get,
    Post,
    Body,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { StoreUserDto } from './dto/store-user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    public constructor(private readonly userService: UserService) {}

    @Get()
    public findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    public store(@Body() storeUserDto: StoreUserDto) {
        return this.userService.store(storeUserDto);
    }
}
