import instance from "@/api/instance.js"
import CardApi from "@/api/cards.js"
import CalendarEventsApi from "@/api/calendarEvents"
import LoginApi from "@/api/login";
import RegisterApi from "@/api/register";
import UserCardApi from "@/api/userCard";

const cardApi = new CardApi(instance);
const calendarEventsApi = new CalendarEventsApi(instance);
const loginApi = new LoginApi(instance);
const registerApi = new RegisterApi(instance);
const userCardApi = new UserCardApi(instance);

export { cardApi, calendarEventsApi, loginApi, registerApi, userCardApi }