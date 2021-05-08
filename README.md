# NgTodo

Invision wireframe: https://projects.invisionapp.com/freehand/document/RGhiq060r

## Before you start!
 - create a fork of the repo
 - read trough the readme!
 - clone the repo on your local machine and avoid cloning it into an exsting git repository folder! 
 - run `npm install` in project folder to install node dependencies!
 - commit often, preferably after each storypoint!
 - push your progress at the end of the day   


## Story points

| Code       | Story title | description     |
| :---       |    :----:   | :---          |
| NG-01      | Creating a todo       |When we open the application, we see an form, where I can type my task.   |
| NG-02      | Adding todo to the list        | When we click on the 'add todo' button, the typed task item appears in the list The screen can contain many tasks.   |
| NG-03      | Deleting a todo | An button appears next to every single item. If we click on this button, the item is deleted from the list. |
| NG-04    | Validating the todo | The input field validates the task, it can not be empty and the task description must be at least 6 characters long. The validation process runs at every keyup event. The input field is red, when the task description doesn't match the validation criterias, and green, when it is ready to create. |
| NG-05    | Restricting submit  | The 'add todo' button is disabled so far the input doesn't pass the validation.  |
| NG-06    | DB: Storing the todos | If we refresh the browser, the list remains. The storage is a local db.json ran via json-server package, see Data Storage section! |
| NG-07    | DB: deleting todos | If we click the delete button on a todo item, it first deletes it from the database then removes it from the list |
| NG-08    | DB: adding todos | If we click the "add todo" button it saves the item into the db, and only adds the item to the list of items upon successful save! |
| NG-09    | DB&Routing: todo modification | The user  by clicking the edit button can modify a single task on a separate page "edit/:id" - saving the edited item gets updated in the the db. If update was succesfull the app navigates back to todo list screen "/" |




## Data Storage

- use the `json-server` package for storing todo items
- create some mock items (3-5 items) 
- the API path should be localhost:3000/todos
- create a service for http requests before hand, it should handle all basic CRUD operations
- create an interface for Todo
- IMPORTANT! Create db.json outside src folder!




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.
