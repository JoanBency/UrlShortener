<a name="readme-top"></a>

<div align="center">

  <h3><b>URL Shortener</b></h3>

</div>


# Table of Contents

- [Project Description](#project-description)
  - [Platform Used](#platform-used)
  - [Deploying on Docker](#docker)
- [Getting Started on local](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Run tests](#run-tests)

<!-- PROJECT DESCRIPTION -->

# Country Details <a name="project-description"></a>

> Country Details is an app where you can submit a long URL and display the registered shorten
URL.


## Platform Used <a name="platform-used"></a>


<h5>Frontend - React.js</h5>
  <br />
<h5>Backend - Node.js, Express, MongoDB</h5>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DOCKER -->

## Deploying on Docker <a name="docker"></a>

> Client and Server can be deployed using <b>Docker compose</b>

> Backend Side:

```
  docker build -t "backend" ./backend/
```

> Frontend Side:

```
  docker build -t "frontend" ./frontend/
```

> Docker Compose

```
  docker compose up
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started on local <a name="getting-started"></a>

> Clone the code from GitHub and unzip it. Folder named <b>frontend</b> holds the React.js Client code while the folder <b>backend</b> holds the Node.js Server code.

### Prerequisites

In order to run this project you need:

<ol>
    <li>Node.js</li>
    <li>npm</li>
</ol>

### Setup

> Backend Side:

```
  cd backend

  npm install
```

> Frontend Side:

```
  cd frontend

  npm install
```

Create a <b>.env.local</b> file for backend and add the value for <b>MONGO_URI, DB_URI, BASE_URL</b> as the url of the localhost with port server is run on, if you want a new one.
eg: BASE_URL=http://localhost:3000

### Usage

> Server Side:

```
  npm start
```

> Client Side:

```
  npm start
```

### Run tests

We use Jest for unit testing on the Server side and Cypress for e2e testing on the Client side. 
To run tests, run the following command:

> Server Side:

```
  cd backend
  npm test
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>