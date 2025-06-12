import { comments } from '../modules/comments.js'
import { token } from '../modules/api.js'
import { initLikeButton } from '../modules/initLikeButton.js'
import { AnswerButton } from '../modules/AnswerButton.js'
import { initFormAddComment } from './addComment.js'
import { renderFormAuth, renderFormRegis } from '../index.js'
export const renderComments = () => {
  const containerEl = document.querySelector('#container')
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
    containerEl.innerHTML = `<ul id="comments" class="comments">${newListComments}</ul>`
    if (token){
      initFormAddComment()
    } else {
      containerEl.innerHTML += `<p id="alert-auth">чтобы отправить комментарий, <u class="login-link">войдите</u></p>`
      const formAuth = document.querySelector('.login-link')
      formAuth.addEventListener('click', () =>{
      renderFormAuth()
      const buttonOpenRegis = document.querySelector('.entry')
      buttonOpenRegis.addEventListener('click', () => {
        renderFormRegis()
    })
})
    }
    const LikeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of LikeButtons) {
        if (comments[likeButton.dataset.index].isLiked) {
            likeButton.classList.add('activeLike')
        }
    }
    initLikeButton()
    AnswerButton()
}

export const initListComments = () => {
  const containerEl = document.querySelector('#container')
  containerEl.innerHTML = `
      <ul id="comments" class="comments">
        <!-- Комментарии -->
        <p>Пожалуйста подождите, идет загрузка комментариев...<p>
      </ul>`
}
