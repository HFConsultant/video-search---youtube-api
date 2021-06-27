import axios from 'axios';

const KEY = 'AIzaSyCE6U-urdc_nAwtsEzzcZv_PelQxeJk6yw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
