import { Profile } from "./profile/profile";
import user from './profile/user.json'
import data from '../components/statistics/data.json'
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./statistics/statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 40,
        padding: '20px',
        color: '#010101'
      }}
    >

      <Profile
        
      username={user.username}
      tag ={user.tag}
      location = {user.location}
      avatar = {user.avatar}
      followers = {user.stats.followers}
      views = {user.stats.views}
        likes={user.stats.likes}
      />
      
      <Statistics title="Upload stats" stats={data} />




      <GlobalStyle />
      

    </div>
  );
};
