import axios from "axios";
const uri = "https://api.bowerbird.ai";

export const postNameBoard = async (_data) => {
  try {
    const { data } = await axios.post(`${uri}/post/insert`, {
      ..._data,
    });
    return data;
  } catch {
    return false;
  }
};

export const getData = async (collection) => {
  try {
    const { data } = await axios.get(`${uri}/get/data?collection=${collection}&find={}`);
    return data;
  } catch {
    return false;
  }
};

// export const getUserId = async (_data: any) => {
//     try {
//       let find: any = { ..._data };
//       find = JSON.stringify(find);
//       const { data } = await axios.get(`${uri}/get/data?collection=users&find=${find}`);
//       return data;
//     } catch {
//       return false;
//     }
//   };
