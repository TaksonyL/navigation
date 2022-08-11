import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tt_bookmark')
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  icon: string;

  @Column()
  url: string;
}