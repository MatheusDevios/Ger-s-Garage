import { publicRequest } from "../requestMethods";

export const login = async (user) => {
  try {
    // console.log(user);
    const res = await publicRequest.post("/auth/login", user);
    // console.log(res.data);
  } catch (err) {
    console.log("Error loging in");
  }
};
