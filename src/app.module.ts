import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminSideModule } from './adminSide/admin-side/admin-side.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/AdminData', {
      autoCreate: true,
    }),
    AdminSideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
