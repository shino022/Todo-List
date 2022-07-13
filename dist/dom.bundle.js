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
    const nameList = _projects__WEBPACK_IMPORTED_MODULE_0__.Projects.getProjectsNames();
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
  const createProject = (name) => {
    const todoList = [];
    return {name, todoList};
  }
  return {addNewProject, getProject, setProject, getProjectsNames};
})();
/***
 * localstorage{
 *              project01: {todoList[todo{}, todo{}, todo{}]}
                project02: {todoList[]}
                }
 */


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0VBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9ETTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsVUFBVTtBQUNWLENBQUM7QUFDRDtBQUNBO0FBQ0EsNEJBQTRCLGVBQWUsUUFBUSxRQUFRO0FBQzNELDRCQUE0QjtBQUM1QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcclxuXHJcbmV4cG9ydCBjb25zdCBEb20gPSAoZnVuY3Rpb24oKSB7XHJcbiAgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgcGFnZS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyKCkpO1xyXG4gICAgcGFnZS5hcHBlbmRDaGlsZChjcmVhdGVCb2R5KCkpO1xyXG4gICAgcmV0dXJuIHBhZ2U7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvZG8gTGlzdCc7XHJcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcclxuICAgIHJldHVybiBoZWFkZXI7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZGViYXInKTtcclxuICAgIHByb2plY3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMnKTtcclxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC1wcm9qZWN0Jyk7XHJcblxyXG4gICAgc2lkZWJhci50ZXh0Q29udGVudCA9ICdQcm9qZXRzJztcclxuICAgIGNyZWF0ZVByb2plY3RzKHByb2plY3RzKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcclxuXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIHJldHVybiBzaWRlYmFyO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVCb2R5KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgXHJcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9keScpO1xyXG4gICAgdG9kb3Muc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvcycpO1xyXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRvZG8nKTtcclxuICAgIFxyXG4gICAgLy9hcHBlbmQgdG9kb3NMaXN0IHRvIHRvZG9zXHJcbiAgICBib2R5LnRleHRDb250ZW50ID0gJ3Byb2plY3RzIG5hbWUnOyAvL2NoYW5nZSBpdCB0byBwcm9qZWN0J3MgbmFtZVxyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xyXG5cclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodG9kb3MpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgcmV0dXJuIGJvZHk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBuYW1lTGlzdCA9IFByb2plY3RzLmdldFByb2plY3RzTmFtZXMoKTtcclxuICAgIGZvcihjb25zdCBpIGluIG5hbWVMaXN0KXtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lTGlzdFtpXSk7XHJcbiAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBuYW1lTGlzdFtpXTtcclxuICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbmRlclRvZG9MaXN0KG5hbWUpIHtcclxuXHJcbiAgfVxyXG4gIHJldHVybiB7cmVuZGVyUGFnZX07XHJcbn0pKCk7XHJcbiIsImV4cG9ydCBjb25zdCBQcm9qZWN0cyA9IChmdW5jdGlvbigpIHtcclxuICBmdW5jdGlvbiBnZXRQcm9qZWN0c05hbWVzKCkge1xyXG4gICAgbGV0IGxpc3QgPSBbXVxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgIGxpc3QucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QobmFtZSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlUHJvamVjdChuYW1lKSkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWUpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2V0UHJvamVjdChuYW1lLCBwcm9qZWN0KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XHJcbiAgfVxyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXTtcclxuICAgIHJldHVybiB7bmFtZSwgdG9kb0xpc3R9O1xyXG4gIH1cclxuICByZXR1cm4ge2FkZE5ld1Byb2plY3QsIGdldFByb2plY3QsIHNldFByb2plY3QsIGdldFByb2plY3RzTmFtZXN9O1xyXG59KSgpO1xyXG4vKioqXHJcbiAqIGxvY2Fsc3RvcmFnZXtcclxuICogICAgICAgICAgICAgIHByb2plY3QwMToge3RvZG9MaXN0W3RvZG97fSwgdG9kb3t9LCB0b2Rve31dfVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdDAyOiB7dG9kb0xpc3RbXX1cclxuICAgICAgICAgICAgICAgIH1cclxuICovXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==