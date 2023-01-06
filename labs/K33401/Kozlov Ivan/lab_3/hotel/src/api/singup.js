class SingupApi {
    constructor(instance) {
        this.API = instance
    }

    singup = async (data) => {
        return this.API({
            method: 'POST',
            url: '/api/auth/users/',
            data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(function (error) {
            if (error.toJSON().message){
                alert("Невернные данные или слишком простой пароль, или такой пользователь уже существует, проверьте данные")
            }
        });
    };
}

export default SingupApi
