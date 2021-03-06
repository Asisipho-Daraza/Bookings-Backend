import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './adminModel';

@Injectable()
export class AdminSideService {
  constructor(
    @InjectModel('Admin')
    private readonly __adminModel: Model<Admin>,
  ) {}

  //Add nail and hair details

  async addNewDetails(admin: any) {
    try {
      const admin_model = new this.__adminModel(admin);
      const ad = await admin_model.save();
      return {
        id: ad.id,
        name: ad.name,
        hairnailname: ad.hairnailname,
        price: ad.price,
        image: ad.image,
        category: ad.category,
        description: ad.description,
        size: ad.size,
      };
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyValue.image)
          throw new BadRequestException('Image already exists');
        if (error.keyValue.hairnailname)
          throw new BadRequestException('Hairstyle/Nails name already exists');
      }
      throw new BadRequestException(error);
    }
  }

  //Get All hair and nail details

  async getAllHairDetails() {
    return (await this.__adminModel.find().sort({ name: 1 }).exec()).map(
      (ad: any) => ({
        id: ad.id,
        name: ad.name,
        hairnailname: ad.hairnailname,
        price: ad.price,
        image: ad.image,
        category: ad.category,
        description: ad.description,
        size: ad.size,
      }),
    );
  }

  //Get single nail or hair details

  async findOneDetail(adminId: string) {
    const ad = await this.findOneDetailFromDB(adminId);
    return {
      id: ad.id,
      name: ad.name,
      hairnailname: ad.hairnailname,
      price: ad.price,
      image: ad.image,
      category: ad.category,
      description: ad.description,
      size: ad.size,
    };
  }

  //Update hair/nails

  async updateOneHairDetail(adminId: string, new_admin: any) {
    const current_admin = await this.findOneDetailFromDB(adminId);

    if (new_admin.name) current_admin.name = new_admin.name;
    if (new_admin.hairnailname)
      current_admin.hairnailname = new_admin.hairnailname;
    if (new_admin.price) current_admin.price = new_admin.price;
    if (new_admin.image) current_admin.image = new_admin.image;
    if (new_admin.category) current_admin.category = new_admin.category;
    if (new_admin.description)
      current_admin.description = new_admin.description;
    if (new_admin.size) current_admin.size = new_admin.size;

    try {
      const admin_model = new this.__adminModel(current_admin);
      const ad = await admin_model.save();
      return {
        id: ad.id,
        name: ad.name,
        hairnailname: ad.hairnailname,
        price: ad.price,
        image: ad.image,
        category: ad.category,
        description: ad.description,
        size: ad.size,
      };
    } catch (error) {
      if (error.code === 11000) {
        if (error.keyValue.hairnailname)
          throw new BadRequestException('Hair or Nails  already exists');
        if (error.keyValue.image)
          throw new BadRequestException('Image already exists');
      }
      throw new BadRequestException(error);
    }
  }

  //Delete one detail

  async deleteOneDetailsInDB(adminId: string) {
    await this.findOneDetailFromDB(adminId);
    const remove_phonebook = await this.__adminModel
      .findOneAndDelete({ _id: adminId })
      .exec();
    return { message: `successfully deleted ${remove_phonebook.hairnailname}` };
  }

  async searchDetailsByName(requset: any) {
    return (
      await this.__adminModel
        .find({
          $or: [
            { name: new RegExp(requset.query.s.toString(), 'i') },
            { email: new RegExp(requset.query.s.toString(), 'i') },
          ],
        })
        .sort({ hairnailname: 1 })
        .exec()
    ).map((ad: any) => ({
      id: ad.id,
      name: ad.name,
      hairnailname: ad.hairnailname,
      price: ad.price,
      image: ad.image,
      category: ad.category,
      description: ad.description,
      size: ad.size,
    }));
  }

  async findOneDetailFromDB(id: string) {
    let admins: any;

    try {
      admins = await this.__adminModel.findOne({ _id: id });
    } catch (error) {
      throw new NotFoundException('Style not in the database');
    }

    if (!admins) throw new NotFoundException('Style not in the database');

    return admins;
  }
}
