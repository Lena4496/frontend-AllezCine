(async()=>{
    const responsePopular = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataP = await responsePopular.json();
    const arrP = dataP.results; console.log(arrP);
    const filmsP = Array.of(arrP[0],arrP[1],arrP[2], arrP[3], arrP[4]);
    console.log("filmsP",filmsP);
    
    document.querySelector("#popular").innerHTML = 
    filmsP.map((filmP)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmP.poster_path}" class="card-img-top" alt="${filmP.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmP.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 100px">${filmP.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmP.release_date}</small>
                </div>
                </div>`
    }).join("");

    
    const responseTopRated = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataT = await responseTopRated.json();
    const arrT = dataT.results; console.log(arrT);
    const filmsT = Array.of(arrT[0],arrT[1],arrT[2], arrT[3], arrT[4]);
    console.log("filmsT",filmsT);

    document.querySelector("#TopRated").innerHTML =
    filmsT.map((filmT)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmT.poster_path}" class="card-img-top" alt="${filmT.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmT.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 100px">${filmT.overview}</p>
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
        return `<img class="d-block w-100 h-50" src="https://image.tmdb.org/t/p/w500/${filmU1.backdrop_path}" alt="First Slide">
                <div class="carousel-caption d-none d-md-block ">
                    <h1 class="p-2 font-weight-bold text-shadow">LATEST <strong class="text-danger">ON</strong>LINE <strong class="text-danger">MO</strong>VIES</h1>
                    <p class="p-2 font-weight-bold ">IN SPACE NO ONE CAN HEAR YOU SCREAM</p>
                    <button class="m-3 bg-danger border-0  p-1 text-white rounded ">WATCH TRAILER</button>
                </div>`
    }).join("");

    const filmU2 = Array.of(arrU[1]);
    console.log('filmU2',filmU2);

    document.querySelector("#U1").innerHTML = 
    filmU2.map((filmU2)=>{
        return `<img class="d-block w-100 h-50" src="https://image.tmdb.org/t/p/w500/${filmU2.backdrop_path}" alt="Second Slide">
                <div class="carousel-caption d-none d-md-block ">
                    <h1 class="p-2 font-weight-bold text-shadow">LATEST <strong class="text-danger">ON</strong>LINE <strong class="text-danger">MO</strong>VIES</h1>
                    <p class="p-2 font-weight-bold ">IN SPACE NO ONE CAN HEAR YOU SCREAM</p>
                    <button class="m-3 bg-danger border-0  p-1 text-white rounded ">WATCH TRAILER</button>
                </div>`
    }).join("");

    const filmU3 = Array.of(arrU[2]);
    console.log('filmU3',filmU3);

    document.querySelector("#U3").innerHTML = 
    filmU3.map((filmU3)=>{
        return `<img class="d-block w-100 h-50" src="https://image.tmdb.org/t/p/w500/${filmU3.backdrop_path}" alt="Third Slide">
                <div class="carousel-caption d-none d-md-block ">
                    <h1 class="p-2 font-weight-bold text-shadow">LATEST <strong class="text-danger">ON</strong>LINE <strong class="text-danger">MO</strong>VIES</h1>
                    <p class="p-2 font-weight-bold ">IN SPACE NO ONE CAN HEAR YOU SCREAM</p>
                    <button class="m-3 bg-danger border-0  p-1 text-white rounded ">WATCH TRAILER</button>
                </div>`
    }).join("");
    const reponseTopRated2 = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataT2 = await reponseTopRated2.json(); console.log(dataT);
    const arrT2 = dataT2.results; console.log(arrT);
    const filmsT2 = Array.of(arrT2[0],arrT2[1],arrT2[2], arrT2[3], arrT2[4]);
    console.log("filmsT2",filmsT2);

    document.querySelector("#TopRated2").innerHTML =
    filmsT2.map((filmT2)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmT2.poster_path}" class="card-img-top" alt="${filmT2.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmT2.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 100px">${filmT2.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmT2.release_date}</small>
                </div>
                </div>`
    }).join("");





    const reponseNowPlaying = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataO = await reponseNowPlaying.json(); 
    const arrO = dataO.results; console.log(arrO);
    const filmsO = Array.of(arrO[0],arrO[1],arrO[2], arrO[3], arrO[4]);
    console.log("filmsO",filmsO);

    

    document.querySelector("#NowPlaying").innerHTML =
    filmsO.map((filmO)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmO.poster_path}" class="card-img-top" alt="${filmO.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmO.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 100px">${filmO.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmO.release_date}</small>
                </div>
                </div>`
    }).join("");

    const reponseNowPlaying2 = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataO2 = await reponseNowPlaying2.json(); 
    const arrO2 = dataO2.results; console.log(arrO);
    const filmsO2 = Array.of(arrO2[0],arrO2[1],arrO2[2], arrO2[3], arrO2[4]);
    console.log("filmsO",filmsO);

    document.querySelector("#NowPlaying2").innerHTML =
    filmsO.map((filmO2)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmO2.poster_path}" class="card-img-top" alt="${filmO2.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmO2.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 100px">${filmO2.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmO2.release_date}</small>
                </div>
                </div>`
    }).join("");


})()