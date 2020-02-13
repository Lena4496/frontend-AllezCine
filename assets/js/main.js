(async()=>{
    const responsePopular = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataP = await responsePopular.json(); console.log(dataP);
    const arrP = dataP.results; console.log(arrP);
    const filmsP = Array.of(arrP[0],arrP[1],arrP[2]);
    console.log("filmsP",filmsP);
    
    document.querySelector("#popular").innerHTML = 
    filmsP.map((filmP)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmP.poster_path}" class="card-img-top" alt="${filmP.title}">
                <div class="card-body">
                    <h5 class="card-title">${filmP.original_title}</h5>
                    <p class="card-text">${filmP.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmP.release_date}</small>
                </div>
                </div>`
    }).join("");

    
    const reponseTopRated = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataT = await reponseTopRated.json(); console.log(dataT);
    const arrT = dataT.results; console.log(arrT);
    const filmsT = Array.of(arrT[0],arrT[1],arrT[2]);
    console.log("filmsT",filmsT);

    document.querySelector("#TopRated").innerHTML =
    filmsT.map((filmT)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmT.poster_path}" class="card-img-top" alt="${filmT.title}">
                <div class="card-body">
                    <h5 class="card-title">${filmT.original_title}</h5>
                    <p class="card-text">${filmT.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmT.release_date}</small>
                </div>
                </div>`
    }).join("");

})()