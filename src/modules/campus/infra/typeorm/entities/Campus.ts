import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne
} from "typeorm";
import Curso from "@modules/cursos/infra/typeorm/entities/Curso";
import Aluno from "@modules/alunos/infra/typeorm/entities/Aluno";

@Entity("Campus", { database: "universidade" })
class Campus {
  @PrimaryGeneratedColumn("increment")
  id_campus: number;

  @Column("varchar")
  codigo_campus: string;

  @Column("varchar")
  nome: string;

  @Column("varchar")
  cidade: string;

  //@OneToMany(type => Curso, campus => Campus)
  //cursos: Curso[];

  @OneToMany(() => Curso, cursos => cursos.campus, {eager: true})
  cursos: Curso[];

  @OneToOne(() => Aluno, aluno => aluno.campus)
  aluno: Aluno;

}

export default Campus;
