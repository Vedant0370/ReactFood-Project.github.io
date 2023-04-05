

import React from 'react'
// import Fooddata from './FoodData';
import { NavLink } from 'react-router-dom';
import EveningData from './EveningData';



const Evening = () => {
    return (

        <>


<h1 className='text-center mt-3 text-success pt-5'>Evening Tea & Cofee</h1>

<div className='container'>

    <div className='row'>

        {

            EveningData.map((cval) => {

                return (

                    <>

                        <div className='col-md-4 mt-5'>

                            <div class="card" style={{ width: "18rem" }}>
                                <img src={cval.cover} class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="card-title text-center text-primary">{cval.name}.</h3>
                                    <p class="card-text">{cval.rating} <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></p>
                                    <h4>Prise : 99 ₹</h4>

                                    <a href="#" class="btn btn-success ">Order Now</a>
                                    {/* <NavLink to={"/"} className="btn btn-success">Order now</NavLink> */}
                                </div>
                            </div>



                        </div>


                    </>


                );


            })


        }

    </div>

</div>




        </>
    )
}

export default Evening