import "./topBox.scss";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";

interface User {
  id: number;
  username: string;
  email: string;
  amount: number;
  img: string; // Assuming that 'img' is a URL to the user's image
}

const TopBox = () => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUser(res.data);
      } catch (error) {}
    };
    getUsers();
  }, []);

  return (
    <div className="topBox" key="topBox"> {/* Add key prop here */}
      <h1>Top Deals</h1>
      <div className="list">
        {users.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">₹{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
