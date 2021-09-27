import { Module } from '@nestjs/common';
import { AdminSideService } from './admin-side.service';
import { AdminSideController } from './admin-side.controller';

@Module({
  providers: [AdminSideService],
  controllers: [AdminSideController]
})
export class AdminSideModule {}
