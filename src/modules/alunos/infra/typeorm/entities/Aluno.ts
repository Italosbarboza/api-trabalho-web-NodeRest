import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import Campus from "@modules/campus/infra/typeorm/entities/Campus";
import Curso from "@modules/cursos/infra/typeorm/entities/Curso";
import Telefone from "./Telefone";

@Entity("Aluno", { database: "universidade" })
class Aluno {
  @PrimaryGeneratedColumn("increment")
  id_aluno: number;

  @Column("varchar")
  matricula: string;

  @Column("varchar")
  nome: string;

  @Column("date")
  data_nascimento: Date;

  @Column("int")
  id_curso: number;

  @Column("int")
  id_campus: number;

  @OneToOne(() => Curso, curso => curso.aluno, { eager: true })
  @JoinColumn({ name: 'id_curso' })
  curso: Curso;

  //@OneToOne(() => Campus, campus => campus.aluno, { eager: true })
  //@JoinColumn({ name: 'id_campus' })
  //campus: Campus;

  @OneToOne(() => Telefone, telefone => telefone.aluno, { eager: true })
  telefone: Telefone;
}

export default Aluno;
