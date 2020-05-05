import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});

export const searchUsers = async (text) => {
  const res = await github.get(`/search/users?q=${text}`);
  return res.data.items;
};
