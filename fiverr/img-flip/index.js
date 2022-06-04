import React , { useEffect, useState } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import classes from './Home.module.css';
import styled from 'styled-components';

import images from '../../assets/imagepaths';
import Footer from '../../components/Layout/Footer/Footer';

export const GooseDiv = styled.div`
 
  p{
    transform: ${props => props.isFlipped ? 'rotate(324deg);' : 'rotate(24deg)'};
    margin-left: ${props => props.isFlipped ? '-25px' : '-35px'};
  }
  img {
    -webkit-transform: scaleX(-1);
    transform: ${props => props.isFlipped ? 'scaleX(-1)' : 'scaleX(1)'};
    }

`


const Home = ( props ) => {
    const [ timer, setTimer ] = useState(false);
    const [ hide, setHide ] = useState(false);
    const [ turnGoose, setTurnGoose ] = useState(false);

    const [ switchNumber, setNumber ] = useState(1);


    useEffect(() => {
        setTimeout(() => setTimer(true), 1000)
        setTimeout(() => setHide(true), 4000)
        for(var i=switchNumber; i<=13; i++) {
          if(switchNumber === 13) {
            setNumber(1);
          } else {
            setTimeout(() => setNumber(switchNumber+1), 1000)
          }
        }
      }, [switchNumber])

 

        return(
           <Wrapper>
                <img className={classes.Pizza} src={images.pizza} alt="pizza" loading="lazy"/>

                 
                <div className={classes.HomeContainer}>
                    <div>
                        <p>Welcome to coinbird, home of the HONK cryptocurrency </p>
                        <img className={classes.HeartEyes} src={images.heartEyes} alt="heart eyes" /> 
                    </div>

                    <GooseDiv isFlipped={turnGoose} >
                        <img className={classes.Goose} src={images.bigCoinbird} alt="goose" rel="preload"/>
                        <p className={classes.Gustav}>Gustav</p> 
                    </GooseDiv>
                    
                </div>

                <div className={classes.BlankDiv} onMouseOver={() => setTurnGoose(true)} onMouseOut={() => setTurnGoose(false)} ><p></p></div>

                <Footer/>
            </Wrapper> 
        )
};


export default Home;