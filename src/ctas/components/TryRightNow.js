import React from 'react';


const TryForFree = () =>{

    return(
        <div className="my-8 px-8 py-24 bg-green-400 shadow-lg">
            <div>
                <h2 className="text-black text-2xl md:text-4xl font-hairline">Develop faster with components.</h2>
                <h2 className="my-2 text-2xl md:text-4xl font-serif">Try Pearly right now.</h2>
            </div>
            <div className="py-4">
                <button
                    className="bg-gray-900 hover:bg-gray-200 text-white hover:text-gray-800 transition duration-500 rounded-lg px-6 py-4">
                        Get Started
                </button>
            </div>
        </div>
    );
}


export default TryForFree;