import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.items}>
          <span
            className={`${styles.status} ${
              friend.isOnline ? styles.online : styles.offline
            }`}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
          />
          <span className={styles.name}>{friend.name}</span>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default FriendList;
