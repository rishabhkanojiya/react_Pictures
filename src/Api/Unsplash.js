import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID d6a3b602ca11bd6b86bda152d5105e34d8272f2f80daa3ec5038726b561312d5`
  }
});
