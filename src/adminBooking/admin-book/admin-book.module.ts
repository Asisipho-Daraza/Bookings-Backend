import { Module } from '@nestjs/common';
import { AdminBookController } from './admin-book.controller';
import { AdminBookService } from './admin-book.service';

@Module({
  controllers: [AdminBookController],
  providers: [AdminBookService]
})
export class AdminBookModule {}
