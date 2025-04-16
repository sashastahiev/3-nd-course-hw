const comments = [
    {
        nick: "Глеб Фокин",
        date: "12.02.22 12:18",
        comm: "Это будет первый комментарий на этой странице",
        like: 3,
        status: false
    },
    {
        nick: "Варвара Н.",
        date: "13.02.22 19:22",
        comm: "Мне нравится как оформлена эта страница! ❤",
        like: 75,
        status: true
    }
]
const commentEl = document.getElementById("comments");
const addCommentEl = document.getElementById("addComment");
const nameEl = document.getElementById("name-user");
const textcommentEl = document.getElementById("text-comment");
const dateEl = new Date();
const AnswerButton = () => {
  const commentList = document.querySelectorAll(".comment");
  for (const comment of commentList){
    comment.addEventListener("click", () => {
      textcommentEl.innerHTML = `"${comments[comment.dataset.indexcomm].comm}" (${comments[comment.dataset.indexcomm].nick}),`;
    });
  }
}
const initLikeButton = () => {
    const LikeButtons = document.querySelectorAll(".like-button");
    for (const likeButton of LikeButtons){
        likeButton.addEventListener("click", (event) =>{
            event.stopPropagation();
            if (!comments[likeButton.dataset.index].status){
                comments[likeButton.dataset.index].like++;
                comments[likeButton.dataset.index].status = true;
                renderComments();
                likeButton.classList.add('activeLike');
            }
            else{
                comments[likeButton.dataset.index].like--;
                comments[likeButton.dataset.index].status = false;
                renderComments();
                likeButton.classList.remove('activeLike');
            }
        });
    };
};
const renderComments = () => {
    const newListComments = comments.map((comment,index) => {
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
        </li>`}).join("");
    commentEl.innerHTML = newListComments;
    const LikeButtons = document.querySelectorAll(".like-button");
    for (const likeButton of LikeButtons){
        if (comments[likeButton.dataset.index].status){
            likeButton.classList.add('activeLike');
        }
    };
    initLikeButton();
    AnswerButton();
}
function format(date){
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let minute = date.getMinutes();
    if (Number(day) < 10) 
      day = '0' + String(day);
    if (Number(month) < 10) 
      month = '0' + String(month);
    if (Number(minute) < 10)
      minute = '0' + String(minute);
    let mas = String(year).split('');
    year = mas[2] + mas[3];
    return `${day}.${month}.${year} ${date.getHours()}:${minute}`;
}
addCommentEl.addEventListener("click", () => {
  if(nameEl.value !== "" && textcommentEl.value !== ""){
      comments.push({
          nick: nameEl.value.replaceAll("<","&lt").replaceAll(">","&gt"), 
          date: format(dateEl),
          comm: textcommentEl.value.replaceAll("<","&lt").replaceAll(">","&gt"),
          like: 0,
          status: false}
      );
      renderComments();
    }
});
renderComments();
console.log("It works!");