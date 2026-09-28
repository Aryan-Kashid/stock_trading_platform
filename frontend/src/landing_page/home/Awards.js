import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src='media/images/largestBroker,svg'/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>We are the largest stock broker in India with over 10 million customers and 2 million trades executed daily.</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Govt Securities</li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png' style={{ width: '90%' }}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;