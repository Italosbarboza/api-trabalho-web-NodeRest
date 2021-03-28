<h1 align="center">
    <img alt="GoStack" src="https://www.provasdevestibular.com.br/wp-content/uploads/2012/06/ufc.jpg" width="300" />
    <br />
    Projeto da Disciplina Desenvolvimento de Software para Web, aplicação Node Rest, pela Universidade Federal do Ceará.
</h1>

## 🚀 Tecnologias:

Essa API é uma atividade da disciplina de desenvolvimento de software para web, onde utiliza-se as tecnologias:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/) ou [GoogleCloud](https://cloud.google.com/)
- [Mysql](https://www.mysql.com/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## 🚀 Comandos para rodar o projeto:
  
  1) yarn install
  2) yarn dev:server

## 🚀 Criando o banco:

Esse projeto está utilizando o banco do google cloud, SGBD Mysql. Mas, caso desative, para rodar o projeto em outro banco, basta ter o Mysql e rodar os comandos:

Create Database universidade;
Use universidade;

CREATE TABLE `Campus` (
  `id_campus` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_campus` varchar(80) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_campus`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `Curso` (
  `id_curso` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_curso` varchar(80) DEFAULT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `turno` varchar(80) DEFAULT NULL,
  `id_campus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_curso`),
  FOREIGN KEY (`id_campus`) REFERENCES `Campus`(`id_campus`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `Aluno` (
  `id_aluno` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) DEFAULT NULL,
  `matricula` varchar(100) DEFAULT NULL,
  `data_nascimento` varchar(50) DEFAULT NULL,
  `id_curso` int(11) NOT NULL,
  `id_campus` int(11) NOT NULL,
  PRIMARY KEY (`id_aluno`),
  foreign key (`id_curso`) references `Curso`(`id_curso`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
  foreign key (`id_campus`) references `Campus`(`id_campus`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `Telefone` (
  `id_telefone` int(11) NOT NULL AUTO_INCREMENT,
  `operadora` varchar(20) DEFAULT NULL,
  `ddd` varchar(5) DEFAULT NULL,
  `numero` varchar(80) DEFAULT NULL,
  `id_aluno` int(11) NOT NULL,
  PRIMARY KEY (`id_telefone`),
  FOREIGN KEY(`id_aluno`) REFERENCES `Aluno`(`id_aluno`)
  ON DELETE CASCADE
  ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

## 🚀 Utilizando o Docker:

Instale o docker na sua máquina.

Em seguinda, utilize o seguinte comando para criar sua imagem:

docker run -d --name mysql -e ALLOW_EMPTY_PASSWORD=yes -e MYSQL_PASSWORD=12345 -e MYSQL_USER=root -e MYSQL_DATABASE=universidade -p 3306:3306 bitnami/mysql:latest

Abra o MYSQL Workbench ou a interface gráfica de sua preferência e crie as tabelas utilizando os mesmos comandos mencionados acima.

Caso a nossa aplicação não rode, tente utilizar na sua interface gráfica os comandos a seguir:

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

Onde root é seu usuário e localhost é sua URL e password é seu password

Então rode a query para recarregar o privilégio:

flush privileges;

Caso o erro persistir, tente sem o @'localhost'.

Feito por Italo da Silva Barboza 👋🏻 [Get in touch!](https://github.com/Italosbarboza/)
