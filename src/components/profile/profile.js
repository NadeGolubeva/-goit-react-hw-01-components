import PropTypes from 'prop-types';
import {
  Card,
  Description,
  ListStats,
  ImgProfile,
  ItemProfile,
} from '../profile/profile.styled.js';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
      <Description className="description">
        <ImgProfile
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="190"
        />
        <p className="name">{username}</p>

        <p className="tag">@{tag}</p>

        <p className="location">{location}</p>
      </Description>

      <ListStats className="stats">
        <ItemProfile>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </ItemProfile>
        <ItemProfile>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </ItemProfile>
        <ItemProfile>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </ItemProfile>
      </ListStats>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
