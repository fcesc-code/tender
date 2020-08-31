const ROUTES = [
  { path: '/', title: 'home', nav: true },
  { path: '/profile', title: 'profile', nav: true },
  { path: '/portfolio', title:'portfolio', nav: true }
];

const LINKS = new Map();
for(let route of ROUTES){
  LINKS.set(route.title, route);
}

export default { ROUTES, LINKS }