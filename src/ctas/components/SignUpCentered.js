import React from 'react';


const SignUpCentered = () =>{

    return(
        <div className="my-8 p-8 bg-gray-200 shadow-lg">
            <h2 className="text-gray-900 text-2xl font-bold">Sign Up!</h2>
            <p className="my-2">Subheading for CTA. Volutpat sed cras ornare arcu dui vivamus arcu.</p>
            <form className="w-full mx-auto py-4">
                <input 
                    type="text"
                    placeholder="email@domain.com"
                    className="p-2 mr-2 rounded"
                    />
                <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-black rounded p-2">
                        Send Me Deals
                </button>
            </form>
        </div>
    );
}


export default SignUpCentered;