const routes = {
  "/": "home",
  "/about": "about",
  "/projects": "projects",
  "/photos": "photos",
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

const navigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

const about = document.getElementById("about");
const photos = document.getElementById("photos");
const projects = document.getElementById("projects");

about.onclick = () => navigate("/about");
photos.onclick = () => navigate("/photos");
projects.onclick = () => navigate("/projects");
