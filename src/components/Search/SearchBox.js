import React, { useEffect } from 'react'

function SearchBox(props) {
    const showResults = () => {
        const query = document.getElementById("query").value
        props.setQuery(query)
    }

    //Sets loading bar to 100 when the page fully renders:
    useEffect(() => {        
        props.setProgress(0)
        props.setProgress(100)
        document.title = "Search - KillerTune"
    }, []) 
    
    return (
        <section className="md:mt-6 text-white body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="text-center mb-8">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3">Search for anything</h1>
                    <p className="text-sm md:text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
                        Find tracks, albums or playlists. Try something like
                        <span className="text-cyan-400"> "Top Punjabi Songs"</span>.
                    </p>
                </div>
                <div className="flex mt-4 justify-center">
                    <div className="w-16 h-1 rounded-full bg-cyan-500 inline-flex"></div>
                </div>
            </div>

            <div className="container px-5 py-0 mx-auto">
                <div
                    className="flex lg:w-4/12 w-full sm:flex-row flex-col mx-auto px-4 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label htmlFor="query" className="leading-7 text-sm text-gray-300">Try searching for a song or album</label>
                        <input
                            type="text"
                            id="query"
                            name="query"
                            className="w-full bg-white/5 border border-cyan-500/40 rounded-full focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/60 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out backdrop-blur-md"
                        />
                    </div>
                    <button
                        id="searchBtn"
                        onClick={showResults}
                        className="text-black bg-cyan-400 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-300 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/30"
                    >
                        Go
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SearchBox
