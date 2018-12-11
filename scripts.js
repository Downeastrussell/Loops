//1
var i = 0;

while(i < 100){
  console.log(i+" TWEET TWEET");
  i++;
}

//2
for(i=0; i<100; i++){
    console.log(i+" TWEET TWEET");
}


//3
var favoriteFoods = ["steak", "pizza", "cookies", "sushi", "alfredo"];

for(i=0; i<favoriteFoods.length; i++){
    console.log(favoriteFoods[i]);
}

//4
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(i=0; i< harryPotterTitles.length; i++){
    console.log("Harry Potter " + harryPotterTitles[i]);
}

//5 & 7
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];
var A = 0;
var B = 0;
var C = 0;
var D =0;
var F =0;

for(i=0; i<grades.length; i++){
    if(grades[i] >= 93 ){
        console.log("A");
        var A=A+1;
    }
    if(grades[i] >= 84 && grades[i] <= 92 ){
        console.log("B");
        var B=B+1;
    }
    if(grades[i] >= 77 && grades[i] <= 83 ){
        console.log("C");
        var C=C+1;
    }
    if(grades[i] >= 70 && grades[i] <= 76 ){
        console.log("D");
        var D=D+1;
    }
    if(grades[i] <= 69 ){
        console.log("F");
        var F=F+1;
    }
}
var results = [A,B,C,D,F];


//7.1
console.log("Total A's scored by students: " + A);

//7.2
results.sort();
console.log("B was the most common grade earned, with a total of: " + results.pop());



//7.3

total = 0;
for(i=0; i< grades.length; i++){
    total = grades[i] + total;
}
console.log("the average grade earned was: " + total/grades.length+"%");


//6
var movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    }, 
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
  ]
  htmlString = "";
    for(i=0; i<movieSchedule.length; i++){
        
        if(movieSchedule[i].currentlyPlaying == true && movieSchedule[i].rating != "R"){
                    htmlString = htmlString +  `
                        <h3 class="movieTitle">${movieSchedule[i].title}</h3>
                        <h2 class="rating"> ${movieSchedule[i].rating}</h2>
                        <h3 class="current"> Currently Playing:  ${movieSchedule[i].currentlyPlaying}</h3>
                        <img class="imgage" src="${movieSchedule[i].poster}"> 
                    

                `
            }
        }
        document.querySelector("#movie-schedule").innerHTML = htmlString


        
    
    

    




