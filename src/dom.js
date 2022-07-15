import { Projects } from './projects';
import { format } from 'date-fns';
import { todos } from './todos';

export const Dom = (function() {
  function renderPage() {
    const page = document.createElement('div');
    page.appendChild(createHeader());
    page.appendChild(createSidebar());
    page.appendChild(createBody());
    return page;
  }
  function createHeader() {
    const header = document.createElement('div');
    header.textContent = 'Todo List';
    header.setAttribute('id', 'header');
    return header;
  }
  function createSidebar() {
    const sidebar = document.createElement('div');
    const projects = document.createElement('div');
    const container = document.createElement('div');
    const button = document.createElement('button');
    const form = createProjectForm();
    sidebar.setAttribute('id', 'sidebar');
    projects.setAttribute('id', 'projects');
    button.setAttribute('id', 'add-project');

    sidebar.textContent = 'Projets';
    createProjects(projects);
    button.textContent = '+';

    button.addEventListener('click', ()=>{
      form.classList.remove('hidden');
    })

    container.appendChild(button);
    container.appendChild(form);
    sidebar.appendChild(projects);
    sidebar.appendChild(container);
    return sidebar;
  }
  function createProjectForm() {
    const form =document.createElement('form');
    const input = document.createElement('input');
    const submit = document.createElement('button');

    form.classList.add('hidden');
    input.setAttribute('id', 'project-input');
    input.setAttribute('type', 'text');
    submit.setAttribute('id', 'project-submit');
    submit.setAttribute('type', 'button');
    submit.addEventListener('click', ()=>{
      Projects.addNewProject(input.value);
      form.classList.add('hidden');
      input.value = '';
      renderProject();
    })

    submit.textContent = "ADD";

    form.appendChild(input);
    form.appendChild(submit);

    return form;
  }
  function createTodoForm() {
    const form =document.createElement('form');
    const title = document.createElement('input');
    const date = document.createElement('input');
    const submit = document.createElement('button');

    form.classList.add('hidden');
    title.setAttribute('id', 'todo-title-input');
    title.setAttribute('type', 'text');
    date.setAttribute('id', 'todo-date-input');
    date.setAttribute('type', 'date');
    submit.setAttribute('id', 'todo-submit');
    submit.setAttribute('type', 'button');
    submit.addEventListener('click', ()=>{
      console.log(date.value);    
      todos.addTodo(Projects.getCurrentProject(),title.value,date.value);
      form.classList.add('hidden');
      title.value = '';
      date.value = '';
      renderTodoList(Projects.getCurrentProject());
    })

    submit.textContent = "Add";

    form.appendChild(title);
    form.appendChild(date);
    form.appendChild(submit);

    return form;
  }

  function createBody() {
    const body = document.createElement('div');
    const projectName = document.createElement('div');
    const todos = document.createElement('div');
    const button = document.createElement('button');
    const form = createTodoForm();
    body.setAttribute('id', 'body');
    projectName.setAttribute('id', 'project-name');
    todos.setAttribute('id', 'todos');
    button.setAttribute('id', 'add-todo');
    
    button.textContent = '+';
    button.addEventListener('click', ()=>{
      form.classList.remove('hidden');
    })

    body.appendChild(projectName);
    body.appendChild(todos);
    body.appendChild(button);
    body.appendChild(form);

    return body;
  }

  function createProjects(projects) {
    const nameList = Projects.getProjectsNames();
    nameList.forEach((name)=>{
      const project = document.createElement('div');
      project.setAttribute('id', name);
      project.addEventListener('click', ()=>renderTodoList(name));
      project.textContent = name;
      projects.appendChild(project);
    })
  }

  function renderProject() {
    const projects = document.querySelector('#projects');
    while(projects.firstChild){
      projects.removeChild(projects.firstChild);
    }
    createProjects(projects);
  }

  function renderTodoList(name) {
    const list = Projects.getProject(name).todoList;
    const todoList = document.querySelector('#todos');
    const projectNameElem = document.querySelector('#project-name');
    projectNameElem.textContent = name;
    while(todoList.firstChild){
      todoList.removeChild(todoList.firstChild);
    }
    list.forEach((todo)=>{
      const todoElem = document.createElement('div');
      const titleElem = document.createElement('div');
      const dateElem = document.createElement('div');

      titleElem.textContent = `${todo.title}`
      dateElem.textContent = todo.date;

      todoElem.classList.add('todo');
      titleElem.classList.add('title');
      dateElem.classList.add('dateElem');

      todoElem.appendChild(titleElem);
      todoElem.appendChild(dateElem);
      todoList.appendChild(todoElem);
    })
    
  }
  return {renderPage, renderTodoList};
})();
