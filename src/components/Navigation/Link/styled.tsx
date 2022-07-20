import styled from "styled-components";

const LabelStyled = styled.p((props: { visited: boolean }) => ({
    fontSize: '16pt',
    color: '#202020',
    cursor: props.visited ? 'auto' : 'pointer',
    fontWeight: props.visited ? 'bold' : 'normal',
    ":hover": {
        color: props.visited ? '#202020' : '#8DCE97'
    }
}));

export default LabelStyled