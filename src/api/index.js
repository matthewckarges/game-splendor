import axios from "axios";

const api = axios.create({
  headers: {
    Accept: "application/json",
  },
});

export const requestFile = (url) => api({
  method: 'GET',
  url: url,
  headers: { }
});
