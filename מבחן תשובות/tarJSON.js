let avivInfo = {
    name: "Aviv",
    age : 28,
    occupation: "Software Developer",

    contact: {
        email: "avivashke@gmail.com",
        phone: +972586735953,
        id: 311435333,
        school: "Maale-Shaharut",
        address:{
            country: "Israel",
            city:"Kibbutz Samar",
            street:"first neighborhood",
            zip:"8881500",
    }},
        hobbies: ['reading', 'coding', 'guitar', 'nature'],
        skills: ['communication', 'problem-solving', 'teaching'],
        interests: ['technology', 'new music', 'philosophy'],

        friends: [
            {name:'Yaron', relation:'colleague'},
            {name:'Omer', relation:'friend'},
            {name:'Shahar', relation:'friend',}
        ],
        favoriteMovies: [
            {name: "The Big Blue", year:1988},
            {name: "Forrest Gump", year:1994},
            {name: "Big Lebowsky",  year:1998},

        ],


        
    }
    const stringi = JSON.stringify(avivInfo);
    document.write(`<pre>${stringi}</pre>`);