//Hente knapper til portfolio - bilde section
const btnAll = document.getElementById('btn-all');
const btnProject1 = document.getElementById('btn-project1');
const btnProject2 = document.getElementById('btn-project2');
const btnProject3 = document.getElementById('btn-project3');
const btnProject4 = document.getElementById('btn-project4');
const btnProject5 = document.getElementById('btn-project5');


//Hente bildene som ligger i prosjekt seksjon 
const imgProject1 = document.getElementById('img-project1');
const imgProject2 = document.getElementById('img-project2');
const imgProject3 = document.getElementById('img-project3');
const imgProject4 = document.getElementById('img-project4');
const imgProject5 = document.getElementById('img-project5');



console.log(btnAll, btnProject1, btnProject2, btnProject3, btnProject4, btnProject5);

btnProject1.addEventListener("click", () => {
     imgProject1.style.display="block"
     imgProject2.style.display="none";
     imgProject3.style.display="none";
     imgProject4.style.display="none";
     imgProject5.style.display="none";
});

btnProject3.addEventListener("click", () => {
    imgProject1.style.display="none";
    imgProject2.style.display="none";
    imgProject3.style.display="block"
    imgProject4.style.display="none";
    imgProject5.style.display="none";
});

btnProject4.addEventListener("click", () => {
    imgProject1.style.display="none";
    imgProject2.style.display="none";
    imgProject3.style.display="none";
    imgProject4.style.display="block"
    imgProject5.style.display="none";
});

btnProject5.addEventListener("click", () => {
    imgProject1.style.display="none";
    imgProject2.style.display="none";
    imgProject3.style.display="none";
    imgProject4.style.display="none";
    imgProject5.style.display="block"
});

btnAll.addEventListener("click", () => {
    imgProject1.style.display="block"
    imgProject2.style.display="block"
    imgProject3.style.display="block"
    imgProject4.style.display="block"
    imgProject5.style.display="block"
})




// Get the modal
//var modal = document.getElementById("myModal");
//var btn = document.getElementById('btn-modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
//var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");

//img.onclick = function(){
  //modal.style.display = "block";
  //modalImg.src = this.src;
  //captionText.innerHTML = this.alt;
//}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //modal.style.display = "none";
//}

