O Objetivo do desafio é criar um proxy reverso utilizando Nginx para um app node.

Para rodar o projeto basta utilizar docker-compose up -d --build.

Na primeira execução é necessário criar a tabela no banco com as instruções abaixo:
Execute os comandos abaixo
1 - exec -it db bash
2 - mysql -uroot -p
3 - root
4 - use nodedb;
5 - create table people (id int not null auto_increment,name varchar(255), primary key(id));

Finalizado, basta sair do container e acessar localhost:8080
