import styled from "styled-components";
import Px2vw from "../../src/utils/Px2vw";

export const Body = styled.div`
        height: 100%;        
        width: 100%;
        background-color: #f8f6f6;
        background-position: center top;
        background-size: 100% auto;        
    `

export const HeaderStyle = styled.div`
        position: relative;
        z-index: 1;
    `

export const WelcomeStyle = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;        
        margin-inline: ${Px2vw(220)};
    `;

export const MyPlantStyle = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: center;        
    `;

export const SaleStyle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        margin-inline: ${Px2vw(220)};
    `;