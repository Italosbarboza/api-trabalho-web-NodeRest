import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToOne
  } from "typeorm";
import Aluno from "./Aluno";

  @Entity("Telefone", { database: "universidade" })
  class Telefone {
    @PrimaryGeneratedColumn("increment")
    id_telefone: number;
  
    @Column("varchar")
    operadora: string;
  
    @Column("varchar")
    ddd: string;
  
    @Column("varchar")
    numero: string;
  
    @Column("int")
    id_aluno: number;

    @OneToOne(() => Aluno, aluno => aluno.telefone)
    @JoinColumn({name: 'id_aluno'})
    aluno: Aluno;
}
  
  export default Telefone;