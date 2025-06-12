import { fetchGetComments, login, registration, setToken, setName} from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments, initListComments } from '../modules/renderComments.js'
fetchGetComments().then((data) => {
    updateComments(data.comments)
    renderComments()
})

export const renderFormAuth = () => {
    const containerEl = document.querySelector('#container')
    containerEl.innerHTML = `<section id="authorization" class="add-form">
        <h1 class="add-form-auth-title">Авторизация</h1>
        <div class="add-form-inputs">
          <input
          type="text"
          class="add-form-name"
          placeholder="Введите логин"
          id="loginAuth"
          required>
          <input
          type="password"
          class="add-form-name"
          placeholder="Введите пароль"
          id="passwordAuth"
          required>
        </div>
        <fieldset class="add-form-auth">
          <button id="button-enter" class="add-form-button" type="submit">Войти</button>
          <u class="add-form-button-link entry">
            Зарегистрироваться
          </u>
        </fieldset>
      </section>`
    const loginEl = document.querySelector('#loginAuth')
    const passwordEl = document.querySelector('#passwordAuth')
    const buttonEnter = document.querySelector('#button-enter')
    buttonEnter.addEventListener('click', () => {
        login(loginEl.value, passwordEl.value)
        .then((response) => {
        if (response.status == 400){
            throw new Error('Неправильно введено имя или пароль')
        } else {
            return response.json()
        }
        }).then(data => {
            setToken(data.user.token)
            setName(data.user.name)
            updateComments(data.comments)
            renderComments()
            document.querySelector('#name-user').value = loginEl.value
        }).catch((error) => {
            alert(error)
        })
    })
}
export const renderFormRegis = () => {
    const containerEl = document.querySelector('#container')
    containerEl.innerHTML = `<section id="regis" class="add-form">
        <h1 class="add-form-regis-title">Регистрация</h1>
        <div class="add-form-inputs">
          <input
          type="text"
          class="add-form-name"
          placeholder="Введите имя"
          id="nameRegis"
          required>
          <input
          type="text"
          class="add-form-name"
          placeholder="Введите логин"
          id="loginRegis"
          required>
          <input
          type="password"
          class="add-form-name"
          placeholder="Введите пароль"
          id="passwordRegis"
          required>
        </div>
        <fieldset class="add-form-registry">
          <button id="button-regis" class="add-form-button">Зарегистрироваться</button>
        </fieldset>
      </section>`
    const nameEl = document.querySelector('#nameRegis')
    const loginEl = document.querySelector('#loginRegis')
    const passwordEl = document.querySelector('#passwordRegis')
    const buttonEnter = document.querySelector('#button-regis')

    buttonEnter.addEventListener('click', () => {
        registration(nameEl.value, loginEl.value, passwordEl.value)
        .then((response) => {
        if (response.status == 400){
            throw new Error('Неправильно введено имя или пароль')
        } else {
            return response.json()
        }
        }).then((data) => {
            setToken(data.user.token)
            setName(data.user.name)
            updateComments(data.comments)
            renderComments()
            document.querySelector('#name-user').value = loginEl.value
        }).catch((error) => {
            alert(error)
        })
    })
}
