import React, { useEffect } from 'react'
import homepic from "../images/homepic.png"
import { useNavigate } from 'react-router-dom';
const Home = () => {
  useEffect(() => {
    const _id = localStorage.getItem('_id');
    if (_id) {
      navigate('/userprofile');
    }else{
      navigate('/');
    }

  }, [])
  
  const navigate = useNavigate();
  const handlegetst = () => {
    navigate('/signup');
  };
  const handleabt = () => {
    navigate('/about');
  };

  return (
    <>
    
      <div className='home-bg'>
        <div className='home-box'></div>
          <div className='home-left'>
            <h1 className='homeheading-banner'>Your Donation of Blood May Save Someone's Life</h1>
            <p className='homepara-banner'>Donating blood not only improves the life of the recipient but also helps the donor to stay healthy</p>
            <button onClick={handlegetst} className='get-started'>Get Started</button>
            <button onClick={handleabt} className='get-help'>About us</button>
            </div>
            
                <div className='home-right'>
                  <img className='homeheader-img' src={homepic} alt="" />
                </div>
            

     </div>
       </>
  )
}

export default Home;
