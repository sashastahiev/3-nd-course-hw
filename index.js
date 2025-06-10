import { fetchGetComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from '../modules/renderComments.js'
fetchGetComments().then((data) => {
    updateComments(data.comments)
    renderComments()
})
document.querySelector("#authorization").style.display = "none"
document.querySelector("#regis").style.display = "none"
document.querySelector("#form-add-comment").style.display = "none"
