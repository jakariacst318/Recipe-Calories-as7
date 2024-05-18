import React from 'react';
import banner from './banner.png';

const Banner = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full py-12">
                <img className='w-full' src={banner} alt="Shoes" />
                <div className="card-body text-center  justify-center">
                    <h2 className=" text-5xl font-bold">Discover an exceptional cooking <br />
                        class tailored for you!</h2>
                    <h5 className='py-5'>Cooking classes and Culinary Education  have evolved into dynamic experiences that not only teach culinary skills but also <br />drive revenue generation, foster community, and eventually brand building.  </h5>
                    <div className="card-actions justify-center">
                        <button className="btn bg-green-400 rounded-full px-10 border-0 font-bold ">Explore Now</button>
                        <button className="btn  rounded-full px-10 border-0 font-bold ">Our Feedback</button>
                        
                    </div>
                    
                </div>                
            </div>            
        </div>

    );
};

export default Banner;