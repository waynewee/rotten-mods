interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <div style={styles.container}>{title}</div>;
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "8vh",
    fontSize: "1.5em",
    color: "#838383",
    fontFamily: "Mukta",
  },
};

export default SectionTitle;
