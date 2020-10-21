interface MetaCompareRowProps {
  title: string,
  firstMeta: string,
  secondMeta: string
}

const MetaCompareRow: React.FC<MetaCompareRowProps> = ({ title, firstMeta, secondMeta }) => {
  return (
    <div style={styles.container}>
      <div style={{
        ...styles.metaContainer,
        borderWidth: "0px 1px 0px 0px",
      }}>
        {firstMeta}
      </div>
      <div style={{
        ...styles.metaContainer,
        borderWidth: "0px 0px 0px 1px",
      }}>
        {secondMeta}
      </div>
      <div style={styles.titleContainer}>
        <div style={styles.title}>
          {title}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    margin: "0px 20px",
    borderStyle: "solid",
    borderWidth: "2px 0px 0px 0px",
    borderColor: "#CFCFCF",
    position: "relative" as "relative"
  },
  metaContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    borderStyle: "solid",
    borderColor: "#CFCFCF",
    fontSize: 20
  },
  titleContainer: {
    position: "absolute" as "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  title: {
    backgroundColor: "#F2A966",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: 10,
    color: "#fff",
    borderRadius: 10,
    width: 200,
    textAlign: "center" as "center"
  }
}

export default MetaCompareRow;