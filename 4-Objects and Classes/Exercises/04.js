function movies(arr){
    let allMovies = [];

    for (const curMovie of arr){
        if (curMovie.includes('addMovie')){
            let [_,movieName]= curMovie.split('addMovie ');
            let movieObj ={name:movieName};
            allMovies.push(movieObj);
                     
        }else if(curMovie.includes('directedBy')){
            let[movieName, director] = curMovie.split(' directedBy ');
            let currentMovie = allMovies.find(movieObj => movieObj.name === movieName);
            if(currentMovie){
                currentMovie.director = director;
            }

        }else if(curMovie.includes('onDate')){
            let[movieName, date] = curMovie.split(' onDate ');
            let currentMovie = allMovies.find(movieObj => movieObj.name === movieName);
            if(currentMovie){
                currentMovie.date = date;
            }
        }
    }

    let fullMovies = allMovies.filter(movieObj => movieObj.director && movieObj.date)

    fullMovies.forEach(movieObj => console.log(JSON.stringify(movieObj)));
    
    
}

movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]
)