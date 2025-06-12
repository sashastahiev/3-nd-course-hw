import { comments } from '../modules/comments.js'
import { token } from '../modules/api.js'
import { initLikeButton } from '../modules/initLikeButton.js'
import { AnswerButton } from '../modules/AnswerButton.js'
const commentEl = document.getElementById('comments')
export const renderComments = () => {
    const newListComments = comments
        .map((comment, index) => {
            return `<li class="comment" data-indexcomm="${index}">
          <div class="comment-header">
            <div>${comment["author"]["name"]}</div>
            <div>${comment.date.replaceAll('T',' ').replaceAll('-','.').slice(0,-5)}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
            ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button" data-index="${index}"></button>
            </div>
          </div>
        </li>`
        })
        .join('')
    commentEl.innerHTML = newListComments
    if (!token){
      document.querySelector('#form-add-comment').style.display = 'none'
    }
    const LikeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of LikeButtons) {
        if (comments[likeButton.dataset.index].isLiked) {
            likeButton.classList.add('activeLike')
        }
    }
    initLikeButton()
    AnswerButton()
    if (!token){
      document.querySelector('#form-add-comment').style.display = 'none'
    }
}
