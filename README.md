
<h4 align="center">
<img src="https://wearesocial-net.s3.amazonaws.com/us/wp-content/uploads/sites/7/2019/05/WAS_NYC_WEB_LOGOSUber-Eats.png" width="250px"/><br>
 <b>Versão simplificada do UberEats</b>
</h4>
<p align="center">
   <a href="https://github.com/joaovitorzv"><img alt="Made by Joao vitor" src="https://img.shields.io/badge/made%20by-joao-red"></a>
   <a href="https://github.com/joaovitorzv/UberEats/blob/develop/LICENSE"><img alt="License" src="https://img.shields.io/github/license/joaovitorzv/UberEats?style=flat-square"></a>
   <a href="https://github.com/joaovitorzv/UberEats"><img alt="Stars" src="https://img.shields.io/github/stars/joaovitorzv/ubereats?style=social">
</p></a> <br>

### Screenshots  📷

*Restaurant manager*
<p float="left">
 <img src="/screenshots/signup-page.png" align="middle" width="430px"/>
 <img src="/screenshots/menu-manager-page.png" align="middle" width="430px"/>
</p>

*Customer*

<p float="left">
 <img src="/screenshots/home-customer-page.png" align="middle" width="430px"/>
 <img src="/screenshots/restaurant-customer-page.png" align="middle" width="430px"/>
</p>




### :rocket: Tecnologias usadas
Este projeto está sendo desenvolvido com as seguintes tecnologias:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/)
- [JWT](https://jwt.io/)
-  [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)
- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [Styled Components](https://styled-components.com/)

### :muscle: O Projeto 

A ideia principal é criar uma aplicação baseada nas principais funcionalidades das tech foods, o design/layout do projeto é baseado no UberEats. 

### 💡 Principais Funcionalidades 
<hr> 

- <b>Versão Web (Apenas para restaurantes)</b>
	- Cadastro de restaurantes
	- Cadastro de Items  no cardapio
	- Aceitar Pedidos em real time
	- Analytics com pagamentos, taxas etc
- <b>Versão Mobile (Apenas para clientes)</b>
	- Cadastro/Login
	- Visualizar todos restaurantes e cardapios
	- Realizar o pagamento de um pedido
	- Resposta do restaurante (real time)

### 🎯 Objetivo
O objetivo deste projeto, é aprender coisas que serão utilizadas em um ambiente real de trabalho. me desafiei a criar este projeto para enxergar o meu nivel de conhecimento e colocar como projeto no meu portfolio.


### 🔥 Como rodar esse projeto (How to run this project)
***To run API***

Create postgre docker container
```sh
$ docker run --name ubereats -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```
Install the packages run migrations and start API

```sh
$ yarn install
$ yarn sequelize db:migrate
$ yarn dev
```

***To run Frontend***
```sh
$ yarn install
$ yarn start
```

***To run Mobile***

> **Note:** The mobile has been discontinued, but if you want to run it, just follow the following commands


```sh
$ yarn install
$ react-native run-android (or run-ios)
```

### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

*Fique a vontade para dar um fork neste repo e alterar oque quiser* 

<p align="center">Feito com ❤️ por <strong>João vitor oliveira 👋</p>
