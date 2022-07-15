"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["dom"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dom": () => (/* binding */ Dom)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");




const Dom = (function() {
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
      _projects__WEBPACK_IMPORTED_MODULE_0__.Projects.addNewProject(input.value);
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
      _todos__WEBPACK_IMPORTED_MODULE_1__.todos.addTodo(_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.getCurrentProject(),title.value,date.value);
      form.classList.add('hidden');
      title.value = '';
      date.value = '';
      renderTodoList(_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.getCurrentProject());
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
    const nameList = _projects__WEBPACK_IMPORTED_MODULE_0__.Projects.getProjectsNames();
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
    const list = _projects__WEBPACK_IMPORTED_MODULE_0__.Projects.getProject(name).todoList;
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


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
const Projects = (function() {
  function getProjectsNames() {
    let list = []
    const keys = Object.keys(localStorage);
    for (const key of keys) {
      list.push(JSON.parse(localStorage.getItem(key)).name);
    }
    return list;
  }
  function addNewProject(name) {
    localStorage.setItem(name, JSON.stringify(createProject(name)));
  }
  function getProject(name) {
    return JSON.parse(localStorage.getItem(name));
  }
  function setProject(name, project) {
    localStorage.setItem(name, JSON.stringify(project));
  }
  function getCurrentProject() {
    const projectName = document.querySelector('#project-name');
    return projectName.textContent;
  }
  const createProject = (name) => {
    const todoList = [];
    return {name, todoList};
  }
  return {addNewProject, getProject, setProject, getProjectsNames, getCurrentProject};
})();

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");

const todos = (function() {
  function addTodo(name, title, date) {
    const project = _projects__WEBPACK_IMPORTED_MODULE_0__.Projects.getProject(name)
    project.todoList.push(createTodo(title, date));
    _projects__WEBPACK_IMPORTED_MODULE_0__.Projects.setProject(name, project);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDSjtBQUNGO0FBQ2hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBYSxDQUFDLGlFQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQTBCO0FBQy9DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0VBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdktNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFVBQVU7QUFDVixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQnFDO0FBQy9CO0FBQ1A7QUFDQSxvQkFBb0IsMERBQW1CO0FBQ3ZDO0FBQ0EsSUFBSSwwREFBbUI7QUFDdkI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyB0b2RvcyB9IGZyb20gJy4vdG9kb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERvbSA9IChmdW5jdGlvbigpIHtcclxuICBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBwYWdlLmFwcGVuZENoaWxkKGNyZWF0ZVNpZGViYXIoKSk7XHJcbiAgICBwYWdlLmFwcGVuZENoaWxkKGNyZWF0ZUJvZHkoKSk7XHJcbiAgICByZXR1cm4gcGFnZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0JztcclxuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVByb2plY3RGb3JtKCk7XHJcbiAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZWJhcicpO1xyXG4gICAgcHJvamVjdHMuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cycpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QnKTtcclxuXHJcbiAgICBzaWRlYmFyLnRleHRDb250ZW50ID0gJ1Byb2pldHMnO1xyXG4gICAgY3JlYXRlUHJvamVjdHMocHJvamVjdHMpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICByZXR1cm4gc2lkZWJhcjtcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWlucHV0Jyk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1zdWJtaXQnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICBQcm9qZWN0cy5hZGROZXdQcm9qZWN0KGlucHV0LnZhbHVlKTtcclxuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgcmVuZGVyUHJvamVjdCgpO1xyXG4gICAgfSlcclxuXHJcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFERFwiO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby10aXRsZS1pbnB1dCcpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWRhdGUtaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tc3VibWl0Jyk7XHJcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgY29uc29sZS5sb2coZGF0ZS52YWx1ZSk7ICAgIFxyXG4gICAgICB0b2Rvcy5hZGRUb2RvKFByb2plY3RzLmdldEN1cnJlbnRQcm9qZWN0KCksdGl0bGUudmFsdWUsZGF0ZS52YWx1ZSk7XHJcbiAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgIHRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICAgIGRhdGUudmFsdWUgPSAnJztcclxuICAgICAgcmVuZGVyVG9kb0xpc3QoUHJvamVjdHMuZ2V0Q3VycmVudFByb2plY3QoKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQm9keSgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlVG9kb0Zvcm0oKTtcclxuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdib2R5Jyk7XHJcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xyXG4gICAgdG9kb3Muc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvcycpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRvZG8nKTtcclxuICAgIFxyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH0pXHJcblxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHRvZG9zKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgcmV0dXJuIGJvZHk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbmFtZUxpc3QgPSBQcm9qZWN0cy5nZXRQcm9qZWN0c05hbWVzKCk7XHJcbiAgICBuYW1lTGlzdC5mb3JFYWNoKChuYW1lKT0+e1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnJlbmRlclRvZG9MaXN0KG5hbWUpKTtcclxuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xyXG4gICAgd2hpbGUocHJvamVjdHMuZmlyc3RDaGlsZCl7XHJcbiAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3RzLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlUHJvamVjdHMocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyVG9kb0xpc3QobmFtZSkge1xyXG4gICAgY29uc3QgbGlzdCA9IFByb2plY3RzLmdldFByb2plY3QobmFtZSkudG9kb0xpc3Q7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG4gICAgcHJvamVjdE5hbWVFbGVtLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHdoaWxlKHRvZG9MaXN0LmZpcnN0Q2hpbGQpe1xyXG4gICAgICB0b2RvTGlzdC5yZW1vdmVDaGlsZCh0b2RvTGlzdC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGxpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgY29uc3QgdG9kb0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGRhdGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWBcclxuICAgICAgZGF0ZUVsZW0udGV4dENvbnRlbnQgPSB0b2RvLmRhdGU7XHJcblxyXG4gICAgICB0b2RvRWxlbS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XHJcbiAgICAgIHRpdGxlRWxlbS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgICBkYXRlRWxlbS5jbGFzc0xpc3QuYWRkKCdkYXRlRWxlbScpO1xyXG5cclxuICAgICAgdG9kb0VsZW0uYXBwZW5kQ2hpbGQodGl0bGVFbGVtKTtcclxuICAgICAgdG9kb0VsZW0uYXBwZW5kQ2hpbGQoZGF0ZUVsZW0pO1xyXG4gICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRWxlbSk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiB7cmVuZGVyUGFnZSwgcmVuZGVyVG9kb0xpc3R9O1xyXG59KSgpO1xyXG4iLCJleHBvcnQgY29uc3QgUHJvamVjdHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHNOYW1lcygpIHtcclxuICAgIGxldCBsaXN0ID0gW11cclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICBsaXN0LnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKS5uYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsaXN0O1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KG5hbWUpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZVByb2plY3QobmFtZSkpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFByb2plY3QobmFtZSwgcHJvamVjdCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xyXG4gICAgcmV0dXJuIHByb2plY3ROYW1lLnRleHRDb250ZW50O1xyXG4gIH1cclxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XHJcbiAgICByZXR1cm4ge25hbWUsIHRvZG9MaXN0fTtcclxuICB9XHJcbiAgcmV0dXJuIHthZGROZXdQcm9qZWN0LCBnZXRQcm9qZWN0LCBzZXRQcm9qZWN0LCBnZXRQcm9qZWN0c05hbWVzLCBnZXRDdXJyZW50UHJvamVjdH07XHJcbn0pKCk7IiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcclxuZXhwb3J0IGNvbnN0IHRvZG9zID0gKGZ1bmN0aW9uKCkge1xyXG4gIGZ1bmN0aW9uIGFkZFRvZG8obmFtZSwgdGl0bGUsIGRhdGUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0cy5nZXRQcm9qZWN0KG5hbWUpXHJcbiAgICBwcm9qZWN0LnRvZG9MaXN0LnB1c2goY3JlYXRlVG9kbyh0aXRsZSwgZGF0ZSkpO1xyXG4gICAgUHJvamVjdHMuc2V0UHJvamVjdChuYW1lLCBwcm9qZWN0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGF0ZSkge1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGF0ZX07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldFRvZG9MaXN0KG5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KG5hbWUpXHJcbiAgICByZXR1cm4gcHJvamVjdC50b2RvTGlzdDtcclxuICB9XHJcbiAgcmV0dXJuIHthZGRUb2RvfTtcclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=