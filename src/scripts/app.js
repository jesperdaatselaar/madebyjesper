const navigateTo = url => { 
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view: () => { console.log("Home")}},
    { path: "/about", view: () => { console.log("About")}},
    { path: "/projects", view: () => { console.log("Projects")}},
    { path: "/photos", view: () => { console.log("Photos")}},
    { path: "/404", view: () => { console.log("404")}}
  ];

  const potentialMatch = routes.map(r => { 
    return { 
      route: r,
      result: location.pathname === r.path
    }
  });

  let match = potentialMatch.find(potentialMatch => potentialMatch.result);

  if (!match) {
    match = {
      route:  routes.find(r => r.path === "/404"),
      result: true
    }
  }

  console.log(match)
}

window.addEventListener('popstate', router )

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href)
    }
  })

  router()
})