import Current from './scenes/Current';
import Forecast from './scenes/Forecast';
import Life from './scenes/Life';
import Disaster from './scenes/Disaster';
import Attraction from './scenes/Attraction';

const routes = [
  {
    path: '/forecast/',
    component: Current,
    exact: true,
  },
  {
    path: '/forecast/forecast',
    component: Forecast,
  },
  {
    path: '/forecast/life',
    component: Life,
  },
  {
    path: '/forecast/disaster',
    component: Disaster,
  },
  {
    path: '/forecast/attraction',
    component: Attraction,
  },
];

export default routes;
