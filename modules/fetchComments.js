import { renderComments } from './renderComments.js'
import { updateComments } from './comments.js'

export const fetchComments = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/:stahiev-aleks/comments')
    .then(response => {
        return response.json()
    }).then(data => {
        updateComments(data.comments)
        renderComments()
    })
}