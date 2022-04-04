import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../../fakeData';

const Review = () => {
    
    return (
        <div className="card">
            <div className="container">
                <div className='row'>
                    <h1 className="mt-5">What our customers say!</h1>
                    {postsData.map((rr) => (
                        <div className="mt-5 col-4 card border-primary">
                            <div className="card-header">{rr.name}</div>
                            <div className="card-body text-dark">
                                <h5 className="card-title">{rr.rating}</h5>
                                <p className="card-text">{rr.review_message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
};

export default Review; 