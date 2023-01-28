import {createI18n} from 'vue-i18n'
const messages = {
    en: {
        sidebar: {
            courses: 'Courses',
            tasks: 'Tasks',
            home: 'Home',
            collapse: 'Collapse'
        },
        auth: {
            signIn: 'Sign in',
            signInPrompt: 'Sign in',
            signUp: 'Sign up',
            signUpPrompt: 'Sign up',
            signOutPrompt: 'Log out',
            authorization: 'Authorization',
            password: 'Password',
            fio: 'Full name',
            account: 'Account',
            repeatPassword: 'Repeat password'
        },
        messages: {
            formValidation: {
                requiredNotFilled: 'This field is required',
                minLength: 'Minimum length is {0}',
                wrongTypeEmail: 'Please enter email',
            }
        }
    },
    ru: {
        sidebar: {
            courses: 'Курсы',
            tasks: 'Задания',
            home: 'Главная',
            collapse: 'Скрыть'
        },
        auth: {
            signIn: 'Вход',
            signInPrompt: 'Войти',
            signUp: 'Регистрация',
            signUpPrompt: 'Зарегистрироваться',
            signOutPrompt: 'Выйти',
            authorization: 'Авторизация',
            password: 'Пароль',
            fio: 'ФИО',
            account: 'Аккаунт',
            repeatPassword: 'Повторите пароль'
        },
        messages: {
            formValidation: {
                requiredNotFilled: 'Это обязательное поле',
                minLength: 'Минимальная длина – {0}',
                wrongTypeEmail: 'Нужно ввести email',
            }
        }
    }
}

export const i18n = createI18n({
    locale: 'ru',
    allowComposition: true,
    legacy: false,
    messages,
    async switchLanguage(newLocale) { // <--- 3
        i18n.currentLocale = newLocale
        document.querySelector("html").setAttribute("lang", newLocale)
    },
})
