const form = document.querySelector('#searchitem');
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    document.getElementById("displayresult").innerHTML = "";
    const searchtext = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchtext}`);
    document.getElementById("typedtext").value = "";
    console.log(res.data);
    console.log(res.data.length);
    if (res.data.length==0) {
        document.getElementById("displayresult").innerHTML=`<div class="mt-5"><center><h4>No Content Found!!</h4></center></div>`;
    }else{
    let content = "";
    for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].show.image) {
            let html = `<div class="card my-3 mx-auto bg-dark" style="width: 18rem;color:white">
         <img src="${res.data[i].show.image.medium}" class="card-img-top mt-2" alt="..." style="width:auto;height:200px">
         <div class="card-body">
          <h5>${res.data[i].show.name}</h5>
          <p class="summary" style="font-size:50px;">${res.data[i].show.summary}</p>
          <h6>Released On : ${res.data[i].show.premiered}</h6>
          <p  style="color:brown;">Rating : ⭐ ${res.data[i].show.rating.average}</p>
         </div>
       </div>`
            content += html;
        }
    }
    document.getElementById("displayresult").innerHTML = content;
}
})
