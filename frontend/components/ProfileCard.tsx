import { User } from "../types";
import Link from "next/link";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



interface ProfileCardProps {
  user: User
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  // const { fullName, studyCourse, yearOfStudy } = user;

  return (
    user.fullName.length == 0 
      ? <div style={styles.userInfoContainer}> 
          <div style={styles.fullName}> Please Log In First</div>
        </div>

      :
         <div style={styles.userInfoContainer}> 
          <div style={styles.fullName}> {user.fullName}</div>
          {user.yearOfStudy 
            ? <div style={styles.study}> Year {user.yearOfStudy} Student </div>
            : null}
          {user.studyCourse
            ? <div style={styles.study}> {user.studyCourse}</div>
            : null}
        </div>  
  );
};

const styles = {
  userInfoContainer: {
    padding: 50,
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
  }
}

export default ProfileCard;
