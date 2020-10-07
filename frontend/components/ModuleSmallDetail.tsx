interface ModuleSmallDetailProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  text: string,
  iconStyle: React.CSSProperties
}

const ModuleSmallDetail: React.FC<ModuleSmallDetailProps> = ({ Icon, text, iconStyle }) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <Icon style={{ height: 20, ...iconStyle }} />
      </div>
      <span style={styles.text}>{text}</span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    marginLeft: 40,
    padding: "10px 0px"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    width: 26
  },
  text: {
    marginLeft: 10,
    color: "#838383"
  }
}

export default ModuleSmallDetail;