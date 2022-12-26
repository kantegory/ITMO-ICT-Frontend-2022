function checkAuth() {
    const acc = new Account();
    acc.isAuth()
        .catch(() => {
            acc.logOut();
            window.location = new URL("/entry.html", window.location).toString()
        });
}

class Account {
    static COOKIE_KEY_LOGIN = "user_login";
    static COOKIE_KEY_PASSWORD = "user_password";

    get login() {
        return this._login;
    }

    set login(value) {
        this._login = value;
        Cookies.writeCookie(Account.COOKIE_KEY_LOGIN, this.login);
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
        Cookies.writeCookie(Account.COOKIE_KEY_PASSWORD, this.password);
    }

    constructor() {
        this.login = Cookies.readCookie(Account.COOKIE_KEY_LOGIN) || null;
        this.password = Cookies.readCookie(Account.COOKIE_KEY_PASSWORD) || null;
        this.api = new API();

        this.isAuth = this.isAuth.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    isAuth() {
        if (this.login === null || this.password === null) return Promise.reject();
        return this.authWithCreds(this.login, this.password);
    }

    async register(login, password) {
        try {
            await this.api.login(login, password);
            // user exists!
            return Promise.reject();
        } catch (e) {
            return this.api.register(login, password);
        }
    }

    async authWithCreds(login, password) {
        try {
            await this.api.login(login, password);
            this.login = login;
            this.password = password;
            return Promise.resolve();
        } catch (e) {
            this.login = null;
            this.password = null;
            return Promise.reject();
        }
    }

    logOut() {
        this.login = null;
        this.password = null;
    }
}

class Cookies {
    static writeCookie(key, value) {
        localStorage.setItem(key, value);
    }

    static readCookie(key) {
        return localStorage.getItem(key);
    }
}

class API {
    static URL = "http://localhost:8081"

    constructor() {
        this.loading = false;
    }

    login(login, password) {
        if (this.loading) return;
        this.loading = true;

        return fetch(new URL(`./user/${login}/password/${password}`, API.URL))
            .then(response => {
                // response is OK, check the response data
                if (response.ok)
                    return response.json()
                else
                    return Promise.reject();
            })
            .then(userlist => {
                // userlist isn't empty, login succeed
                if (userlist.length > 0)
                    return Promise.resolve({ login, password });
                else
                    return Promise.reject()
            })
            .finally(() => {
                this.loading = false;
            });
    }

    register(login, password) {
        if (this.loading) return;
        this.loading = true;

        const data = { login, password };
        return fetch(new URL(`./users`, API.URL), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok)
                return Promise.resolve({ login, password })
            else
                return Promise.reject();
        }).finally(() => {
            this.loading = false;
        });
    }
}