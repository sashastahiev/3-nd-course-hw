import { renderComments } from '../modules/renderComments.js'
import { format } from '../modules/formatDateComm.js'
import { comments } from '../modules/comments.js'
export const dateEl = new Date()
export const textcommentEl = document.getElementById('text-comment')
const addCommentEl = document.getElementById('addComment')
const nameEl = document.getElementById('name-user')
addCommentEl.addEventListener('click', () => {
    if (nameEl.value !== '' && textcommentEl.value !== '') {
        comments.push({
            nick: nameEl.value.replaceAll('<', '&lt').replaceAll('>', '&gt'),
            date: format(dateEl),
            comm: textcommentEl.value
                .replaceAll('<', '&lt')
                .replaceAll('>', '&gt'),
            like: 0,
            status: false,
        })
        renderComments()
    }
})
