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
