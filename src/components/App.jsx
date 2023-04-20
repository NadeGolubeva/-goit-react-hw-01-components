import { Profile } from "./profile/profile";
import user from '../../src/user.json'
import data from '../../src/data.json'
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./statistics/statistics";

export const App = () => {
  return (
    <div
      // style={{
      //   // height: '100vh',
      //   // display: 'flex',
      //   // justifyContent: 'center',
      //   // alignItems: 'center',
      //   // fontSize: 40,
      //   // color: '#010101'
      // }}
    >
      <Profile username={user.username}
      tag ={user.tag}
  location = {user.location}
  avatar = {user.avatar}
  followers = {user.stats.followers}
  views = {user.stats.views}
        likes={user.stats.likes} />
      <Statistics  title="Upload stats" stats={data} />




      <GlobalStyle />
      

    </div>
  );
};
