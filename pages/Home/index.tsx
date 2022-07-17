import styled from "styled-components";
import Header from "../../src/components/Surfaces/Header";
import MyPlant from "../../src/patterns/MyPlant";
import Sale from "../../src/patterns/Sale";
import Welcome from "../../src/patterns/Welcome";
import Px2vw from "../../src/utils/Px2vw";

interface HomeProps {

};

export const Home = (props: HomeProps) => {

    const Body = styled.body`
        height: 100%;        
        width: 100%;
        background-color: #f8f6f6;
        background-position: center top;
        background-size: 100% auto;        
    `

    const HeaderStyle = styled.div`
        position: relative;
        z-index: 1;
    `

    const WelcomeStyle = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;        
        margin-inline: ${Px2vw(220)};
    `;

    const MyPlantStyle = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: center;        
    `;

    const SaleStyle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        margin-inline: ${Px2vw(220)};
    `;

    return (
        <Body>
            <HeaderStyle>
                <Header></Header>
            </HeaderStyle>
            <WelcomeStyle>
                <Welcome
                    prefixTitle="Sua casa com as"
                    title="melhores plantas"
                    text="Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca." />
            </WelcomeStyle>
            <MyPlantStyle>
                <MyPlant prefixTitle="Como conseguir" title="minha planta" />
            </MyPlantStyle>
            <SaleStyle>
                <Sale prefixTitle='Conheça nossa' title='Ofertas' />
            </SaleStyle>
        </Body>
    );
};
