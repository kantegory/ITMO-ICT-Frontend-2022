import instance from "@/api/instance"
import WorkersApi from "@/api/workers"
import LoginApi from "@/api/login"
 
const workersApi = new WorkersApi(instance)
const loginApi = new LoginApi(instance)
 
export {
    workersApi, loginApi
}
