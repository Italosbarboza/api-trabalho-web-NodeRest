<h1 align="center">
    <img alt="GoStack" src="https://www.provasdevestibular.com.br/wp-content/uploads/2012/06/ufc.jpg" width="300" />
    <br />
    Projeto da Disciplina Desenvolvimento de Software para Web, aplicação Node Rest, pela Universidade Federal do Ceará.
</h1>

## 🚀 Tecnologias:

Esse projeto foi desenvolvido no Bootcamp GoStack 11.0 da Rocketseat com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/) ou [GoogleCloud](https://cloud.google.com/)
- [Mysql](https://www.mysql.com/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## 🚀 Em construção:

Desenvolvimento API Node- DSW

Create Database universidade;
Use universidade;
CREATE TABLE `Curso` (
  `id_curso` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_curso` varchar(80) DEFAULT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `turno` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `Campus` (
  `id_campus` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_campus` varchar(80) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_campus`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `CampusCurso` (
  `id_campuscurso` int(11) NOT NULL AUTO_INCREMENT,
  `id_campus` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL,
  PRIMARY KEY (`id_campuscurso`),
  foreign key (`id_curso`) references `Curso`(`id_curso`),
  foreign key (`id_campus`) references `Campus`(`id_campus`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `Aluno` (
  `id_aluno` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) DEFAULT NULL,
  `data_nascimento` varchar(50) DEFAULT NULL,
  `id_curso` int(11) NOT NULL,
  `id_campus` int(11) NOT NULL,
  PRIMARY KEY (`id_aluno`),
  foreign key (`id_curso`) references `Curso`(`id_curso`),
  foreign key (`id_campus`) references `Campus`(`id_campus`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `Telefone` (
  `id_telefone` int(11) NOT NULL AUTO_INCREMENT,
  `operadora` varchar(20) DEFAULT NULL,
  `ddd` varchar(5) DEFAULT NULL,
  `numero` varchar(80) DEFAULT NULL,
  `id_aluno` int(11) NOT NULL,
  PRIMARY KEY (`id_telefone`),
  FOREIGN KEY(`id_aluno`) REFERENCES `Aluno`(`id_aluno`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


Feito por Italo da Silva Barboza 👋🏻 [Get in touch!](https://github.com/Italosbarboza/)
