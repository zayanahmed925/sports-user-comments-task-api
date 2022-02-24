const loadSports = () => {
    const SearchField = document.getElementById('search-field')
    document.getElementById('spinner').style.display = ' block';
    const SearchFieldText = SearchField.value
    SearchField.value = '';
    if (SearchFieldText != '' && isNaN(SearchFieldText)) {
        const ul = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${SearchFieldText}`
        fetch(ul)
            .then(res => res.json())
            .then(data => displaySports(data.player))
    }
    else {
        const error = document.getElementById('error')
        document.getElementById('spinner').style.display = ' none';
        error.innerHTML = `
        <p>Please type Any player name</p>`
    }
    // console.log(SearchFieldText)
}
const displaySports = (players) => {
    // console.log(players)
    document.getElementById('spinner').style.display = ' none';
    const sportsArea = document.getElementById('sports-area')
    sportsArea.textContent = '';
    console.log(players)
    if (players == null) {
        const error = document.getElementById('error')

        error.innerHTML = `
        <p>Please type Any player name</p>`
        return;
    }
    else {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
            <div class="row g-0">
                <div class="col-lg-4 col-12 ">
                    <img src="${players[0].strCutout}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-lg-8 col-12">
                    <div class="card-body">
                        <h5 class="card-title">${players[0].strPlayer} (${players[0].strNationality})</h5>
                        <h6 class="card-title">Club: ${players[0].strTeam}</h6>
                        <p class="card-text">${players[0].strDescriptionEN.slice(0, 200)}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            `
        sportsArea.appendChild(div)
    }
    // const div = document.createElement('div')
    // div.classList.add('card')
    // div.innerHTML = `
    //     <div class="row g-0">
    //         <div class="col-lg-4 col-12 ">
    //             <img src="${players.strCutout}" class="img-fluid rounded-start" alt="...">
    //         </div>
    //         <div class="col-lg-8 col-12">
    //             <div class="card-body">
    //                 <h5 class="card-title">${players.strPlayer} (${players.strNationality})</h5>
    //                 <h6 class="card-title">Club: ${players.strTeam}</h6>
    //                 <p class="card-text">${players.strDescriptionEN.slice(0, 200)}</p>
    //                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //             </div>
    //         </div>
    //     </div>
    //     `



}