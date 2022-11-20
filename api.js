var rootURL = 'http://numbersapi.com/'

export default function(value, type) {
    if (type == 'number'){
        var url = `${rootURL}${value}/?json`;
    }
    else if (type == 'date' || type == 'year'){
        var url = `${rootURL}${value}/${type}/?json`;
    }
    console.log(url);
    return fetch(url)
    .then(function (response) {
    return response.text();
    })
    .then(function(text){
    console.log(text);
    let json = JSON.parse(text);
    console.log(json);
    return json;
    })
}