
import PropTypes from 'prop-types';
import {Item, Avatar, Name, StatusGreen, StatusGrey} from './FriendListItem.styled'
export const FriendItem = ({ friend: {avatar, name, isOnline, id} }) => {
    return (
        <Item class="item">
            {isOnline ?
                (<StatusGreen class="status">{isOnline}</StatusGreen>
                ) : (<StatusGrey class="status">{isOnline}</StatusGrey>)}
  <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
            <Name class="name">{ name}</Name>
</Item>
    )
}
FriendItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.oneOf(['false', 'true']).isRequired,
    }).isRequired,

}

//     "id": 1137