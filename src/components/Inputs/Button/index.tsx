import React from 'react';
import styled from 'styled-components';
import Px2vw from '../../../utils/Px2vw';

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
    height: 100%;
    color: ${primary ? '#FFFFFF' : '#FFCB47'};
    background-color: ${primary ? '#FFCB47' : 'none'};
    box-shadow: ${!primary ? 'none' : 'none'};
    font-size: ${size == 'small' ? '12px' : size == 'medium' ? '14px' : '16px'};
    padding: ${size == 'small' ? '10px 16px' : size == 'medium' ? '11px 20px' : '30px 26px'};
  `;

  return (    
    <ButtonStyle>
      {label}
    </ButtonStyle>    
  );
};

export default Button;
