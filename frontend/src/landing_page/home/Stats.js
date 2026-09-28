import React from 'react';

function Stats() {
    return (    
        <div className='container p-3'>
            <div className="row p-5 ">
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's what we stand for. With over 10 million customers, we prioritize your needs and provide you with the best trading experience.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, no spam - just straightforward, transparent trading.</p>

                    <h2 className='fs-4'>The Zerodha Universe</h2>
                    <p className='text-muted'>Not just a broker, but a complete financial ecosystem.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With inittiatives like Nudge and Kill switch,we dont just facilitate trading, we help you make better financial decisions.</p>

                </div>
                <div className="col-6 p-5">
                    <img src='media/images/ecosytem.png' style={{ width: '90%' }}/>
                    <div className="text-center">
                        <a href='' className='mx-5' style={{ textDecoration: "none" }}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{ textDecoration: "none" }}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                    
            </div>
        </div> 
    );
}

export default Stats;