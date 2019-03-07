/**
 * 路由配置文件
 * @Author: huangfs
 * @Date: 2019-01-09
 * @Project: cms
 */

import LoadingComponent from './components/common/LoadingComponent';
import Loadable from 'react-loadable';
import CenterLayout from './layouts/CenterLayout';
import AsideLayout from './layouts/AsideLayout';
import NormalLayout from './layouts/NormalLayout';
import HeaderAsideLayout from './layouts/HeaderAsideLayout';
import BlankLayout from './layouts/BlankLayout';

//登录
const Login = Loadable({
  loader: () => import('./pages/Login'),
  loading: LoadingComponent,
  delay: 100
});

//注册
const Register = Loadable({
  loader: () => import('./pages/Register'),
  loading: LoadingComponent,
  delay: 100
});

//忘记密码
const ForgetPassword = Loadable({
  loader: () => import('./pages/ForgetPassword'),
  loading: LoadingComponent,
  delay: 100
});

//404
const NotFound = Loadable({
  loader: () => import('./components/common/NotFound'),
  loading: LoadingComponent,
  delay: 0
});

/**
 * 路由配置
 * path：路径
 * component：页面
 * exact 是否精确路由,这个字段只在具体的布局layout中才起效用
 * breadcrumbs：面包屑
 * isAuthenticated：是否需要登录
 * layout：布局
 * redirect：重定向的页面，只在 path='/' 时有效
 */
const routerConfig = [
  { path: '/login', component: Login, exact: true, name: '登录', layout: CenterLayout },
  { path: '/register', component: Register, exact: true, name: '注册', layout: CenterLayout },
  { path: '/password/forget', component: ForgetPassword, exact: true, name: '忘记密码', layout: CenterLayout },
  { path: '/order', component: NotFound, exact: true, name: '首页', isAuthenticated: true, layout: NormalLayout },
  { path: '/goods', component: NotFound, exact: true, name: '首页', isAuthenticated: true, layout: AsideLayout },
  {
    path: '/category',
    component: NotFound,
    exact: true,
    breadcrumb: '首页',
    isAuthenticated: true,
    layout: HeaderAsideLayout
  },
  { path: '/setting', component: NotFound, exact: true, name: '404', isAuthenticated: true, layout: HeaderAsideLayout },
  { path: '/home', component: NotFound, exact: true, name: '404', isAuthenticated: true, layout: HeaderAsideLayout },
  //最后一项比较特殊，只会有以下三个字段，代表只有在根目录会重定向到指定页面，layout是指其默认页面布局，用于无效资源的页面布局
  { path: '/', redirect: '/home', layout: BlankLayout },
];

export default routerConfig;


