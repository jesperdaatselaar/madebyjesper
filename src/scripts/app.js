const root = document.getElementById("root");
const home = document.getElementById("home");
const about = document.getElementById("about");
const photos = document.getElementById("photos");
const projects = document.getElementById("projects");

home.onclick = (e) => {
  console.log("Home clicked");
  e.preventDefault();
  navigate("/");
};
about.onclick = (e) => {
  console.log("about clicked");
  e.preventDefault();
  navigate("/about");
};
photos.onclick = (e) => {
  e.preventDefault();
  navigate("/photos");
};
projects.onclick = (e) => {
  e.preventDefault();
  navigate("/projects");
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
  root.innerHTML = req.responseText;;
  // Change naming
  document.getElementById("breadcrumb").innerHTML = pathname;
  document.title =
    pagename.charAt(0).toUpperCase() +
    pagename.slice(1) +
    " - Made by Jesper";
};

window.onpopstate = () => {
  root.innerHTML = navigate(window.location.pathname);
};

navigate(window.location.pathname)
