const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))

}
// loadComments();

const displayComments = comments => {

    const commentsShow = document.getElementById('comments-show');
    comments.forEach(comment => {
        // console.log(comment.id)
        const div = document.createElement('div')
        div.classList.add('col-4')
        div.innerHTML = `
        <div onClick="${loadSingelComment(comment.id)}">
        <h3>Id: ${comment.id}</h3>
        <h4>Nmae: ${comment.name}</h4>
        <h6>Email: ${comment.email}</h6>
        </div>
        `
        // const h3 = document.createElement('h3')
        // const p = document.createElement('p')
        // const h4 = document.createElement('h4')
        // h3.innerText = comment.id
        // p.innerText = comment.name
        // h4.innerText = comment.email
        // div.appendChild(h3)
        // div.appendChild(p)
        // div.appendChild(h4)
        commentsShow.appendChild(div)
    });
    // console.log(comments)
}
const loadSingelComment = (comment) => {

    fetch(`https://jsonplaceholder.typicode.com/comments/${comment}`)
        .then(res => res.json())
        .then(data => displaySingelComments(data))
}

const displaySingelComments = (singelComment) => {
    // console.log(singelComment)
    const singelCommentArea = document.getElementById('singel-comment')
    singelCommentArea.innerHTML = `
    <h3>Id: ${singelComment.id}</h3>
        <h4>Nmae: ${singelComment.name}</h4>
    
    `
}