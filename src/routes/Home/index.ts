import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading as any,
});

export default LoadableHome;
