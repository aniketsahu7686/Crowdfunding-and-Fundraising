import React from 'react'
import "./Stepspart.css";
const Stepspart = () => {
  return (
    <div className='simple-steps'>
        <div className='fund'>
        <h2>Start a Fundraiser in three simple steps</h2>
        </div>
        <div  className='content'>
            <h3 className='color'>
            Start your fundraiser
            </h3>
            <p className='ptag'>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>


            <h3 className='color'>Share your fundraiser</h3>
            <p className='ptag'>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>


            <h3  className='color'>Withdraw Funds</h3>
            <p className='ptag'>The funds raised can be withdrawn without any hassle directly to your bank account.</p>


            <p className='down-part'>It takes only 5 minutes to withdraw funds on ketto.</p>
        </div>
    </div>
  )
}

export default Stepspart
