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
};
projects.onclick = (e) => {
  e.preventDefault();
  navigate("/projects");
};

const getPhotos = () => {
  let container = document.getElementById("photos-container");
  // Get all photos
  let json = new XMLHttpRequest();
  json.open("GET", "../data/photos.json", false);
  json.send();
  let data = JSON.parse(json.responseText);
  // Show all photos
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let div = document.createElement("div");
    div.classList.add("photo")
    div.dataset.id = data[i].id;

    let title = document.createElement("h2");
    title.innerText = data[i].name;

    let description = document.createElement("p")
    description.classList.add("description")
    description.innerText = data[i].description;

    let image = document.createElement("img");
    image.src = data[i].path
    
    div.append(title, description, image)
    container.appendChild(div);
    // Add event listeners
    div.addEventListener("click", (e) => {
      let id = e.target.parentNode.dataset.id
      navigate(`/photos/${id}`);
    })
  }
};

const getProjects = () => {
  let container = document.getElementById("projects-container");
};

const navigate = (pathname) => {
  let pagename = pathname.slice(1);
  // Check for id
  if (pagename.split("/").length > 1 && pagename.split("/")[0] === "photos" ){
    pagename = "photodetail"
  } else if (pagename.split("/").length > 1 && pagename.split("/")[0] === "projects") {
    pagename = "projectdetail"
  }

  if (pathname === "/") pagename = "home";
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // Request content
  let url = `../routes/${pagename}.html`;
  let req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send();
  root.innerHTML = req.responseText;
  // Run function for projects and photos
  if (pagename === "projects") getProjects();
  if (pagename === "photos") getPhotos();
  // Change naming
  document.getElementById("breadcrumb").innerHTML = pathname;
  document.title =
    pagename.charAt(0).toUpperCase() + pagename.slice(1) + " - Made by Jesper";
};

window.onpopstate = () => {
  navigate(window.location.pathname);
};

navigate(window.location.pathname);