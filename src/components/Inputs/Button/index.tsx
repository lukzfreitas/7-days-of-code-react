import React from 'react';
import styled from 'styled-components';

interface ButtonProps {

  primary?: boolean;

  disabled?: boolean;

  backgroundColor?: string;

  size?: 'small' | 'medium' | 'large';

  label: string;

  onClick?: () => void;
}

const ButtonStyle = styled.div((props: { disabled: boolean, primary: boolean, size: string }) => ({
  fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 700,
  border: 0,
  cursor: props.disabled ? 'auto' : 'pointer',
  display: 'inline-block',
  lineHeight: 1,
  width: '300px',
  color: props.disabled ? '#FFFFFF' : props.primary ? '#FFFFFF' : '#FFCB47',
  backgroundColor: props.disabled ? '#979795' : props.primary ? '#FFCB47' : 'none',
  boxShadow: 'none',
  fontSize: props.size == 'small' ? '12px' : props.size == 'medium' ? '14px' : '16px',
  padding: props.size == 'small' ? '10px 16px' : props.size == 'medium' ? '11px 20px' : '26px 26px'
}));

const Button = ({
  primary = false,
  disabled = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  const handleClick = () => {
    if (disabled) return;
    props.onClick;
  }

  return (
    <ButtonStyle
      onClick={() => handleClick()}
      disabled={disabled}
      primary={primary}
      size={size}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
