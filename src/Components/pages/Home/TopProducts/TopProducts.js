import React from 'react';
import './TopProducts.css'
import ThemImg0 from '../../../../Assets/images/thumbnail-1.jpg'
import ThemImg1 from '../../../../Assets/images/thumbnail-10.jpg'
import ThemImg2 from '../../../../Assets/images/thumbnail-5.jpg'
// import ThemImg3 from '../../../../Assets/images/thumbnail-3.jpg'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const TopProducts = (props) => {
    return (
        <div>
            <div className='TopSelling_box'>
                <h3>{props.title}</h3>
                <div className='items d-flex align-items-center'>
                    < div className='img'>
                        <Link>  <img src={ThemImg0} className='w-100' alt='' /></Link>
                    </div>
                    <div className='info px-3'>
                        <Link to=''><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        <div className='d-flex alig-items-center'>
                            <span className='price text-g font-weight-bold'>$29.85</span>
                            <span className='oldPrice'>$43
                            </span>
                        </div>
                    </div>
                </div>

                <div className='items d-flex align-items-center'>
                    < div className='img'>
                        <Link>  <img src={ThemImg1} className='w-100' alt='' /></Link>
                    </div>
                    <div className='info px-3'>
                        <Link to=''><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        <div className='d-flex alig-items-center'>
                            <span className='price text-g font-weight-bold'>$29.85</span>
                            <span className='oldPrice'>$43
                            </span>
                        </div>
                    </div>
                </div>

                <div className='items d-flex align-items-center'>
                    < div className='img'>
                        <Link>  <img src={ThemImg2} className='w-100' alt='' /></Link>
                    </div>
                    <div className='info px-3'>
                        <Link to=''><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        <div className='d-flex alig-items-center'>
                            <span className='price text-g font-weight-bold'>$29.85</span>
                            <span className='oldPrice'>$43
                            </span>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default TopProducts;
