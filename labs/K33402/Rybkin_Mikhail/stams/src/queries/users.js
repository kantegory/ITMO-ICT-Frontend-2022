import {supabase} from "@/supabase";
import {flipObject, LOCALES, processError} from "@/helpers";
import {i18n} from "@/i18n/main";

export const setAuthStateChangeListener = async function (setSession, fetchUserData) {
    supabase.auth.onAuthStateChange(async (event, _session) => {
        await setSession(_session)
        console.debug('Session updated')
        if (event === 'USER_UPDATED') {
            console.debug(event)
            await fetchUserData()
        }
    })
}

export const fetchUserData = async function (userId) {
    let {data, error} = await supabase
        .from('users')
        .select()
        .eq('auth_id', userId)
        .maybeSingle()
    processError(error)
    return {data}
}
export const signUp = async function (email, password) {
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
    })
    processError(error)
    return {data}
}
export const signIn = async function (email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    processError(error)
    return {data}
}
export const signOut = async function () {
    const {data, error} = await supabase.auth.signOut()
    processError(error)
    return {data}
}

export const getSession = async function () {
    const {data, error} = await supabase.auth.getSession()
    processError(error)
    return {data}
}

export const insertUserdata = async function (fio, authId) {
    const {data, error} = await supabase
        .from('users')
        .insert([
            {
                fio: fio,
                auth_id: authId,
                locale: flipObject(LOCALES)[i18n.global.locale.value]
            },
        ])
    processError(error)
    return {data}
}

