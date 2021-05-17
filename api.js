import axios from "axios"
import { QuizApi } from "./quiz"
import { AuthApi } from "./auth"
import ResultApi from "./result/api";

const backendUrl = "http://localhost:3000";

export const BaseApi = axios.create({
  baseURL: backendUrl,
  headers: {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
  }
});

class Api {
  static get Quiz() {
    return new QuizApi();
  }

  static get Auth() {
    return new AuthApi();
  }

  static get Result() {
    return new ResultApi();
  }
}

export default Api;
