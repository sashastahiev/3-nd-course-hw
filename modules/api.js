import { renderAndUpdateComment } from '../index.js'
import { addForm, thenFinaly, thenNewAddCoomment } from './addComment.js'
export const fetchGetComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/:stahiev-aleks/comments')
    .then(response => {
        return response.json()
    }).then((data) => {
        renderAndUpdateComment(data)
    })
}
export const fetchPostComments = (newComment2) => {
    return fetch('https://wedev-api.sky.pro/api/v1/:stahiev-aleks/comments', {
    method: 'POST', 
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
    .then(() => {
        return fetchGetComments()
    }).then(() => {
        thenNewAddCoomment()
    }).catch((error) => {
        alert(error)
    }).finally(() => {
        thenFinaly()
    })
}