import React from 'react';


const NeedBenefit = () =>{

    return(
        <div className="my-8 p-8 bg-pink-400 shadow-lg">
            <h2 className="text-white text-xl md:text-3xl font-serif my-4">Need to ship your product faster?</h2>
            <button
                className="bg-white hover:bg-gray-300 text-pink-400 hover:text-pink-600 text-xl font-semibold transition duration-500 rounded-sm p-3 my-3">
                    Try Pearly today
            </button>
        </div>
    );
}


export default NeedBenefit;