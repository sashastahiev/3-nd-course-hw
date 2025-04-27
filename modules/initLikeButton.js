import { comments } from '../modules/comments.js'
import { renderComments } from '../modules/renderComments.js'
export const initLikeButton = () => {
    const LikeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of LikeButtons) {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation()
            if (!comments[likeButton.dataset.index].status) {
                comments[likeButton.dataset.index].like++
                comments[likeButton.dataset.index].status = true
                renderComments()
                likeButton.classList.add('activeLike')
            } else {
                comments[likeButton.dataset.index].like--
                comments[likeButton.dataset.index].status = false
                renderComments()
                likeButton.classList.remove('activeLike')
            }
        })
    }
}
