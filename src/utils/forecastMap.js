import infoMap from '../constants/forecastMap';

const format = (obj) => {
  let formatObj = {};
  const group1 = infoMap.group1;
  const group2 = infoMap.group2;
  const group3 = infoMap.group3;
  const group4 = infoMap.group4;
  const group5 = infoMap.group5;
  const group6 = infoMap.group6;

  group1.longitude.value = obj.longitude;
  group1.latitude.value = obj.latitude;

  group2.weatherDay.value = obj.cond.txt_d;
  group2.weatherNight.value = obj.cond.txt_n;

  group3.sunUp.value = obj.astro.sr;
  group3.sunDown.value = obj.astro.ss;
  group3.moonUp.value = obj.astro.mr;
  group3.moonDown.value = obj.astro.ms;

  group4.windDir.value = obj.wind.dir;
  group4.windSpeed.value = obj.wind.spd;
  group4.windLevel.value = obj.wind.sc;

  group5.humidity.value = obj.hum;
  group5.precipitation.value = obj.pcpn;

  group6.atmos.value = obj.pres;
  group6.visib.value = obj.vis;

  formatObj = {
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
  };
  return formatObj;
};

export default format;
