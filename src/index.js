import "./style.css";
import { Dom } from './dom';
import { Projects } from './projects';
import { todos } from './todos';
import { format } from 'date-fns';

localStorage.clear();
localStorage.setItem('Project01', '{"name":"Project01","todoList":[]}');
document.body.appendChild(Dom.renderPage());
Dom.renderTodoList('Project01');

