import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';

@Module({
    imports: [UserModule, ConfigModule.forRoot(), TypeOrmModule.forRoot()],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
