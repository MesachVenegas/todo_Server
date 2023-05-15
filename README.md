# CRUD API

CRUD API made with NodeJs and **Express** using **PostgreSQL** like database, with **Sequelize ORM** to manage the database and request.

To use you need [download](https://github.com/MesachVenegas/todo_Server/archive/refs/heads/main.zip) the project, once downloaded moved to the project and run the following command

```npm
npm install
```

and now chose you need run normal or development mode:

- to run normal mode:

```npm
npm run start
```

- development mode:

```npm
npm run dev
```

---

## Get All Todos

To get all todos available on server the end point is:
``` /api/v1/todos ```

you got a response like this:

```json
    {
        {
            id: 1,
            title: "Go to run",
            description: "run a 5 miles on the night",
            is_complete: true
        },
        {
            id: 2,
            title: "make shopping",
            description: "make shopping this fryday"
            is_complete: false
        }
    }
```

## Get a todo by id

To get a specific todo use this endpoint:
```/api/v1/todos/id```

>example /api/v1/todos/2

you got a response like this:

```json
    {
        id: 2,
        title: "make shopping",
        description: "make shopping this fryday"
        is_complete: false
    }
```
