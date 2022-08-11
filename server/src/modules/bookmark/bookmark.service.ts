import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bookmark } from './bookmark.entity';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly repository: Repository<Bookmark>
  ) {}

  async getAll():Promise<Bookmark[]> {
    const data = await this.repository.find()
    return data
  }

  async add(params: Partial<Bookmark>):Promise<Bookmark> {
    throw new HttpException('参数错误', HttpStatus.BAD_REQUEST);
    const result = await this.repository.create(params)
    await this.repository.save(result);
    return result;
  }

  async del(id) {
    const data = await this.repository.findOne(id);
    await this.repository.remove(data);
    return true
  }
}
