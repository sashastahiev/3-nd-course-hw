import { comments } from '../modules/comments.js'
import { textcommentEl } from '../modules/addComment.js'
export const AnswerButton = () => {
    const commentList = document.querySelectorAll('.comment')
    for (const comment of commentList) {
        comment.addEventListener('click', () => {
            textcommentEl.innerHTML = `"${comments[comment.dataset.indexcomm].comm}" (${comments[comment.dataset.indexcomm].nick}),`
        })
    }
}
