import styled from 'styled-components'

import React from 'react'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogo1 src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for
                    an additional fee with a Disney+ subscription.
                    As of 03/26/21, the price of Disney+ and The Disney Bundle will increse
                    by $1.
                </Description>
                <CTALogo2 src="/images/cta-logo-two.png" />
                
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
display: flex;
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;
align-items: center;
justify-content: center;


&:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    
    
`
const CTALogo1 = styled.img`
    
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px; 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }

`
const Description = styled.p`
    text-align: center;
    line-height: 1.5;


`

const CTALogo2 = styled.img`

`
