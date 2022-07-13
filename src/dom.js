import { Projects } from './projects';

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
    const button = document.createElement('button');

    sidebar.setAttribute('id', 'sidebar');
    projects.setAttribute('id', 'projects');
    button.setAttribute('id', 'add-project');

    sidebar.textContent = 'Projets';
    createProjects(projects);
    button.textContent = '+';

    sidebar.appendChild(projects);
    sidebar.appendChild(button);
    return sidebar;
  }
  function createBody() {
    const body = document.createElement('div');
    const todos = document.createElement('div');
    const button = document.createElement('button');
    
    body.setAttribute('id', 'body');
    todos.setAttribute('id', 'todos');
    button.setAttribute('id', 'add-todo');
    
    //append todosList to todos
    body.textContent = 'projects name'; //change it to project's name
    button.textContent = '+';

    body.appendChild(todos);
    body.appendChild(button);
    return body;
  }
  function createProjects(projects) {
    const nameList = Projects.getProjectsNames();
    for(const i in nameList){
      const project = document.createElement('div');
      project.setAttribute('id', nameList[i]);
      project.textContent = nameList[i];
      projects.appendChild(project);
    }
  }
  function renderTodoList(name) {

  }
  return {renderPage};
})();
