import { renderComments } from './renderComments.js'
import { updateComments } from './comments.js'
import { nameEl, textcommentEl, addForm } from './addComment.js'
export const fetchGetComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/:stahiev-aleks/comments')
    .then(response => {
        return response.json()
    }).then(data => {
        updateComments(data.comments)
        renderComments()
    })
}
export const fetchPostComments = (newComment2, message) => {
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
                throw new Error('Вы допустили ошибку')
            }
            throw new Error('Что-то пошло не так')
        }
    })
    .then(() => {
        return fetchGetComments()
    }).then(() => {
        addForm.style.display = 'block'
        message.remove()
        textcommentEl.value = ''
        nameEl.value = ''
    }).catch((error) => {
        alert(error)
    }).finally(() => {
        addForm.style.display = 'block'
        message.remove()
    })
}