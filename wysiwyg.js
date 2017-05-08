var input = document.getElementById("input");
var output = document.getElementById("output");
let count = 0;
var celebs = [
{
  title: "Musician",
  name: "Warren Zevon",
  bio: "Warren William Zevon was an American rock singer-songwriter",
  image: "https://en.wikipedia.org/wiki/Warren_Zevon#/media/File:Warren_Zevon_1978_press_photo.jpg",
  lifespan: {
    birth: 1947,
    death: 2003
  }
},
{
  title: "Writer",
  name: "Anton Chekhov",
  bio: "Anton Pavlovich Chekhov was a Russian playwright and short story writer, who is considered to be among the greatest writers of short fiction in history.",
  image: "https://en.wikipedia.org/wiki/Anton_Chekhov#/media/File:Anton_Chekhov_with_bow-tie_sepia_image.jpg",
  lifespan: {
    birth: 1860,
    death: 1904
  }
},
{
  title: "Actor",
  name: "Peter Sellers",
  bio: "Peter Sellers, CBE was an English film actor, comedian and singer. He performed in the BBC Radio comedy series The Goon Show, featured on a number of hit comic songs and became known to a worldwide audience through his many film characterisations, among them Chief Inspector Clouseau in The Pink Panther series of films.",
  image: "https://en.wikipedia.org/wiki/Peter_Sellers#/media/File:Peter_Sellers_at_home_in_Belgravia,_London,_1973.jpg",
  lifespan: {
    birth: 1925,
    death: 1980
  }
},
{
  title: "Writer",
  name: "Leo Tolstoy",
  bio: "Count Lev Nikolayevich Tolstoy, usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time.",
  image: "https://en.wikipedia.org/wiki/Leo_Tolstoy#/media/File:L.N.Tolstoy_Prokudin-Gorsky.jpg",
  lifespan: {
    birth: 1828,
    death: 1910
  }
}]
for (prop in celebs) {
    var cards = `<article class="people" id="A${count}" onclick="borderToggle('A${count}')">
				    <img class="image-size" src="${celebs[prop].image}">
				    <h2>${celebs[prop].name}</h2>
				    <h3>${celebs[prop].title}</h3>
				    <p class="life">${celebs[prop].lifespan.birth} - ${celebs[prop].lifespan.death}</p>
				    <p class="bio" id="B${count}" onclick="bioReplace('B${count}')">${celebs[prop].bio}</p>
				    </article>`;		    
    output.innerHTML += cards;
	count++;
}
function borderToggle(jerry){
	console.log(jerry);
	var cardToggle = document.getElementById(jerry);
	cardToggle.classList.toggle("bordered");
};
function bioReplace(edward){
  description = document.getElementById(edward);
  input.value = description.innerHTML;
      input.addEventListener("keyup", function(event){
        if (event.keyCode == 13){
        input.value = "";
      } else {
        description.innerHTML = input.value;
      }
  })  
}






