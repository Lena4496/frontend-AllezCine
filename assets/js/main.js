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
                    <p class="card-text overflow-auto" style="height: 240px">${filmP.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmP.release_date}</small>
                </div>
                </div>`
    }).join("");

    
    const responseTopRated = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataT = await responseTopRated.json();
    const arrT = dataT.results; console.log(arrT);
    const filmsT = Array.of(arrT[0],arrT[1],arrT[2], arrT[3]);
    console.log("filmsT",filmsT);

    document.querySelector("#TopRated").innerHTML =
    filmsT.map((filmT)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmT.poster_path}" class="card-img-top" alt="${filmT.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:90px">${filmT.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 240px">${filmT.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmT.release_date}</small>
                </div>
                </div>`
    }).join("");

    document.querySelector("#TopRated2").innerHTML = 
    filmsP.map((filmP)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmP.poster_path}" class="card-img-top" alt="${filmP.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmP.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 240px">${filmP.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmP.release_date}</small>
                </div>
                </div>`
    }).join("");

  




    const reponseNowPlaying = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    const dataO = await reponseNowPlaying.json(); 
    const arrO = dataO.results; console.log(arrO);
    const filmsO = Array.of(arrO[0],arrO[1],arrO[2], arrO[3], arrO[4]);
    const filmsO2 = Array.of(arrO[0],arrO[1],arrO[2], arrO[3]);
    console.log("filmsO",filmsO);

    

    document.querySelector("#NowPlaying").innerHTML =
    filmsO.map((filmO)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmO.poster_path}" class="card-img-top" alt="${filmO.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmO.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 240px">${filmO.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmO.release_date}</small>
                </div>
                </div>
                `
    }).join("");

    document.querySelector("#NowPlaying2").innerHTML =
    filmsO2.map((filmO)=>{
        return `<div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${filmO.poster_path}" class="card-img-top" alt="${filmO.title}">
                <div class="card-body">
                    <h5 class="card-title overflow-auto" style="height:75px">${filmO.original_title}</h5>
                    <p class="card-text overflow-auto" style="height: 240px">${filmO.overview}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${filmO.release_date}</small>
                </div>
                </div>
                `
    }).join("");

    // const reponseNowPlaying2 = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d8bf019d0cca372bd804735f172f67e8&language=fr-BE&page=1");
    // const dataO2 = await reponseNowPlaying2.json(); 
    // const arrO2 = dataO2.results; console.log(arrO);
    // const filmsO2 = Array.of(arrO2[0],arrO2[1],arrO2[2], arrO2[3], arrO2[4]);
    // console.log("filmsO2",filmsO2);

    // document.querySelector("#NowPlaying2").innerHTML =
    // filmsO2.map((filmO2)=>{
    //     return `<div class="card">
    //             <img src="https://image.tmdb.org/t/p/w500/${filmO2.poster_path}" class="card-img-top" alt="${filmO2.title}">
    //             <div class="card-body">
    //                 <h5 class="card-title overflow-auto" style="height:75px">${filmO2.original_title}</h5>
    //                 <p class="card-text overflow-auto" style="height: 190px">${filmO2.overview}</p>
    //             </div>
    //             <div class="card-footer">
    //                 <small class="text-muted">${filmO2.release_date}</small>
    //             </div>
    //             </div>`
    // }).join("");


})()



function validation() {
    let firstname = document.getElementById("form_firstname").value;
    let lastname = document.getElementById("form_lastname").value; 
    let email = document.getElementById("form_email").value; 
    
    let subject = document.getElementById("form_subject").value;
    let message = document.getElementById("form_message").value;
    
    
    $('#myModal').modal('toggle');
    document.querySelector(".firstname").innerHTML = firstname;
    document.querySelector(".lastname").innerHTML = lastname;
    document.querySelector(".email").innerHTML = email;
    document.querySelector(".subject").innerHTML = subject;
    document.querySelector(".message").innerHTML = message;
    
    }
    document.getElementById('sendmodal').addEventListener('click',validation);



    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
