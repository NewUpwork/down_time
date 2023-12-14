# Downtime App

## The project developers

The project is developed by the third-year Information Technology students from Oulu University of Applied Sciences:

- **Mufida dKHILI EP Alakulju**, [GitHub account](https://github.com/mufidaA)
- **Moeez Khan**, [GitHub account](https://github.com/iammoeezkhann)
- **Yinan Li**, [GitHub account](https://github.com/YinanLi1987)

We have been working together throughout the whole project and everyone has been involved in all the parts of the development process.

## Introduction of the project

This project is about creating a application for providing unpaid company-oriented project for IT students.

- **Video of the project**, [Link](https://www.youtube.com)

## Description of the project

The project has been developed by following Agile software development method and Kanban framework template in GitHub Projects has been used to implement it. Communication of our team has been constant throughout the project and the project progressed as expected. Our team has been meeting evenly on campus and remotely on Teams. Also, teacher meetings have been held weekly and everybody has been able to attend. Overall, our team has been self-organizing, communicative, and able to deliver well-functioning application based on the project requirements.

## Technologies used in the project

- User Interface:

  - **HTML & CSS**
  - [**Bootstrap**](https://github.com/twbs/bootstrap#readme) 5.2.2
  - [**React Bootstrap**](https://react-bootstrap.github.io/) 2.6.0

- Front-end Framework:

  - [**React.js**](https://reactjs.org/) 18.2.0

- Back-end:

  - [**Node.js**](https://nodejs.org/en/) 19.0.1
  - [**Express.js**](https://github.com/expressjs/express) 4.18.2
  - [**Axios.js**](https://github.com/axios/axios#readme) 1.1.3

- Database:

  - [**MySQL**](https://www.mysql.com/) 8.0.31

- Deployment:
  - [**Heroku**](https://)

## Tools used in the project

- UI design tool: [**Figma**](https://www.figma.com/)
- Code editor: [**Visual Studio Code**](https://code.visualstudio.com/)
- Database design tool: [**MySQL Workbench**](https://www.mysql.com/products/workbench/)
- Version control: [**Git**](https://git-scm.com/) **&** [**GitHub**](https://github.com/)

## The architecture of the application

![Application Architecture Image](./src/Images/ApplicationArchitecture.png)

## Interface description

The application consists of different views and Signup/Login functionality. These can be accessed through the navigation bar on top of the page:

1. Log in/out
2. Sing up
3. Accept/Refuce cookies
4. Employer publish job:
   - This view is ................
5. Student apply for job:
   - ..........
6. Message system between employer and student:
   - ..........

> Smallest supported window size is 600px horizontal.

## How to install and use the application (locally)

**Step one:**

Download the project / clone the project repository

**Step two:**

Within the root folder, install the following dependencies:

- [**Axios.js**](https://github.com/axios/axios#readme) 1.1.3
- [**Chart.js**](https://www.chartjs.org/) 3.9.1
- [**react-chartjs-2**](https://github.com/reactchartjs/react-chartjs-2#readme) 4.3.1
- [**jwt-decode**](https://github.com/auth0/jwt-decode#readme) 3.1.2
- [**Bootstrap**](https://github.com/twbs/bootstrap#readme) 5.2.2
- [**react-dom**](https://www.npmjs.com/package/react-dom) 18.2.0
- [**react-router-dom**](https://www.npmjs.com/package/react-router-dom) 6.4.3

**Step three:**

Go to the server folder:

```
npm init -y
npm install express
```

Install the following dependencies:

- [**bcrypt**](https://github.com/dcodeIO/bcrypt.js#readme) 2.4.3
- [**body-parser**](https://github.com/expressjs/body-parser#readme) 1.20.1
- [**cors**](https://github.com/expressjs/cors#readme) 2.8.5
- [**jsonwebtoken**](https://github.com/auth0/node-jsonwebtoken#readme) 8.5.1
- [**mysql**](https://github.com/mysqljs/mysql#readme) 2.18.1
- [**passport**](https://github.com/jaredhanson/passport#readme) 0.6.0
- [**passport-http**](https://github.com/jaredhanson/passport-http#readme) 0.3.0
- [**passport-jwt**](https://github.com/themikenicholson/passport-jwt#readme) 4.0.0
- [**uuid**](https://github.com/uuidjs/uuid#readme) 9.0.0

**Step four:**

Create the local database :

- Start mysql and import the _charttest.sql_ file into your local database
- Create a _database.js_ file inside the server folder as follows, and modify the ‘xxxx’ part as needed:

```
const mysql = require("mysql");
        const connection = mysql.createConnection({
         host: "xxxx",
         user: "xxxx",
         password: "xxxx",
         database: "xxxx",
   });

module.exports = connection;
```

**Step five:**

To start the application, run the following command:

```
cd server
node index.js
cd ..
npm start

```
