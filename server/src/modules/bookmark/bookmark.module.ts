import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';

import { Bookmark } from './bookmark.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark])],
  controllers: [BookmarkController],
  providers: [BookmarkService]
})
export class BookmarkModule {}
