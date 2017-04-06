const infoMap = {
  group1: {
    longitude: {
      label: '城市经度',
      unit: '°',
    },
    latitude: {
      label: '城市纬度',
      unit: '°',
    },
  },
  group2: {
    weatherDay: {
      label: '白天天气',
    },
    weatherNight: {
      label: '夜间天气',
    },
  },
  group3: {
    sunUp: {
      label: '日出时间',
    },
    sunDown: {
      label: '日落时间',
    },
    moonUp: {
      label: '月升时间',
    },
    moonDown: {
      label: '月落时间',
    },
  },
  group4: {
    windDir: {
      label: '风向',
    },
    windSpeed: {
      label: '风速',
      unit: '米/秒',
    },
    windLevel: {
      label: '风力等级',
    },
  },
  group5: {
    humidity: {
      label: '相对湿度',
      unit: '克/立方米',
    },
    precipitation: {
      label: '降水概率',
      unit: '%',
    },
  },
  group6: {
    atmos: {
      label: '气压',
      unit: '百帕',
    },
    visib: {
      label: '能见度',
      unit: '米',
    },
  },
};

export default infoMap;
