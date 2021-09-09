import React from "react";
import styled from "styled-components"
import User1 from "./imges/pexels-ali-pazani-2777898.jpg"
import User2 from "./imges/pexels-anna-shvets-3851571.jpg"
import User3 from "./imges/pexels-anush-gorak-1431283.jpg"
import User4 from "./imges/pexels-fauxels-3183133.jpg"
import User5 from "./imges/pexels-john-diez-7578422.jpg"
import User6 from "./imges/pexels-kenex-media-sa-1165999.jpg"
import User7 from "./imges/pexels-moose-photos-1586996.jpg"
import User8 from "./imges/pexels-nappy-936075.jpg"
import User9 from "./imges/pexels-pixabay-416809.jpg"
import User10 from "./imges/pexels-ali-pazani-2777898.jpg"



const ImgMap = [User1, User2, User3, User4, User5, User6, User7, User8, User9, User10];

const UsersStyle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 40px 0;

`;


const UserStyle = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background: rgba(255,255,255,0.05);
    margin: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const PopInfo = styled.div`

    color: black;
    text-transform: lowercase;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    margin: 10px;
    line-height: 1.1em;
    
    transition: 0.5s;
    transform: translateY(40px);
    opacity: 0;
    
    span{
      line-height: 2em;
          
    }
    
    

`

const Disappear = styled.div`
      position: absolute;
      top: 260px;
      color: black;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 20px;
      transition: 0.5s;
      text-align: center;
`

const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  opacity: 0.7;
  transition: 0.5s;
  
  :hover{
    opacity: 1;
    transform: translateY(-10px);
    
    ${PopInfo} {
        opacity: 1;
        transform: translateY(0);
    }
    
    ${Disappear} {
        opacity: 0;
        transform: translateY(-40);
    }
    
  }
`

const ImgBox = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid rgba(0,0,0,0.25);

`

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    

`


const Info = styled.div`
    color: black;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 20px;
    line-height: 1.1em;
    
    span{
        font-size: 12px;
        font-weight: 300;
        text-transform: initial;
    
    }

`


const User = (users) => {
    const usersArray = users.users
    return <UsersStyle>


        {
            usersArray.map((item, index) => {
                return (<UserStyle>
                    <Content>
                        <ImgBox>
                            <Img src={ImgMap[index]}/>
                        </ImgBox>
                        <Info>{item.name}<br/>
                            <span>
                            {item.dob}
                        </span><br/>
                            <span>
                            {item.work}
                        </span>
                        </Info>

                        <PopInfo>
                            {item.email}<br/>
                            <span>
                            {item.address}, {item.city}
                            </span>
                            <br/>
                        </PopInfo>

                        <Disappear>
                            ID: {item.id}
                            <br/>
                            {item.optedin ? "True" : "False"}


                        </Disappear>

                    </Content>

                </UserStyle>)

            })

        }


        {/*<UserStyle>*/}
        {/*    <Content>*/}
        {/*        <ImgBox>*/}
        {/*            <Img src={User1}/>*/}
        {/*        </ImgBox>*/}
        {/*        <Info>Jiadong Mai <br/>*/}
        {/*            <span>1994</span>*/}
        {/*            <br/>*/}
        {/*            <span>Software Developer</span>*/}

        {/*        </Info>*/}

        {/*        <PopInfo>*/}
        {/*            heath.miers@foretrust.mobi <br/>*/}
        {/*            <span>*/}
        {/*                20 Glendale Road, Detroit*/}
        {/*            </span>*/}
        {/*            <br/>*/}
        {/*        </PopInfo>*/}

        {/*        <Disappear>*/}
        {/*            ID: 5*/}

        {/*        </Disappear>*/}

        {/*    </Content>*/}
        {/*</UserStyle>*/}


    </UsersStyle>


}


export default User;