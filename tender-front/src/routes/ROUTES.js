const ROUTES = [
  { path: '/', title: 'home', nav: true },
  { path: '/profile', title: 'profile', nav: true },
  { path: 'some', title:'test', nav: false}
];

const LINKS = new Map();
for(let route of ROUTES){
  LINKS.set(route.title, route);
}

export default { ROUTES, LINKS }