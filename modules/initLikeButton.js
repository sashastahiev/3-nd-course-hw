import { comments } from '../modules/comments.js'
import { renderComments } from '../modules/renderComments.js'
export const initLikeButton = () => {
    const LikeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of LikeButtons) {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation()
            if (!comments[likeButton.dataset.index].isLiked) {
                comments[likeButton.dataset.index].likes++
                comments[likeButton.dataset.index].isLiked = true
                renderComments()
                likeButton.classList.add('activeLike')
            } else {
                comments[likeButton.dataset.index].likes--
                comments[likeButton.dataset.index].isLiked = false
                renderComments()
                likeButton.classList.remove('activeLike')
            }
        })
    }
}
