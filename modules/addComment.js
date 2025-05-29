import { format } from '../modules/formatDateComm.js'
import { fetchPostComments } from './api.js'
export const dateEl = new Date()
export const textcommentEl = document.getElementById('text-comment')
const addCommentEl = document.getElementById('addComment')
export const addForm = document.getElementById('add-form')
export const nameEl = document.getElementById('name-user')
addCommentEl.addEventListener('click', () => {
    if ((nameEl.value != '') && 
    (textcommentEl.value != '') && 
    (nameEl.value.length > 3) && 
    (textcommentEl.value.replaceAll(' ','') != '')) 
    {
        const newComment2 = {
            name: nameEl.value.replaceAll('<', '&lt').replaceAll('>', '&gt'),
            date: format(dateEl),
            text: textcommentEl.value
                .replaceAll('<', '&lt')
                .replaceAll('>', '&gt'),
            likes: 0,
            isLiked: false,
        }
        addForm.style.display = 'none';
        const message = document.createElement('p')
        message.id = 'commentAdd'
        message.textContent = 'Комментарий добавляется...'
        const containerEl = document.getElementById('container')
        containerEl.appendChild(message)
        fetchPostComments(newComment2, message)
    }
    else if (nameEl.value.length <= 3){
        alert('Имя должно состоять из более чем 3 символов');
    }
    else if (textcommentEl.value.replaceAll(' ','') == ''){
        alert('Нельзя отправить пустой комментарий')
    }
})
