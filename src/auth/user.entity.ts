import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // asta inseamna ca pentru un task vrem sa ii asociem un userul id-ului (in db apare userId ca FK)
  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
