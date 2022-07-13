import './style.css';
import { Dom } from './dom';
import { Projects } from './projects';
import { todos } from './todos';
localStorage.clear();
Projects.addNewProject('p1');
Projects.addNewProject('p2');
Projects.addNewProject('p3');

todos.addTodo('p1', 'soccer', '22-22-2022');
todos.addTodo('p2', 'aaaaawqqw', '22-22-2022');
todos.addTodo('p3', 'aawef', '22-22-2022');
console.log(Projects.getProjectsNames());
document.body.appendChild(Dom.renderPage());