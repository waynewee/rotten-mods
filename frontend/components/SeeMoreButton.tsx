import { CSSProperties } from "react";
import Button from "../components/Button";
import { reviewBlue } from "../styles/colors";

interface SeeMoreButtonProps {
  style?: CSSProperties;
  fetchMoreData: () => void;
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  style,
  fetchMoreData,
}) => {
  return (
    <div style={styles.seeMoreButtonContainer}>
      <Button
        onClick={fetchMoreData}
        style={{ ...styles.seeMoreButton, ...style }}
      >
        See More
      </Button>
    </div>
  );
};

const styles = {
  seeMoreButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  seeMoreButton: {
    backgroundColor: reviewBlue,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: 12,
    borderRadius: 10,
    color: "#fff"
  },
};

export default SeeMoreButton;
