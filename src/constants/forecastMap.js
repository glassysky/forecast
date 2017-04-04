const infoMap = {
  group1: {
    longitude: {
      label: '城市经度',
    },
    latitude: {
      label: '城市纬度',
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
    },
    windLevel: {
      label: '风力等级',
    },
  },
  group5: {
    humidity: {
      label: '相对湿度',
    },
    precipitation: {
      label: '降水概率',
    },
  },
  group6: {
    atmos: {
      label: '气压',
    },
    visib: {
      label: '能见度',
    },
  },
};

// const format = (obj, lon, lat) => {
//   const group1 = infoMap.group1;
//   const group2 = infoMap.group2;
//   const group3 = infoMap.group3;
//   const group4 = infoMap.group4;
//   const group5 = infoMap.group5;

//   group1.longitude.value = lon;
//   group1.latitude.value = lat;
// };

export default infoMap;
