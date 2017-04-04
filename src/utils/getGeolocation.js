const getGeolocation = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject();
    }
    const onSuccess = (position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      const BMap = window.BMap;

      const point = new BMap.Point(longitude, latitude);
      const gc = new BMap.Geocoder();
      gc.getLocation(point, (rs) => {
        const addComp = rs.addressComponents;
        resolve(addComp.city.replace(/市/, ''));
      });
    };
    const onError = (e) => {
      reject(e);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });

export default getGeolocation;
