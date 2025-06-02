import { fetchGetComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from '../modules/renderComments.js'
fetchGetComments()
export const renderAndUpdateComment = ((data) => {
    updateComments(data.comments)
    renderComments()
})