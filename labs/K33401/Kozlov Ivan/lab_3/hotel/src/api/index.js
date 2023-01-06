import instance from "@/api/instance"
import WorkersApi from "@/api/workers"
import LoginApi from "@/api/login"
import SingupApi from "@/api/singup";
 
const workersApi = new WorkersApi(instance)
const loginApi = new LoginApi(instance)
const singupApi = new SingupApi(instance)
 
export {
    workersApi,
    loginApi,
    singupApi
}
