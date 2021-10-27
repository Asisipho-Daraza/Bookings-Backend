import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminSideModule } from './adminSide/admin-side/admin-side.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactUsController } from './contact-us/contact-us.controller';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ContactUsService } from './contact-us/contact-us.service';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/admin', {
    //   autoCreate: true,
    // }),

    MongooseModule.forRoot('mongodb://localhost:27017/BookingDatabase', {
      autoCreate: true,
    }),
    AdminSideModule,
    ContactUsModule,
    ContactUsService,
  ],
  controllers: [AppController, ContactUsController],
  providers: [AppService],
})
export class AppModule {}
