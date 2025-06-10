import { fetchGetComments, login, registration, setToken, setName} from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from '../modules/renderComments.js'
fetchGetComments().then((data) => {
    updateComments(data.comments)
    renderComments()
})
document.querySelector("#authorization").style.display = "none"
document.querySelector("#regis").style.display = "none"
const formAuth = document.querySelector('.login-link')
formAuth.addEventListener('click', () =>{
    document.querySelector('#comments').style.display = 'none'
    document.querySelector('#authorization').style.display = 'block'
    document.querySelector('#alert-auth').style.display = 'none'

    const loginEl = document.querySelector('#loginAuth')
    const passwordEl = document.querySelector('#passwordAuth')
    const buttonEnter = document.querySelector('#button-enter')

    buttonEnter.addEventListener('click', () => {
        login(loginEl.value, passwordEl.value)
        .then((responce) => {
            return responce.json()
        }).then(data => {
            setToken(data.user.token)
            setName(data.user.name)
            document.querySelector('#comments').style.display = 'block'
            document.querySelector('#authorization').style.display = 'none'
            document.querySelector('#form-add-comment').style.display = 'block'
            document.querySelector('#name-user').value = loginEl.value
        })
    })
})
const formRegis = document.querySelector('.entry')
formRegis.addEventListener('click', () =>{
    document.querySelector('#authorization').style.display = 'none'
    document.querySelector('#regis').style.display = 'block'

    const nameEl = document.querySelector('#nameRegis')
    const loginEl = document.querySelector('#loginRegis')
    const passwordEl = document.querySelector('#passwordRegis')
    const buttonEnter = document.querySelector('#button-regis')

    buttonEnter.addEventListener('click', () => {
        registration(nameEl.value, loginEl.value, passwordEl.value)
        .then((responce) => {
            return responce.json()
        }).then((data) => {
            setToken(data.user.token)
            setName(data.user.name)
            document.querySelector('#comments').style.display = 'block'
            document.querySelector('#regis').style.display = 'none'
            document.querySelector('#form-add-comment').style.display = 'block'
            document.querySelector('#name-user').value = loginEl.value
        })
    })
})