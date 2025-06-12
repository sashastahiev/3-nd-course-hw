import { updateComments } from '../modules/comments.js'
import { renderComments } from '../modules/renderComments.js'
import { format } from '../modules/formatDateComm.js'
import { fetchPostComments, fetchGetComments } from './api.js'
export const dateEl = new Date()
export const textcommentEl = document.getElementById('text-comment')
export const addForm = document.getElementById('form-add-comment')
export const nameEl = document.getElementById('name-user')
const message = document.createElement('p')
message.id = 'commentAdd'
message.textContent = 'Комментарий добавляется...'
export const initFormAddComment = () => {
    const containerEl = document.querySelector('#container')
    containerEl.innerHTML += `
    <div id="form-add-comment" class="add-form">
      <input 
        id="name-user"
        type="text"
        class="add-form-name"
        placeholder="Введите ваше имя"
        readonly
      />
      <textarea
        id="text-comment"
        type="textarea"
        class="add-form-text"
        placeholder="Введите ваш коментарий"
        rows="4"
      ></textarea>
      <div class="add-form-row">
        <button id="addComment" class="add-form-button">Написать</button>
      </div>
    </div>`
    const addCommentEl = document.getElementById('addComment')
    addCommentEl.addEventListener('click', () => {
        if ((nameEl.value != '') && 
        (textcommentEl.value != '')) 
        {
            const newComment2 = {
                name: nameEl.value.replaceAll('<', '&lt').replaceAll('>', '&gt'),
                date: format(dateEl),
                text: textcommentEl.value
                    .replaceAll('<', '&lt')
                    .replaceAll('>', '&gt'),
                likes: 0,
                isLiked: false,
            }
            addForm.style.display = 'none';
            const containerEl = document.getElementById('container')
            containerEl.appendChild(message)
            fetchPostComments(newComment2).then(() => {
                return fetchGetComments()
            }).then((data) => {
                updateComments(data.comments)
                renderComments()
            }).then(() => {
                addForm.style.display = 'block'
                message.remove()
                textcommentEl.value = ''
                nameEl.value = ''
            }).catch((error) => {
                alert(error)
            }).finally(() => {
                addForm.style.display = 'block'
                message.remove()
            })
        }
    })
}
