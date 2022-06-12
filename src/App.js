import React, { useEffect, useState } from "react";

function App() {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div>
            <h1>hello</h1>
            {isLoading ? 'Loading...' : 'We are ready'}
        </div>
    );
}

export default App;
