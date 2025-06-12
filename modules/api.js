
const autHost = 'https://wedev-api.sky.pro/api/user'

export let token = ""
export const setToken = (newToken) => {
    token = newToken
}
export let name = ""
export const setName = (newName) => {
    name = newName
}
export const fetchGetComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v2/:stahiev-aleks/comments')
    .then(response => {
        return response.json()
    })
}
export const fetchPostComments = (newComment2) => {
    return fetch('https://wedev-api.sky.pro/api/v2/:stahiev-aleks/comments', {
    method: 'POST', 
    headers: {
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newComment2)
    }).then((response) => {
        if (response.status == 201){
            return response.json()
        }
        else {
            if (response.status == 500){
                throw new Error('Сервер упал')
            }
            if (response.status == 400){
                throw new Error('Имя и текст сообщения не должны быть короче 3 символов')
            }
            throw new Error('Что-то пошло не так')
        }
    })
}

export const login = (login, password) => {
    return fetch(autHost + '/login', {
        method: 'POST',
        body: JSON.stringify({ login: login, password: password}),
    })
}

export const registration = (name, login, password) => {
    return fetch(autHost, {
        method: 'POST',
        body: JSON.stringify({ name: name, login: login, password:password}),
    })
}