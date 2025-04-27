import { comments } from '../modules/comments.js'
import { initLikeButton } from '../modules/initLikeButton.js'
import { AnswerButton } from '../modules/AnswerButton.js'
const commentEl = document.getElementById('comments')
export const renderComments = () => {
    const newListComments = comments
        .map((comment, index) => {
            return `<li class="comment" data-indexcomm="${index}">
          <div class="comment-header">
            <div>${comment.nick}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
            ${comment.comm}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.like}</span>
              <button class="like-button" data-index="${index}"></button>
            </div>
          </div>
        </li>`
        })
        .join('')
    commentEl.innerHTML = newListComments
    const LikeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of LikeButtons) {
        if (comments[likeButton.dataset.index].status) {
            likeButton.classList.add('activeLike')
        }
    }
    initLikeButton()
    AnswerButton()
}
