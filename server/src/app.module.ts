import { Module } from '@nestjs/common';
import { UserModule } from '@/modules/user/user.module';
import { BookmarkModule } from '@/modules/bookmark/bookmark.module';
import database from '@/config/database';

@Module({
  imports: [database, UserModule, BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
