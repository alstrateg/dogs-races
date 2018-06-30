
- Entity, a dog, has a name, age, and a race (choose 5 races, one dog will belong to one of your chosen 5 races). Name should consist of lowercase letters, with a length between 5 and 20. Age should be a number between 0 and 30 inclusively.

- There's a home view, explaining what the application is about (path: /), it also links to the list view, and a form to create new dogs.

- 404s should be redirected to home view.

- There's a list view (path: /dogs), showing a list of dogs, with names, ages, and races. Don't paginate, display all records. Each records has a button to edit, and a button to delete.

- There's a create view (path: /dogs/new), showing a form, to add a new dog.

- There's an update view (path: /dogs/edit/:id), showing a form, to update the dog with a given id.

- Very basic styling, content should have a width of 600px, or 300px if the device has a width of less than 620px.

- You are free to choose the framework, but AngularJS, or Angular are preferred.

- To persist data use json-server (https://github.com/typicode/json-server).

- Button to delete (list view) should be its own component (demonstrate inter-component communication).

- List page should have a loading, and an error states. Add tests for list page.

- Use flexbox for positioning.