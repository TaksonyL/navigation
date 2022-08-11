import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

import { Bookmark } from './bookmark.entity';

@Controller('bookmark')
export class BookmarkController {
  constructor(
    private readonly BookmarkService: BookmarkService
  ) {}

  @Get()
  getAll() {
    return this.BookmarkService.getAll();
  }

  @Post()
  add(@Body() Bookmark) {
    return this.BookmarkService.add(Bookmark);
  }
}
