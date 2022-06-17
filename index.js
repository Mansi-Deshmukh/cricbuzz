// qZnM0O90ToVsLfLIjBiq9GvT9382

// https://cricapi.com/api/matches/

//Q1wGKuS1GCA47dN9LncO1pPPxUjYsMfceJOZwdKjRykYMpU5BVUiFHT0kVAu
const newsContent =[
            {head:"THINK TANK",
             image:"https://www.cricbuzz.com/a/img/v1/980x654/i1/c236045/englands-list-of-injuries-is.jpg",
             heading:"Skindding away on the fast lane: England's injury distress",
             para:"England have been experiencing an unprecedented slew of injuries to their best fast bowlers. What are the unique challenges that have contributed to this injury",
        },
        {head:"INJURY UPDATE",
             image:"https://www.cricbuzz.com/a/img/v1/595x396/i1/c236030/rahul-is-set-to-go-to-germany.jpg",
             heading:"KL Rahul set to miss England tour, to go abroad for treatment",
             para:"The current India vice-captain is set to miss the entire tour and go to Germany for his injury treatment",
        },
        {head:"IPL RIGHTS",
        image:"https://www.cricbuzz.com/a/img/v1/595x396/i1/c235902/it-was-big-payday-for-the-bcci.jpg",
        heading:"Star India bags TV rights, Viacom18 digital in INR 48,390 crore windfall for IPL",
        para:"In a first of its kind e-auction conducted by the BCCI, Star's winning bid was worth INR 23,575 crore whereas Viacom18's winning bid INR 23,758 crore",
        },
        {head:"SOUTH AFRICA TOUR OF INDIA, 2022",
        image:"https://www.cricbuzz.com/a/img/v1/595x396/i1/c236055/india-pulled-one-back-in-vizag.jpg",
        heading:"Buoyed India aim for series decider",
        para:"Quinton de Kock is in contention to return to the playing XI having missed the last couple of games",
        },
        {head:"REDEMPTION TALE",
        image:"https://www.cricbuzz.com/a/img/v1/980x654/i1/c236035/salil-ankola-has-rediscovered.jpg",
        heading:"Alcoholic haze to rediscovering love for cricket - Ankola's flight to redemption",
        para:"The former India fast bowler is back to cricket after having endured a long journey away from the game - of lost money, of anger issues, of alcoholism, of denial and despise towards the game",
        },

   
]
append(newsContent);

function append(data){

    data.forEach(function(el){

        let container = document.getElementById('news');

        let div = document.createElement('div');

        let head = document.createElement('p');
        head.innerText = el.head;

        let img = document.createElement('img');
        img.src = el.image;
        //  img.href= news1.html;
        let h = document.createElement('h2');
        h.innerText = el.heading;

        let p = document.createElement('p');
        p.innerText = el.para;
        
        div.append(head,img,h,p);
        

        container.append(div)
    })
}


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ad583f617emsh9050825513fc590p1804c9jsn8962404fd131',
// 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// };
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ae97a81ee1msh54b709b86b58ac4p120820jsna0a5e5e9ed0b',
// 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// };

// async function showData(){
//     try{
//         //   let res = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options);
//         let res = await fetch('https://cricket.sportmonks.com/api/v2.0/leagues+Q1wGKuS1GCA47dN9LncO1pPPxUjYsMfceJOZwdKjRykYMpU5BVUiFHT0kVAu')

//           let data = await res.json();

//           console.log(data)
//         //   apply(data.appIndex)

//     }
//     catch(err){
//         console.log(err)
//     }
// }
// showData();

// function apply(data){
    
//     let con = document.getElementById("lone");

//     data.map(function(el){
//         let p = document.createElement('img');
//         p.src= el.webURL;


//     })
//     console.log(data)
// }
// fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//https://cricket.sportmonks.com/api/v2.0/leagues


// fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));