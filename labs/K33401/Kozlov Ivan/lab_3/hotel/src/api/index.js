import instance from "@/api/instance"
import WorkersApi from "@/api/workers"
 
const workersApi = new WorkersApi(instance)
 
export {
    workersApi
}
