import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src="https://i.ytimg.com/vi/Mh4YhAzQxhA/maxresdefault.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>

                <Wrap>
                    <img src="https://i.ytimg.com/vi/Mh4YhAzQxhA/maxresdefault.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="https://i.ytimg.com/vi/Mh4YhAzQxhA/maxresdefault.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-starwars.png" />
                </Wrap>



            </Content>
           
        </Container>
    )
}

export default Movies


const Container = styled.div`

`

const Content = styled.div`

display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-gap: 15px;




`

const Wrap = styled.div`
width: 100%;
border-radius: 3px;
overflow: hidden;
cursor: pointer;
border: solid 3px rgba(249, 249, 249, 0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73) 0px 16px 10px -10px;

   

img {
    
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    
}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72) 0px 30px 22px -16px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
} 



`
