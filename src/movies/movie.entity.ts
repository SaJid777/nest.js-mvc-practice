import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  static find(): Movie[] | PromiseLike<Movie[]> {
      throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string; 

  @Column()
  image: string;

  @Column()
  year: string;

  @Column({ default: true })
  isActive: boolean;
}