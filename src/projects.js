export const Projects = (function() {
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