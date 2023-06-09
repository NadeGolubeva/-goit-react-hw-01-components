import { Profile } from "./profile/profile";
import user from './profile/user.json'
import data from '../components/statistics/data.json'
import friends from "../components/friendList/friends.json"
import transactions  from "./transactionHistory/transactions.json";
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendList/friendList";
import {TransactionHistory} from './transactionHistory/transactionHistory'

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
        user={user}
      // username={user.username}
      // tag ={user.tag}
      // location = {user.location}
      // avatar = {user.avatar}
      // followers = {user.stats.followers}
      // views = {user.stats.views}
      //   likes={user.stats.likes}
      />
      
      <Statistics title="Upload stats" stats={data} />

<FriendList friends={friends}/>
      <TransactionHistory
        transactions={transactions}
      />

      <GlobalStyle />
      

    </div>
  );
};
