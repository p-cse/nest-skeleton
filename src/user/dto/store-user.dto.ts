import { IsEmail, Length, IsNotEmpty } from 'class-validator';

export class StoreUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @Length(6, 20)
    password: string;
}
