import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd4fcf8f66b5b44f78ec3d6342385114a'
  }
})