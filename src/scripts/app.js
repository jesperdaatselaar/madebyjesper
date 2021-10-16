const routes = {
  "/": "home",
  "/about": "about",
  "/projects": "projects",
  "/photos": "photos",
};

const rootDiv = document.getElementById("root");
if (!routes[window.location.pathname]) {
  rootDiv.innerHTML = "404 This page can't be found";
} else {
  rootDiv.innerHTML = routes[window.location.pathname];
}

const navigate = (e, pathname) => {
  e.preventDefault();
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
  changeName();
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

const changeName = () => {
  let pathname = window.location.pathname;
  document.getElementById("breadcrumb").innerHTML = pathname;
  if (pathname == "/") pathname = "/home";
  document.title =
    pathname.slice(1).charAt(0).toUpperCase() +
    pathname.slice(2) +
    " - Made by Jesper";
};

changeName();
