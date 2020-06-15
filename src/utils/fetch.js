import axios from 'axios';

export default async (url, options) => {
  const response = await axios.get(url, options);
  return response.data;
};

