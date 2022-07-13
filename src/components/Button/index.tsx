import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  
  primary?: boolean;
  
  backgroundColor?: string;
  
  size?: 'small' | 'medium' | 'large';
  
  label: string;
  
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  const ButtonStyle = styled.div`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;    
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    color: ${primary ? 'white' : '#333'};
    background-color: ${primary ? '#FFCB47' : 'transparent'};
    box-shadow: ${!primary ? 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset' : 'none'};
    font-size: ${size == 'small' ? '12px' : size == 'medium' ? '14px' : '16px'};
    padding: ${size == 'small' ? '10px 16px' : size == 'medium' ? '11px 20px' : '30px 80px'};
  `;

  return (    
    <ButtonStyle>
      {label}
    </ButtonStyle>    
  );
};

export default Button;
