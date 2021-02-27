import styles from "../styles/components/Profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/reinaldo-silva.png" alt="Reinaldo Silva" />
      <div>
        <strong>Reinaldo Silva</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 5
        </p>
      </div>
    </div>
  );
};

export default Profile;
