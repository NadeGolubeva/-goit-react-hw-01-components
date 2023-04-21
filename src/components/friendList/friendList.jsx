import PropTypes from "prop-types";
import { FriendItem } from "components/friendListItem/friendListItem";
import {ListFriends} from './friendList.styled'
export const FriendList = ({friends}) => {
    return (
        <ListFriends class="friend-list">
            {friends.map(friend => (
                    <FriendItem key={friend.id} friend={friend}/>
            ))}
</ListFriends>) 
}

FriendList.propTypes = {
friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}