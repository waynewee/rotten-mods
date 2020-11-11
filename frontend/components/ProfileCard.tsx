import { User } from "../types";
import { Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import EditProfileModal from "./EditProfileModal";





const ProfileCard: React.FC = () => {
  const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);
  
  const toggleEditProfileModal = () => {
    setEditProfileModalVisible(!editProfileModalVisible);
    console.log(editProfileModalVisible);
  }


  return (
    user
      ? <div style={styles.userInfoContainer}> 
      <div style={styles.fullName}> {user.fullName}</div>
      {user.yearOfStudy 
        ? <div style={styles.study}> Year {user.yearOfStudy} Student </div>
        : null}
      {user.courseName
        ? <div style={styles.study}> {user.courseName}</div>
        : null}
      {user.schoolName
        ? <div style={styles.study}> {user.schoolName}</div>
        : null}  
      <div style={styles.editProfileButton}>
      <Button onClick={toggleEditProfileModal}>
        Edit Profile
      </Button>
      </div>
      {
        editProfileModalVisible 
          ? <EditProfileModal toggleEditProfileModal={toggleEditProfileModal} user={user}/>
          : null 
      }

    </div> 

      : 
        <div style={styles.userInfoContainer}> 
          <div style={styles.fullName}> Please Log In First</div>
        </div>
  );
};

const styles = {
  userInfoContainer: {
    padding: 50,
    paddingBottom: 30
  },
  study: {
    fontStyle: "italic",
    textAlign: "center" as "center",
  },
  fullName: {
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold" as "bold",
    textAlign: "center" as "center",
  },
  moduleInfo: {
    fontSize: 15,
    textAlign: "center" as "center",
  },
  editProfileButton: {
    marginTop: "20px",
    textAlign: "center" as "center",
  }
}

export default ProfileCard;
