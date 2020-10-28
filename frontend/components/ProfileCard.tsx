import { User } from "../types";
import Link from "next/link";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import StarOutlinedIcon from "../icons/StarOutlinedIcon";
import { useReducer } from "react";

interface ProfileCardProps {
  user: User
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const { fullName, studyCourse, yearOfStudy } = user;

  return (
    <div style={styles.container}>
      <div style={styles.profileInfoContainer}>
        <div>
          <Avatar size={120} icon={<UserOutlined />} />
        </div>   
        <div style={styles.userInfoContainer}> 
          <div style={styles.fullName}> {fullName}</div>
          <div style={styles.study}> Year {yearOfStudy} Student </div>
          <div style={styles.study}> {studyCourse}</div>
        </div>
      </div>

      {/* <div style={styles.userModuleInfoContainer}> 
          <div style={styles.moduleInfo}> Modules Reviewed: {modulesReviewed}</div>
          <div style={styles.moduleInfo}> Modules Taken: {modulesTaken}</div>
      </div> */}
      
    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    backgroundColor: "#223370",
    margin: "15px 0px",
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginBottom: 15,
    display: "flex",
    alignContent: "flex-start",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profileInfoContainer: {
    display: "flex",
    alignItems: "center",
  },
  userInfoContainer: {
    marginLeft: 30
  },
  userModuleInfoContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    marginRight: 40,
    fontSize: 20,
  },
  study: {
    fontStyle: "italic"
  },
  fullName: {
    fontSize: 30,
    fontWeight: "bold" as "bold"
  },
  moduleInfo: {
    fontSize: 15,
    textAlign: "center" as "center"
  }
}

export default ProfileCard;
