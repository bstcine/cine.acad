//
// if ('scrollRestoration' in history) {
//   history.scrollRestoration = 'manual';
// }
export function onRouteChange({ location, routes, action }) {
  window.scrollTo(0, 0);
}
