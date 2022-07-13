import { Projects } from './projects';
export const todos = (function() {
  function addTodo(name, title, date) {
    const project = Projects.getProject(name)
    project.todoList.push(createTodo(title, date));
    Projects.setProject(name, project);
  }
  function createTodo(title, date) {
    return {title, date};
  }
  return {addTodo};
})();