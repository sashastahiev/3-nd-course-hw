import { format } from '../modules/formatDateComm.js'
import { fetchPostComments } from './api.js'
export const dateEl = new Date()
export const textcommentEl = document.getElementById('text-comment')
const addCommentEl = document.getElementById('addComment')
export const addForm = document.getElementById('add-form')
export const nameEl = document.getElementById('name-user')
const message = document.createElement('p')
message.id = 'commentAdd'
message.textContent = 'Комментарий добавляется...'
addCommentEl.addEventListener('click', () => {
    if ((nameEl.value != '') && 
    (textcommentEl.value != '')) 
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
        const containerEl = document.getElementById('container')
        containerEl.appendChild(message)
        fetchPostComments(newComment2)
    }
})
export const thenNewAddCoomment = (() => {
    addForm.style.display = 'block'
    message.remove()
    textcommentEl.value = ''
    nameEl.value = ''
})

export const thenFinaly = (() => {
    addForm.style.display = 'block'
    message.remove()
})