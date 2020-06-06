import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-1af39.firebaseio.com/"
})

export default instance