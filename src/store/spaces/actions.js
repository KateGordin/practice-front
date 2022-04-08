import axios from "axios";

export const getAllSpaces = async () => {
  const response = await axios.get("http://localhost:4000/spaces");

  return {
    type: "setAllSpaces",
    payload: response.data,
  };
};

export const getDetailSpace = async (id) => {
  const response = await axios.get(`http://localhost:4000/spaces/${id}`);
  console.log("!!!response", response);

  return {
    type: "setDetailPage",
    payload: response.data,
  };
};
