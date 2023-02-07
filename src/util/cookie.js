import { Cookies } from "react-cookie";

const cookies = new Cookies();

//쿠키생성
export const setCookie = (name, value, options) => {
    return cookies.set(name, value, {...options})
}

//쿠키생성
export const getCookie = (name) => {
    return cookies.get(name)
}

//쿠키생성
export const removeCookie = (name) => {
    return cookies.remove(name)
}