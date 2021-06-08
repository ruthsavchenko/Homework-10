$(document).ready(() => {
    const renderCountries = countries => {
        console.log(countries);
        let htmlResult = '';
        for(let country of countries) {
            htmlResult += `<tr><td>${country.name}</td></tr>`;
        }
        $('table#countries tbody').html(htmlResult);
    }
    const getData = () => {
        $.ajax({
            url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
            headers: {
                "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => {
            console.log(data);
            renderCountries(data.response.map(country => {
                return {name: country.name};
            }))
        })
    }
    getData();

    $.ajax({
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        data: {
            code: 'ES'
        },
        headers: {
            "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }).then(data => {
        console.log(data);
    })

    $.ajax({
        url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
        data: {
            league: 140,
            season: '2020'
        },
        headers: {
            "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }).then(data => {
        console.log(data);
    })

    $.ajax({
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        data: {
            team: 529,
            season: '2020'
        },
        headers: {
            "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }).then(data => {
        console.log(data);
    })


});
