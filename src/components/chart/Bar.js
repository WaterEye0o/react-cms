/**
 * 直方图
 * @Author: huangfs
 * @Date: 2018-12-18
 * @Project: web-brand
 */

import React from 'react';
import ReactEcharts from 'echarts-for-react';
import service from './service';
import lodash from 'lodash';
import './index.less';

/**
 * 数据处理
 */
const getSeriesData = (option) => {
  let seriesData = [];
  option.value && option.value.forEach((item, index) => {
    seriesData.push({
      data: item,
      type: 'bar',
      name: option.legend[index],
      // label: {
      //   normal: {
      //     formatter: '{c}',
      //     show: true,
      //     position: 'insideRight'
      //   }
      // }
    });
  });
  return seriesData
};

const getOption = (props) => {
  const { title, option = {}, horizontal=false } = props;

  const yAxis = {
    type: 'value'
  };
  const xAxis = {
    type: 'category',
    data: option.xAxis
  };
  const result = lodash.merge({}, service, {
    title: {
      text: title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    toolbox: {
      feature: {
        magicType: {type: ['line', 'bar']}, // 切换直方图/线性图
        saveAsImage: {
          title: '保存',
          pixelRatio: 2
        },
      }
    },
    legend: {
      data: option.legend
    },
    yAxis: horizontal ? xAxis : yAxis,
    xAxis: horizontal ? yAxis : xAxis,
    series: getSeriesData(option)
  });
  return result;
};

const Bar = (props) => {
  return (
    <ReactEcharts
      option={getOption(props)}
    />
  );
};

export default Bar;
