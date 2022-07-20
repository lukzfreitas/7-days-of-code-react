import styled from "styled-components";

const ButtonStyle = styled.div((props: { disabled: boolean, primary: boolean, size: string }) => ({
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    border: 0,
    cursor: props.disabled ? 'auto' : 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    width: '320px',
    color: props.disabled ? '#FFFFFF' : props.primary ? '#FFFFFF' : '#FFCB47',
    backgroundColor: props.disabled ? '#979795' : props.primary ? '#FFCB47' : 'none',
    boxShadow: 'none',
    fontSize: props.size == 'small' ? '12px' : props.size == 'medium' ? '14px' : '16px',
    padding: props.size == 'small' ? '10px 16px' : props.size == 'medium' ? '11px 20px' : '26px 26px'
}));

export default ButtonStyle;