import { renderComments } from '../modules/renderComments.js'
import { format } from '../modules/formatDateComm.js'
import { updateComments } from '../modules/comments.js'
export const dateEl = new Date()
export const textcommentEl = document.getElementById('text-comment')
const addCommentEl = document.getElementById('addComment')
const nameEl = document.getElementById('name-user')
addCommentEl.addEventListener('click', () => {
    if (nameEl.value !== '' && textcommentEl.value !== '') {
        const newComment = {
            name: nameEl.value.replaceAll('<', '&lt').replaceAll('>', '&gt'),
            date: format(dateEl),
            text: textcommentEl.value
                .replaceAll('<', '&lt')
                .replaceAll('>', '&gt'),
            likes: 0,
            isLiked: false,
        }
        fetch('https://wedev-api.sky.pro/api/v1/:stahiev-aleks/comments', {
            method: 'POST', 
            body: JSON.stringify(newComment)
        }).then(response => {
            return response.json()
        }).then(data => {
            updateComments(data.comments)
            renderComments()
        })
    }
})
