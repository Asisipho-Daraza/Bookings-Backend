import { Module } from '@nestjs/common';
import { AdminSideService } from './admin-side.service';
import { AdminSideController } from './admin-side.controller';
import { AdminSchema } from './adminModel';
import { MongooseModule } from '@nestjs/mongoose';
// import { AdminSchema } from 'src/adminBooking/admin-book/adminSchema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  ],

  providers: [AdminSideService],
  controllers: [AdminSideController],
})
export class AdminSideModule {}
