import PropTypes from 'prop-types';
import {
  Card,
  Description,
  ListStats,
  ImgProfile,
  ItemProfile,
  Name, Label, Quntity,
} from './profile.styled.jsx';
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
        <Name className="name">{username}</Name>

        <Name className="tag">@{tag}</Name>

        <Name className="location">{location}</Name>
      </Description>

      <ListStats className="stats">
        <ItemProfile>
          <Label className="label">Followers</Label>
          <Quntity className="quantity">{followers}</Quntity>
        </ItemProfile>
        <ItemProfile>
          <Label className="label">Views</Label>
          <Quntity className="quantity">{views}</Quntity>
        </ItemProfile>
        <ItemProfile>
          <Label className="label">Likes</Label>
          <Quntity className="quantity">{likes}</Quntity>
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
