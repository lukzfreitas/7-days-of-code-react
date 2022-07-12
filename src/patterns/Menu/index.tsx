import styled from "styled-components";
import Link from "../../components/Link";

interface MenuProps {
    links: { label: string, visited: boolean, onClick: Function }[];
}

const Menu = (props: MenuProps) => {

    const Row = styled.div`
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;        
        display: flex;      
        align-items: flex-start;
        justify-content: flex-start;      
    `;

    const Column = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        
    `;

    const Dashed = styled.p`
        margin: 20px 20px 0px 20px;
        font-size: 16pt;
    `;

    const LastDashed = styled.p`
        margin: 20px 40px 0px 20px;
        font-size: 16pt;
    `;


    return (
        <>
            {props.links.map(((link, index) => {
                return (
                    <Row>
                        <Column>
                            <Link
                                label={link.label}
                                onClick={link.onClick}
                                visited={link.visited}
                            />
                        </Column>
                        <Column>
                            {index == props.links.length - 2 ?
                                <LastDashed> {'/'} </LastDashed> :
                                index == props.links.length - 1 ?
                                    null :
                                    <Dashed> {'/'} </Dashed>}
                        </Column>

                    </Row>

                );
            }))}
        </>
    );
}

export default Menu;