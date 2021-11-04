import Home from "../views/Home.js";
import About from "../views/About.js";
import Photos from "../views/Photos.js";
import Projects from "../views/Projects.js";
import FourOFour from "../views/404.js";

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
      path: "/projects",
      view: Projects,
    },
    {
      path: "/404",
      view: FourOFour,
    },
  ];

  const potentialMatch = routes.map((r) => {
    return {
      route: r,
      result: location.pathname === r.path,
    };
  });

  let match = potentialMatch.find((potentialMatch) => potentialMatch.result);

  if (!match) {
    match = {
      route: routes.find((r) => r.path === "/404"),
      result: true,
    };
  }

  const view = new match.route.view();

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
