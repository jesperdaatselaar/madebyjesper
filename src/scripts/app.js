const routes = {
  "/": "home",
  "/about": "about",
  "/projects": "projects",
  "/photos": "photos",
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

const navigate = (e, pathname) => {
  e.preventDefault();
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

const about = document.getElementById("about");
const photos = document.getElementById("photos");
const projects = document.getElementById("projects");

home.onclick = (e) => navigate(e, "/");
about.onclick = (e) => navigate(e, "/about");
photos.onclick = (e) => navigate(e, "/photos");
projects.onclick = (e) => navigate(e, "/projects");
