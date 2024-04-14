import { API_END_POINT, STATUS_CODES } from "../global/constant";
const getRequest = async (methodName: string, payload?: Object) => {
  payload = payload ? "?" + payload : "";
  return fetch(API_END_POINT + "" + methodName + "" + payload, {
    method: "GET",
  })
    .then((res) => {
      if (res.status == STATUS_CODES.SUCCESS) return res.json();
      if (res.status == STATUS_CODES.NOT_FOUND)
        throw new Error("No Data found!!!");
      throw new Error("Something went wrong!!!");
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

const postRequest = async (methodName: string, payload: any) => {
  return fetch(API_END_POINT + "" + methodName, {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};

export { getRequest, postRequest };
