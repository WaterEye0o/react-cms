import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { C_PROJECT_NAME} from '../../common/constants';
import { Layout, Icon, Tag } from 'antd';

const { Header } = Layout;

@connect(
  state => ({
    name: state.auth.name
  })
)
export default class Navbar extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    collapsed: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  state = {
    loading: false
  };

  handleLogout = () => {
    this.props.signOut()
  };

  render() {
    return (
      <Header style={style.header}>
        <nav className="flex-center-between" style={style.nav}>
          <div>
            <Icon
              style={style.cursor}
              type={this.props.collapsed ? 'menu-unfold': 'menu-fold'}
              onClick={this.props.handleClick}
            />
            <span>{C_PROJECT_NAME}</span>
          </div>
          <div>
            <span style={{marginRight: 20}}>{this.props.name || 'Admin'}</span>
            <Tag  color='red' onClick={this.handleLogout}>退出</Tag>
          </div>
        </nav>
      </Header>
    )
  }
}

const style = {
  header: {
    background: '#fff',
    padding: '0  20px'
  },

  nav: {
    height: '100%',
    paddingRight: 30
  },

  cursor: {
    cursor: 'pointer'
  }
};
