import instance from "@/api/instance";
import UserApi from "@/api/user";
import EventApi from "@/api/eventApi";

const userApi = new UserApi(instance);
const eventApi = new EventApi(instance);

export { userApi, eventApi };
