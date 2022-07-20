import styled from "styled-components";
import Px2vw from "../../utils/Px2vw";

export const ImageStyle = styled.div`
        content: url('https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/plant.png?raw=true');
        position: absolute;
        height: 526px;
        top: 0;
        z-index: 0;
        margin-top: 40px;
        margin-left: ${Px2vw(450)};
    `

export const Row = styled.div`        
        display: flex;      
        align-items: flex-start;
        justify-content: flex-start;        
        position: absolute;
        z-index: 1;
    `;