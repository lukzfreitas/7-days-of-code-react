import Link from "../../components/Navigation/Link";
import { Column, Dashed, LastDashed, Row } from "./styled";

interface MenuProps {
    links: { label: string, visited: boolean, onClick: Function }[];
}

const Menu = (props: MenuProps) => {

    return (
        <>
            {props.links.map(((link, index) => {
                return (
                    <Row key={index}>
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