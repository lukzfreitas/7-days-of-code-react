import Header from "../../src/components/Surfaces/Header";
import MyPlant from "../../src/patterns/MyPlant";
import Sale from "../../src/patterns/Sale";
import Welcome from "../../src/patterns/Welcome";
import { Body, HeaderStyle, MyPlantStyle, SaleStyle, WelcomeStyle } from "./styled";

interface HomeProps {

};

export const Home = (props: HomeProps) => {
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
