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

const Button = ({
  primary = false,
  disabled = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  const ButtonStyle = styled.div`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;    
    cursor: ${ disabled ? 'auto' : 'pointer'};
    display: inline-block;
    line-height: 1;
    width: 300px;
    color: ${disabled ? '#FFFFFF' : primary ? '#FFFFFF' : '#FFCB47'};
    background-color: ${disabled ? '#979795' : primary ? '#FFCB47' : 'none'};
    box-shadow: ${!primary ? 'none' : 'none'};
    font-size: ${size == 'small' ? '12px' : size == 'medium' ? '14px' : '16px'};
    padding: ${size == 'small' ? '10px 16px' : size == 'medium' ? '11px 20px' : '26px 26px'};
    text-align: center;
  `;

  const handleClick = () => {
    if (disabled) return;
    console.log('ok');
    props.onClick;
  }

  return (    
    <ButtonStyle onClick={() => handleClick()}>
      {label}
    </ButtonStyle>    
  );
};

export default Button;
