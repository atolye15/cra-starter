import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableFeed = Loadable({
  loader: () => import('./Feed'),
  loading: Loading as any,
});

export default LoadableFeed;
