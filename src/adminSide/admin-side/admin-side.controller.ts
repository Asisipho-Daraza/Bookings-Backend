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
import { AdminSideService } from './admin-side.service';

@Controller('admin-side')
export class AdminSideController {
  constructor(private __admin: AdminSideService) {}

  //Search in admin data
  @Get('search')
  async searchDetails(@Req() req: Request) {
    return await this.__admin.searchDetailsByName(req);
  }

  //Add new detail
  @Post()
  async addNewData(
    @Body()
    admin: {
      name: string;
      hairnailname: string;
      price: number;
      image: string;
      category: any[];
      description: string;
      size: any[];
    },
  ) {
    return await this.__admin.addNewDetails(admin);
  }

  //Get all details
  @Get()
  async getAllDetails() {
    return await this.__admin.getAllHairDetails();
  }

  //Get single detail
  @Get('/:adminId')
  async GetOneDetail(@Param('adminId') adminId: string) {
    return await this.__admin.findOneDetail(adminId);
  }

  //Update One  detail
  @Patch('/:adminId')
  async updateOneDetail(
    @Param('adminId') adminId: string,
    @Body()
    admin: {
      name: string;
      hairnailname: string;
      price: number;
      image: string;
      category: any[];
      description: string;
      size: any[];
    },
  ) {
    return await this.__admin.updateOneHairDetail(adminId, admin);
  }

  //Delete One Detail

  @Delete('/:adminId')
  async deleteOneDetail(@Param('adminId') adminId: string) {
    return await this.__admin.deleteOneDetailsInDB(adminId);
  }
}
