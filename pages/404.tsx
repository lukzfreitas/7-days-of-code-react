import ImageComponent from "../src/components/DataDisplay/Image"
import Label from "../src/components/Typography/Label"
import { Column } from "../styles/styled"

const Error404 = () => {
    return (
        <Column horizontalAlign="center" verticalAlign="center">
            <ImageComponent src="https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/plant.png?raw=true" width="400px" height="600px"/>
            <Label text="This page could not be found"/>
        </Column>        
    )
}

export default Error404