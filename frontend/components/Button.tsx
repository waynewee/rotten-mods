interface ButtonProps {
  onClick: () => void,
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style = {} }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer", ...style }}>
      {children}
    </div>
  )
}

export default Button;