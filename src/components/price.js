import React from "react";
import styled, {keyframes} from "styled-components";


const PriceStyle = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`


const typing = keyframes`

    from {
      width: 0;
    }
    
    80% {
      width: 15ch;
    
    }
    
    100% {
       width: 15ch;
    }
    
   
    
`

const blink = keyframes`
     50% {
        border-color: transparent
      }

`


const AutoTyping = styled.div`

    width: 15ch;
    animation: ${typing} 5s steps(100) infinite, ${blink} 1s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    text-transform: uppercase;

  
`

const Price = (obj) => {

    return <PriceStyle>
        <AutoTyping>
            Price: {obj.price}
        </AutoTyping>
    </PriceStyle>


}

export default Price