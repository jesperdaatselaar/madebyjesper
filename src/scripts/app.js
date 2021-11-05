import Home from "../views/Home.js";
import About from "../views/About.js";
import Photos from "../views/Photos.js";
import PhotoDetail from "../views/PhotoDetail.js";
import Projects from "../views/Projects.js";
import ProjectDetail from "../views/ProjectDetail.js";
import FourOFour from "../views/404.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1],
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    }),
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: Home,
    },
    {
      path: "/about",
      view: About,
    },
    {
      path: "/photos",
      view: Photos,
    },
    {
      path: "/photos/:id",
      view: PhotoDetail,
    },
    {
      path: "/projects",
      view: Projects,
    },
    {
      path: "/projects/:id",
      view: ProjectDetail,
    },
    {
      path: "/404",
      view: FourOFour,
    },
  ];

  const potentialMatch = routes.map((r) => {
    return {
      route: r,
      result: location.pathname.match(pathToRegex(r.path)),
    };
  });

  let match = potentialMatch.find(
    (potentialMatch) => potentialMatch.result !== null,
  );

  if (!match) {
    match = {
      route: routes.find((r) => r.path === "/404"),
      result: [location.pathname],
    };
  }

  console.log(getParams(match));

  const view = new match.route.view(getParams(match));

  document.querySelector("#root").innerHTML = await view.getHTML();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
