import axios from 'axios';

const KEY = '';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
