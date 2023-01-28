import axios from "axios";

export default class TodoService {
    static async getTodo() {
        return await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    }
}