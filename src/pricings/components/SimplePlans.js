import React from 'react';

const SimplePlans = () =>{

    return(
        <div className="my-10 bg-gray-900 text-white">
          <div className="grid-cols-1 md:grid grid-cols-3">
            <div className="rounded-lg bg-blue-800 m-12 p-16">
                <h1 className="text-2xl">Free</h1>
                <p>Feature 1</p>
                <p>Feature 1</p>
                <a href="/">Get started&rarr;</a>
            </div>
            <div className="rounded-lg bg-blue-800 m-12 p-16">
                <h1>Basic</h1>
            </div>
            <div className="rounded-lg bg-blue-800 m-12 p-16">
                <h1>Pro</h1>
            </div>
          </div>
        </div>
    );
}

export default SimplePlans;