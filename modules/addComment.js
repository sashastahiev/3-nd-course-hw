import { renderComments } from '../modules/renderComments.js'
import { format } from '../modules/formatDateComm.js'
import { comments, updateComments } from '../modules/comments.js'
import { fetchAndRengerComments } from './fetchAndRenderComments.js'
export const dateEl = new Date()
export const textcommentEl = document.getElementById('text-comment')
const addCommentEl = document.getElementById('addComment')
const nameEl = document.getElementById('name-user')
addCommentEl.addEventListener('click', () => {
    if (nameEl.value !== '' && textcommentEl.value !== '') {
        const newComment2 = {
            name: nameEl.value.replaceAll('<', '&lt').replaceAll('>', '&gt'),
            date: format(dateEl),
            text: textcommentEl.value
                .replaceAll('<', '&lt')
                .replaceAll('>', '&gt'),
            likes: 0,
            isLiked: false,
        }
        const addForm = document.getElementById('add-form')
        addForm.style.display = 'none';
        const message = document.createElement('p')
        message.textContent = 'Комментарий добавляется...'
        const containerEl = document.getElementById('container')
        containerEl.appendChild(message)
        fetch('https://wedev-api.sky.pro/api/v1/:stahiev-aleks/comments', {
            method: 'POST', 
            body: JSON.stringify(newComment2)
        }).then(() => {
            return fetchAndRengerComments()
        }).then(() => {
            addForm.style.display = 'block'
            message.remove()
            textcommentEl.value = ''
            nameEl.value = ''
        })

    }
})
