/**
 * 居中布局 （内容 + 底部）
 * @Author: huangfs
 * @Date: 2019-02-26
 * @Project: cms
 */

import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';
import Copyright from '../../components/common/Copyright';
import routerConfig, { redirectPath } from '../../routerConfig';
import PrivateRoute from '../../components/common/PrivateRoute';
import LoadingComponent from '../../components/common/LoadingComponent';
import './index.less';

const NotFound = Loadable({
  loader: () => import('../../components/common/NotFound'),
  loading: LoadingComponent,
  delay: 100
});

export default class BlankLayout extends React.Component {

  render() {
    return (
      <div className="blank-layout">
        <div className="blank-layout-content">
          <Switch>
            {routerConfig.map((item, index) => {

              if (!item.component) return null;

              if (item.isAuthenticated) {
                return <PrivateRoute key={index} path={item.path} component={item.component} exact={item.exact} />;
              }

              return <Route key={index} path={item.path} component={item.component} exact={item.exact} />;

            })}

            <Redirect from="/" to={redirectPath} />

            <Route component={NotFound} />
          </Switch>
        </div>
        <footer>
          <Copyright />
        </footer>
      </div>
    );
  }
}
