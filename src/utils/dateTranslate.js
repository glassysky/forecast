export const getDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const getWeek = (date) => {
  const week = date.getDay();
  const zhArray = ['日', '一', '二', '三', '四', '五', '六'];
  return `星期${zhArray[week]}`;
};

export const minus2chinese = (data) => {
  if (typeof data !== 'string') {
    return 'the param must be a string';
  }
  const dataArray = data.split('-');
  if (dataArray.length === 0) {
    return 'the param format must be XXXX-XX-XX';
  }
  return `${dataArray[0]}年${dataArray[1]}月${dataArray[2]}日`;
};
