import axios from 'axios';

const ak = 'NE9g7VxCTGLBC6aNbTIEsMDmW7kd2LD6';
const baiduMapUrl = `http://api.map.baidu.com/reverse_geocoding/v3/?ak=${ak}&output=json&coordtype=wgs84ll&location=`;

// eslint-disable-next-line import/prefer-default-export
export const queryLoaction = params => {
  const location = params.toString();
  return axios.get(`${baiduMapUrl}${location}`).then(response => {
    const { result } = response.data;
    return result || {};
  });
};
