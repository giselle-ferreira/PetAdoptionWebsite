import react from "react";
import styled from "styled-components";
import ButtonDonate  from './ButtonDonate';

const Header = () => {
    return(
        <div>        
            #AdoptDontShop  |  Um Pet Pra Chamar de Seu
           
            <NavBar>
                <ButtonDonate />
            </NavBar> 
        </div>
    )
}

export default Header;

// const header = styled.div`
//     background: #fff;
//     text-align: center;
// `;

const NavBar = styled.div`
    background: #FFC233;
    height: 60px;

`;
