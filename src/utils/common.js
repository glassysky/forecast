export const isNight = (hour) => {
  if ((hour >= 18 && hour <= 24) || (hour >= 0 && hour <= 6)) {
    return true;
  }
  return false;
};
