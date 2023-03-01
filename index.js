let text = document.getElementById('text');
let author = document.getElementById('author');
let btn = document.getElementById('new-quote')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8f91a2ec37mshb8a3eb990fa7970p179f88jsn5c15d0832a4f',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

// Fetching quote from quotes api.
const fetchData = async()=>{
    let url = `https://quotes15.p.rapidapi.com/quotes/random/`;
    try{
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}

// Displaying Quote on screen.
const displayData = async()=>{
    let fetching =  await fetchData();
    text.innerHTML =` <i class="fa fa-quote-left" id="quote-left"></i>`+ fetching['content'] ;
    author.innerHTML ='-'+ fetching.originator['name'];

    let colorArray = ['red', 'hotpink', 'blue', 'grey', 'coral', 'blueViolet', 'turquoise', 'black']
   
        let bgColor = colorArray[Math.floor(Math.random()* colorArray.length)];
        document.body.style.backgroundColor = bgColor;
        document.getElementById('quote-box').style.color = bgColor
        document.getElementById('new-quote').style.backgroundColor = bgColor;
        document.getElementById('tweet-quote').style.backgroundColor = bgColor;
        
}

// fetch new quote after clicking on button
btn.addEventListener('click', ()=>{
    displayData();
})

displayData();
