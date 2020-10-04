import React from 'react';


const GetBenefit = () =>{

    return(
        <div className="my-8 px-8 py-24 bg-blue-500 shadow-lg rounded-md">
            <div className="grid lg:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-white text-4xl font-semibold">Get Pearly for your project</h2>
                    <p className="my-2 p-8 text-md text-white">Subheading for CTA. Volutpat sed cras ornare arcu dui vivamus arcu.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button
                        className="bg-white hover:bg-gray-300 text-black hover:text-blue-700 text-xl transition duration-500 rounded-sm p-3 my-3">
                            Start Free Trial
                    </button>
                </div>
                <div>
                    {/**Add fake screenshot of 'product' */}
                </div>
            </div>
        </div>
    );
}


export default GetBenefit;