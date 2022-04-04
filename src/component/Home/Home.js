import React from 'react';
import postsData from '../../fakeData';
import { Link } from 'react-router-dom';
import { Navigate, Routes, Route} from "react-router-dom";
import  iPhone from '../../iphone.jpg'
import Review from '../Review/Review';
const Home = () => {
    
    const result =  postsData.slice(0, 3);
    // console.log('test', result);
    return (
        <div>
            <div className="container">
                <div className="row g-1">
                    <div className="col-6">
                        <h1 className="mt-5">Your next phone </h1>
                        <h1>Your best phone</h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. O
                            dio eaque iusto natus id iure officiis, magnam illo ea veri
                            tatis dolore laudantium soluta reiciendis?
                            Architecto repudiandae consequatur esse, repellat veritatis
                            fuga? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Non, nostrum.</p>

                            <Link className="btn btn-dark" to="#">Live Demo</Link>
                    </div>
                    <div className="col-6 mt-5">
                        <img src={iPhone} alt="" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='row'>
                    <h1>Customer Reviews(3)</h1>
                    {result.map((rr) => (
                        <div className="col-4 g-1 card border-primary">
                            <div className="card-header">{rr.name}</div>
                            <div className="card-body text-dark">
                                <h5 className="card-title">{rr.rating}</h5>
                                <p className="card-text">{rr.review_message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link className="btn btn-dark mt-3"  to={`/review/`}>See All Reviews</Link>      
        </div>
    );
};

export default Home;