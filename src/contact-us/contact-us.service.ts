import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactUs } from './contactUsModel';

@Injectable()
export class ContactUsService {
  constructor(
    @InjectModel('ContactUs')
    private readonly __contactusModel: Model<ContactUs>,
  ) {}

  //Add nail and hair details

  async addNewContact(contactus: any) {
    try {
      const contactus_model = new this.__contactusModel(contactus);
      const cont = await contactus_model.save();
      return {
        id: cont.id,
        name: cont.name,
        number: cont.number,
        checkbox: cont.checkbox,
        message: cont.message,
      };
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyValue.number)
          throw new BadRequestException('Number already exists');
      }
      throw new BadRequestException(error);
    }
  }
}
