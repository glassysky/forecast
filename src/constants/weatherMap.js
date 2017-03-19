const weatherMap = {
  100: {
    txt: '晴',
    day: 'wi-day-sunny',
    night: 'wi-night-clear',
  },
  101: {
    txt: '多云',
    day: 'wi-cloudy',
    night: 'wi-cloudy',
  },
  102: {
    txt: '少云',
    day: 'wi-cloud',
    night: 'wi-cloud',
  },
  103: {
    txt: '晴间多云',
    day: 'wi-day-cloudy',
    night: 'wi-night-alt-cloudy',
  },
  104: {
    txt: '阴',
    day: 'wi-night-cloudy-high',
    night: 'wi-night-alt-cloudy-high',
  },
  200: {
    txt: '有风',
    day: 'wi-windy',
    night: 'wi-windy',
  },
  201: {
    txt: '平静',
    day: 'wi-day-light-wind',
    night: 'wi-day-light-wind',
  },
  202: {
    txt: '微风',
    day: 'wi-windy',
    night: 'wi-windy',
  },
  203: {
    txt: '和风',
    day: 'wi-windy',
    night: 'wi-windy',
  },
  204: {
    txt: '清风',
    day: 'wi-windy',
    night: 'wi-windy',
  },
  205: {
    txt: '强风/劲风',
    day: 'wi-strong-wind',
    night: 'wi-strong-wind',
  },
  206: {
    txt: '疾风',
    day: 'wi-strong-wind',
    night: 'wi-strong-wind',
  },
  207: {
    txt: '大风',
    day: 'wi-strong-wind',
    night: 'wi-strong-wind',
  },
  208: {
    txt: '烈风',
    day: 'wi-strong-wind',
    night: 'wi-strong-wind',
  },
  209: {
    txt: '风暴',
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  210: {
    txt: '狂爆风',
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  211: {
    txt: '飓风',
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  212: {
    txt: '龙卷风',
    day: 'wi-tornado',
    night: 'wi-tornado',
  },
  213: {
    txt: '热带风暴',
    day: 'wi-hurricane',
    night: 'wi-hurricane',
  },
  300: {
    txt: '阵雨',
    day: 'wi-raindrops',
    night: 'wi-raindrops',
  },
  301: {
    txt: '强阵雨',
    day: 'wi-raindrop',
    night: 'wi-raindrop',
  },
  302: {
    txt: '雷阵雨',
    day: 'wi-storm-showers',
    night: 'wi-storm-showers',
  },
  303: {
    txt: '强雷阵雨',
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  304: {
    txt: '雷阵雨伴有冰雹',
    day: 'wi-day-snow-thunderstorm',
    night: 'wi-night-alt-snow-thunderstorm',
  },
  305: {
    txt: '小雨',
    day: 'wi-sleet',
    night: 'wi-sleet',
  },
  306: {
    txt: '中雨',
    day: 'wi-showers',
    night: 'wi-showers',
  },
  307: {
    txt: '大雨',
    day: 'wi-sprinkle',
    night: 'wi-sprinkle',
  },
  308: {
    txt: '极端降雨',
    day: 'wi-storm-showers',
    night: 'wi-storm-showers',
  },
  309: {
    txt: '毛毛雨/细雨',
    day: 'wi-sleet',
    night: 'wi-sleet',
  },
  310: {
    txt: '暴雨',
    day: 'wi-storm-showers',
    night: 'wi-storm-showers',
  },
  311: {
    txt: '大暴雨',
    day: 'wi-storm-showers',
    night: 'wi-storm-showers',
  },
  312: {
    txt: '特大暴雨',
    day: 'wi-thunderstorm',
    night: 'wi-thunderstorm',
  },
  313: {
    txt: '冻雨',
    day: 'wi-rain-mix',
    night: 'wi-rain-mix',
  },
  400: {
    txt: '小雪',
    day: 'wi-snow',
    night: 'wi-snow',
  },
  401: {
    txt: '中雪',
    day: 'wi-snow-wind',
    night: 'wi-snow-wind',
  },
  402: {
    txt: '大雪',
    day: 'wi-day-snow-wind',
    night: 'wi-night-alt-snow',
  },
  403: {
    txt: '暴雪',
    day: 'wi-day-snow-thunderstorm',
    night: 'wi-night-alt-snow-thunderstorm',
  },
  404: {
    txt: '雨夹雪',
    day: 'wi-night-alt-rain-mix',
    night: 'wi-night-alt-rain-mix',
  },
  405: {
    txt: '雨雪天气',
    day: 'wi-snowflake-cold',
    night: 'wi-snowflake-cold',
  },
  406: {
    txt: '阵雨夹雪',
    day: 'wi-night-alt-rain-mix',
    night: 'wi-night-alt-rain-mix',
  },
  407: {
    txt: '阵雪',
    day: 'wi-snow',
    night: 'wi-snow',
  },
  500: {
    txt: '薄雾',
    day: 'wi-day-fog',
    night: 'wi-night-fog',
  },
  501: {
    txt: '雾',
    day: 'wi-fog',
    night: 'wi-fog',
  },
  502: {
    txt: '霾',
    day: 'wi-dust',
    night: 'wi-dust',
  },
  503: {
    txt: '扬沙',
    day: 'wi-dust',
    night: 'wi-dust',
  },
  504: {
    txt: '浮尘',
    day: 'wi-dust',
    night: 'wi-dust',
  },
  507: {
    txt: '沙尘暴',
    day: 'wi-sandstorm',
    night: 'wi-sandstorm',
  },
  508: {
    txt: '强沙尘暴',
    day: 'wi-sandstorm',
    night: 'wi-sandstorm',
  },
  900: {
    txt: '热',
    day: 'wi-hot',
    night: 'wi-hot',
  },
  901: {
    txt: '冷',
    day: 'wi-snowflake-cold',
    night: 'wi-snowflake-cold',
  },
  999: {
    txt: '未知',
    day: 'wi-alien',
    night: 'wi-alien',
  },
};

export default weatherMap;
