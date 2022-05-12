import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  email!: string;

  @Column({ type: 'text', nullable: false })
  firstName!: string;

  @Column({ type: 'text', nullable: false })
  lastName!: string;
}
