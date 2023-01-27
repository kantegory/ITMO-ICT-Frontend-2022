import axios from "axios";

export default class StudentService {
    static async getStudents() {
        return await axios.get('https://jsonplaceholder.typicode.com/users')
    }
}