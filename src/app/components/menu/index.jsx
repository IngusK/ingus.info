import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {database} from "firebase";

import style from './styles.scss';

// @withRouter
// export default class Menu extends React.PureComponent {
//
//   static defaultProps = {
//     title: 'Home page',
//     url: '/',
//   }
//
//   render() {
//     const {title, url} = this.props;
//     const activePath = this.props.location.pathname;
//
//     return (
//       <li className={activePath === url ? 'active' : ''}><Link to={url}>{title}</Link></li>
//     );
//   }
// };

const MenuLink = ({ location: {pathname}, title = 'Home page', url = '/' }) => (
  <li className={pathname === url ? 'active' : ''}>
    <Link to={url}>{title}</Link>
  </li>
);

export default withRouter(MenuLink);
