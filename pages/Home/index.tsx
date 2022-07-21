import { useIntl } from "react-intl";
import Header from "../../src/components/Surfaces/Header";
import MyPlant from "../../src/patterns/MyPlant";
import Sale from "../../src/patterns/Sale";
import Welcome from "../../src/patterns/Welcome";
import { Body, HeaderStyle, MyPlantStyle, SaleStyle, WelcomeStyle } from "./styled";

interface HomeProps {

};

export const Home = (props: HomeProps) => {

    const intl = useIntl();

    const title = intl.formatMessage({ id: "page.home.title" });
    const prefixTitle = intl.formatMessage({ id: "page.home.prefixTitle" });
    const description = intl.formatMessage({ id: "page.home.description" });
    const howToGet = intl.formatMessage({ id: "page.home.howToGet" });
    const myPlant = intl.formatMessage({ id: "page.home.myPlant" });
    const knowOur = intl.formatMessage({ id: "page.home.knowOur" });
    const sales = intl.formatMessage({ id: "page.home.sales" });
    
    return (        
        <Body>
            <HeaderStyle>
                <Header></Header>
            </HeaderStyle>
            <WelcomeStyle>                
                <Welcome
                    prefixTitle={prefixTitle}
                    title={title}
                    text={description} />
            </WelcomeStyle>
            <MyPlantStyle>
                <MyPlant prefixTitle={howToGet} title={myPlant} />
            </MyPlantStyle>
            <SaleStyle>
                <Sale prefixTitle={knowOur} title={sales} />
            </SaleStyle>
        </Body>
    );
};
