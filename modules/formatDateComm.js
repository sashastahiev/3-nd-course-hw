export function format(date) {
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let minute = date.getMinutes()
    if (Number(day) < 10) day = '0' + String(day)
    if (Number(month) < 10) month = '0' + String(month)
    if (Number(minute) < 10) minute = '0' + String(minute)
    let mas = String(year).split('')
    year = mas[2] + mas[3]
    return `${day}.${month}.${year} ${date.getHours()}:${minute}`
}