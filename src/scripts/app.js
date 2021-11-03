const root = document.getElementById("root");
const home = document.getElementById("home");
const about = document.getElementById("about");
const photos = document.getElementById("photos");
const projects = document.getElementById("projects");

home.onclick = (e) => {
  e.preventDefault();
  navigate("/");
};
about.onclick = (e) => {
  e.preventDefault();
  navigate("/about");
};
photos.onclick = (e) => {
  e.preventDefault();
  navigate("/photos");
  getPhotos();
};
projects.onclick = (e) => {
  e.preventDefault();
  navigate("/projects");
  getProjects();
};

const navigate = (pathname) => {
  let pagename = pathname.slice(1);
  if (pathname === "/") pagename = "home";
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // Request content
  let url = `../routes/${pagename}.html`;
  let req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send();
  root.innerHTML = req.responseText;
  // Change naming
  document.getElementById("breadcrumb").innerHTML = pathname;
  document.title =
    pagename.charAt(0).toUpperCase() + pagename.slice(1) + " - Made by Jesper";
};

window.onpopstate = () => {
  root.innerHTML = navigate(window.location.pathname);
};

navigate(window.location.pathname);

const getPhotos = () => {
  let container = document.getElementById("photos-container");
};

const getProjects = () => {
  let container = document.getElementById("projects-container");
};
