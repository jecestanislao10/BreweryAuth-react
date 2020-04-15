/**
 *
 * Asynchronously loads the component for DashBoardPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
