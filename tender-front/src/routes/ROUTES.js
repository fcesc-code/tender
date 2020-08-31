const ROUTES = [
  { path: '/', title: 'home', nav: true },
  { path: '/profile', title: 'profile', nav: true },
  { path: '/portfolio', title:'portfolio', nav: true },
  { path: '/project', title: 'project', nav: false },
  { path: '/signup', title: 'register', nav: true }
];

// path here means root path

const LINKS = new Map();
for(let route of ROUTES){
  LINKS.set(route.title, route);
}

export default { ROUTES, LINKS };