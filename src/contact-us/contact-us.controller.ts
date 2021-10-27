import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ContactUsService } from './contact-us.service';
import { ContactUsModule } from './contact-us.module';

@Controller('contact-us')
export class ContactUsController {
  constructor(private __contact: ContactUsService) {}

  //Add new detail
  @Post()
  async addNewMessage(
    @Body()
    contact: {
      name: string;
      number: number;
      checkbox: string;
      message: string;
    },
  ) {
    return await this.__contact.addNewContact(contact);
  }

  //Get all details
  //   @Get()
  //   async getAllDetails() {
  //     return await this.__admin.getAllHairDetails();
  //   }

  //Get single detail
  //   @Get('/:adminId')
  //   async GetOneDetail(@Param('adminId') adminId: string) {
  //     return await this.__admin.findOneDetailFromDB(adminId);
  //   }
}
