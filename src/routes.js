import App from './scenes/App';
import Forecast from './scenes/Forecast';
import Life from './scenes/Life';
import Disaster from './scenes/Disaster';
import Attraction from './scenes/Attraction';

const routes = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/forecast',
    component: Forecast,
  },
  {
    path: '/life',
    component: Life,
  },
  {
    path: '/disaster',
    component: Disaster,
  },
  {
    path: '/attraction',
    component: Attraction,
  },
];

export default routes;
