import { useEffect } from 'react';

//74c9900e

const API_url = 'http://www.omdbapi.com?apikey=74c9900e';

const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${API_url}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovie('Spiderman');
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;