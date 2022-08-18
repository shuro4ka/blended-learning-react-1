export const getReducedData = (arr) => {
    return arr.map(({id, poster_path: poster, title, vote_average: votes }) => ({ 
        id, 
        poster: 'https://image.tmdb.org/t/p/w500' + poster, 
        title, 
        votes,
        watched: false,
    }
    ));        
}