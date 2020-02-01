export const temperatureOptionsB = {
  colors: ['#f09a37'],
  chart: {
    zoom: {
      enabled: false
    }
  },
  title: {
    text: 'TEMPERATURE',
    align: 'left'
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow'
  },

  grid: {
    borderColor: '#111',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6
  },

  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  fill: {
    colors: ['#f09a37']
  }
};

export const humidityOptionsB = {
  colors: ['#3478f6'],
  chart: {
    zoom: {
      enabled: false
    }
  },
  title: {
    text: 'HUMIDITY',
    align: 'left'
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow'
  },
  grid: {
    borderColor: '#111',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  fill: {
    colors: ['#3478f6', '#0034f6']
  }
};

export const pressureOptionsB = {
  colors: ['#65c466'],
  chart: {
    zoom: {
      enabled: false
    }
  },
  title: {
    text: 'PRESSURE',
    align: 'left'
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow'
  },
  grid: {
    borderColor: '#111',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy'
    }
  },
  fill: {
    colors: ['#65c466']
  }
};
