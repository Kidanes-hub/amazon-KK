import axios from "axios";

const instance = axios.create({
  // - The API (Cloude Function) URL
  baseURL: "https://us-central1-clone-4f957.cloudfunctions.net/api",
});

export default instance;
