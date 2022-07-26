const getContentApi = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a302613d4cmshb008348c45e5d25p137b14jsn32115d38cef1',
		    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        },

    };

    let url = `https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&id=2172797&lang=null&units=imperial&mode=json`;

    fetch(url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
        
}

getContentApi();
// No funciona(API DE PAGA) pero sirve de ejemplo