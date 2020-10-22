import axios from "axios";
const baseUrl = "/api/mod";

const getModule = (id) => {
  axios
    .get(`${baseUrl}/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default { getModule };
