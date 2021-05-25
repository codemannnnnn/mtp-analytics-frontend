import { selector } from "recoil";
import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/users/all`;
export const getAllData = selector({
  key: "allData",
  get: async () => {
    try {
      let grab = await axios.get(url).then((e) => {
        return e.data;
      });
      return grab;
    } catch (err) {
      console.log(err);
    }
  },
});
