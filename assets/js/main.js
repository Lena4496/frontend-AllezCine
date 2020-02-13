(async()=>{
    const responsePopular = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataP = await responsePopular.json();
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

    
    const responseTopRated = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataT = await responseTopRated.json();
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

    const responseUpcoming = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataU = await responseUpcoming.json();
    const arrU = dataU.results;
    const filmU1 = Array.of(arrU[0]);
    console.log('filmU1',filmU1);

    document.querySelector("#U1").innerHTML = 
    filmU1.map((filmU1)=>{
        return `<div class="carousel-item active">
                    <img class="d-block w-100" src="https://image.tmdb.org/t/p/w500/${filmU1.backdrop_path}" alt="${filmU1.title}">
                    <div class="carousel-caption d-none d-md-block ">
                        <h1 class="p-2 font-weight-bold text-shadow">LATEST <strong class="text-danger">ON</strong>LINE <strong class="text-danger">MO</strong>VIES</h1>
                        <p class="p-2 font-weight-bold ">IN SPACE NO ONE CAN HEAR YOU SCREAM</p>
                        <button class="m-3 bg-danger border-0  p-1 text-white rounded ">WATCH TRAILER</button>
                    </div>
                </div>`
    }).join("");

    const filmU2 = Array.of(arrU[1]);
    console.log('filmU2',filmU2);

    document.querySelector("#U1").innerHTML = 
    filmU2.map((filmU2)=>{
        return `<div class="carousel-item active">
                    <img class="d-block w-100" src="https://image.tmdb.org/t/p/w500/${filmU2.backdrop_path}" alt="${filmU2.title}">
                    <div class="carousel-caption d-none d-md-block ">
                        <h1 class="p-2 font-weight-bold text-shadow">LATEST <strong class="text-danger">ON</strong>LINE <strong class="text-danger">MO</strong>VIES</h1>
                        <p class="p-2 font-weight-bold ">IN SPACE NO ONE CAN HEAR YOU SCREAM</p>
                        <button class="m-3 bg-danger border-0  p-1 text-white rounded ">WATCH TRAILER</button>
                    </div>
                </div>`
    }).join("");

    const filmU3 = Array.of(arrU[2]);
    console.log('filmU3',filmU3);

    document.querySelector("#U3").innerHTML = 
    filmU3.map((filmU3)=>{
        return `<div class="carousel-item active">
                    <img class="d-block w-100" src="https://image.tmdb.org/t/p/w500/${filmU3.backdrop_path}" alt="${filmU3.title}">
                    <div class="carousel-caption d-none d-md-block ">
                        <h1 class="p-2 font-weight-bold text-shadow">LATEST <strong class="text-danger">ON</strong>LINE <strong class="text-danger">MO</strong>VIES</h1>
                        <p class="p-2 font-weight-bold ">IN SPACE NO ONE CAN HEAR YOU SCREAM</p>
                        <button class="m-3 bg-danger border-0  p-1 text-white rounded ">WATCH TRAILER</button>
                    </div>
                </div>`
    }).join("");
})()