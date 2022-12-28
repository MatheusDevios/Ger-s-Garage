import axios from "axios";
const BASE_URL = "http://localhost:5001/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTc1MTE4OWM2NTc5MmFjNmRhYTlmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjA3ODA2NSwiZXhwIjoxNjcyMDgxNjY1fQ.vbbC5ivjwGF0CyISvcPCP2zCBXpMjcSEtmzAzbOfpec";
// const TOKEN = useSelector((state) => state.auth.token);
const TOKEN = localStorage.getItem("token");
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = JSON.stringify(token);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
