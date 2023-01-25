import instance from "@/api/instance.js"
import LoginApi from "@/api/login";
import RegisterApi from "@/api/register";
const loginApi = new LoginApi(instance);
const registerApi = new RegisterApi(instance);

export {loginApi, registerApi}