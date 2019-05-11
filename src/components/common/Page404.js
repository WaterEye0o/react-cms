/**
 * 404页面
 * @Author: huangfs
 * @Date: 2018-11-13
 * @Project: cms
 */

import React from 'react';
import { icon } from '../../images/images';

export default () => {
  return (
    <div style={style}>
      <img src={icon['404']} alt='' style={{ width: '30rem' }} />
      <p>未找到页面！</p>
    </div>
  );
}

const style = {
  textAlign: 'center',
  paddingTop: '1rem'
};
