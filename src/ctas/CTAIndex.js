import React from 'react';
import SignUpCentered from './components/SignUpCentered';
import TryToday from './components/TryToday';
import TryRightNow from './components/TryRightNow';
import NeedBenefit from './components/NeedBenefit';
import GetBenefit from './components/GetBenefit';


const CTAIndex = () =>{

    return(
        <div className="mx-16">
          <SignUpCentered />
          <TryToday />
          <TryRightNow />
          <NeedBenefit />
          <GetBenefit />
        </div>
    );
}

export default CTAIndex;