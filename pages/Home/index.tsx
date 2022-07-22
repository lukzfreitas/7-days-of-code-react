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

    const links = [
        { label: intl.formatMessage({ id: "page.home.howToDo" }), visited: false, onClick: () => { } },
        { label: intl.formatMessage({ id: "page.home.sales" }), visited: false, onClick: () => { } },
        { label: intl.formatMessage({ id: "page.home.depoinments" }), visited: false, onClick: () => { } },
        { label: intl.formatMessage({ id: "page.home.videos" }), visited: false, onClick: () => { } },
        { label: intl.formatMessage({ id: "page.home.myCart" }), visited: true, onClick: () => { } }
    ];

    const items = [
        intl.formatMessage({ id: "page.home.chooseYourPlants" }),
        intl.formatMessage({ id: "page.home.makeYourWish" }),
        intl.formatMessage({ id: "page.home.waitAtYourHouse" }),
    ];

    const buy = intl.formatMessage({ id: "page.home.buy" });    

    const toSignNewsletter = intl.formatMessage({ id: "page.home.toSignNewsletter" })
    const typeYourEmail = intl.formatMessage({ id: "page.home.typeYourEmail" })

    return (
        <Body>
            <HeaderStyle>
                <Header links={links}></Header>
            </HeaderStyle>
            <WelcomeStyle>
                <Welcome
                    buttonTextNesletter={toSignNewsletter}
                    placeholderNewsletter={typeYourEmail}
                    prefixTitle={prefixTitle}
                    title={title}
                    text={description} />
            </WelcomeStyle>
            <MyPlantStyle>
                <MyPlant items={items} prefixTitle={howToGet} title={myPlant} />
            </MyPlantStyle>
            <SaleStyle>
                <Sale buttonText={buy} prefixTitle={knowOur} title={sales} />
            </SaleStyle>
        </Body>
    );
};
