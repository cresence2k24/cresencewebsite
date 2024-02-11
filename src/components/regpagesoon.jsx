import React from 'react';
import Header from './Header';
import HomeComp from './HomeComp';
import Reg from './RegComp';
import Scroll from './Scrolltotop';

const Regsoon = () => {
    return (
        
        <div className='h-dvh bg-site bg-cover to-100% flex flex-col gap-y-0'>
            <Header />,
            <Scroll />,
            <Reg />,
            <HomeComp />
        </div>
        
    );
}

export default Regsoon