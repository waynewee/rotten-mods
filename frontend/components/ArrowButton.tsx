import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface ArrowButtonProps {
  direction: "left" | "right",
  onClick: () => void
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <button style={styles.container} onClick={onClick}>
      {direction === "left" ? <LeftOutlined style={styles.icon} /> : <RightOutlined style={styles.icon} />}
    </button>
  )
}

const styles = {
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    border: 0,
    backgroundColor: "#fff",
    outline: 0
  },
  icon: {
    color: "#BEBEBE",
    fontSize: 20
  }
}

export default ArrowButton;