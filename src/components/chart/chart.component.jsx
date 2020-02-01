import React from 'react';

import Chart from 'react-apexcharts';

export const CustomChartArea = ({ options, series }) => (
  <div id='chart' style={{ marginLeft: '-10px', marginRight: '10px' }}>
    <Chart options={options} series={series} type='area' height='350' />
  </div>
);

export const CustomChartBar = ({ options, series }) => (
  <div id='chart' style={{ marginLeft: '-10px', marginRight: '10px' }}>
    <Chart options={options} series={series} type='bar' height='350' />
  </div>
);
