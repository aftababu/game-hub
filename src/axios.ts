import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "742c0c305a0c45948cde0b3c89b93c3d",
  },
});
