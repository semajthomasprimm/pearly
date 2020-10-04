import React from 'react';


const TryToday = () =>{

    return(
        <div className="my-8 px-8 py-16 bg-teal-300 shadow-lg rounded-lg">
            <div className="grid lg:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-black text-2xl font-bold">Try Pearly today</h2>
                    <p className="my-2 text-sm">Subheading for CTA. Volutpat sed cras ornare arcu dui vivamus arcu.</p>
                </div>
                <div>
                    <form className="w-full mx-auto py-4">
                        <input 
                            type="text"
                            placeholder="email@domain.com"
                            className="p-3 rounded-l-lg border border-black focus:outline-none"
                            />
                        <button
                            className="bg-gray-900 hover:bg-gray-400 text-white hover:text-gray-800 transition duration-500 bord rounded-r-lg p-3">
                                Get Started
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default TryToday;