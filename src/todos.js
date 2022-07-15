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
  function getTodoList(name) {
    const project = getProject(name)
    return project.todoList;
  }
  return {addTodo};
})();