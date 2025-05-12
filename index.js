import { renderComments } from '../modules/renderComments.js'
import { updateComments } from '../modules/comments.js'

fetch('https://wedev-api.sky.pro/api/v1/:stahiev-aleks/comments')
    .then(response => {
        return response.json()
    }).then(data => {
        updateComments(data.comments)
        renderComments()
    })