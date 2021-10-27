import { Module } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsController } from './contact-us.controller';
import { ContactUsSchema } from './contactUsModel';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ContactUs', schema: ContactUsSchema }]),
  ],

  providers: [ContactUsService],
  controllers: [ContactUsController],
})
export class ContactUsModule {}
