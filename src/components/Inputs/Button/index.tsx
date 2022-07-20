import SendEmail from '../../../../pages/api/SendEmail';
import ButtonStyle from './styled';

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

  const handleClick = () => {
    if (disabled) return;
    props.onClick;
    SendEmail('milamoser@gmail.com', 'lucasrgs17@gmail.com');
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
