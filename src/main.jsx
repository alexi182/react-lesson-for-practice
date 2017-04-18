import { Router, Route, browserHistory } from 'react-router';
import './vendors';

import MainLayout from './layout/layout';
import DataPage from './pages/data';
import StaticPage from './pages/static';
import ContactPage from './pages/contacts';

/*import './css/common.scss';
 import './css/fonts.scss';*/

let page = document.getElementById('page');

ReactDOM.render(
    <Router history={browserHistory}>
       <Route component={MainLayout}>
          <Route path="/" component={DataPage} />
          <Route path="/static" component={StaticPage} />
          <Route path="/contacts" component={ContactPage} />
       </Route>
    </Router>
    , page);



