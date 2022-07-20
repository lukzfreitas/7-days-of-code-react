import styled from "styled-components";

const TitleStyle = styled.div((props: { size: string }) => ({
    fontSize: props.size == 'large' ? '82px' : '42px',
    lineHeight: props.size == 'large' ? '94px' : '48px',
    fontWeight: '900',
    fontStyle: 'normal',
    color: '#202020'
}));

export default TitleStyle;