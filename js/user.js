const loadUser = () => {
    fetch('https://randomuser.me/api/?results=30')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}
loadUser()

const displayUser = (users) => {
    // console.log(users)
    const userArea = document.getElementById('user')
    users.forEach(user => {
        console.log(user)
        const div = document.createElement('div')
        div.classList.add('col-4')
        div.classList.add('user')

        div.innerHTML = `
        <img src="${user.picture.medium}">
        <h3>Name: ${user.name.title} ${user.name.first}</h3>
        <h5>Gender: ${user.gender}</h5>
        <h5>City: ${user.location.city}</h5>
        <h5>Street: name:${user.location.street.name} number:${user.location.street.number}</h5>
        
        
        `
        userArea.appendChild(div)
    });
}