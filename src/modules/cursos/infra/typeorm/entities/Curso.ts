import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import Campus from "@modules/campus/infra/typeorm/entities/Campus";
import Aluno from "@modules/alunos/infra/typeorm/entities/Aluno";

@Entity("Curso", { database: "universidade" })
class Curso {
  @PrimaryGeneratedColumn("increment")
  id_curso: number;
  
  @Column("varchar")
  nome: string;

  @Column("varchar")
  turno: string;

  @Column("int")
  id_campus: number;

  //@ManyToOne(type => Campus, cursos => Curso)
  //@JoinColumn({ name: 'id_campus' })
  //campus: Campus;

  @ManyToOne(() => Campus, campus => campus.cursos)
  @JoinColumn({ name: 'id_campus' })
  campus: Campus;

  @OneToOne(() => Aluno, aluno => aluno.curso)
  aluno: Aluno;
}

export default Curso;
