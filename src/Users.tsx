import { useState } from "react";
import Navbar from "./components/Navbar/NavBar";
import BirdImage from "./assets/bird.jpg";
import UserDetails from "./components/UserDetails";

interface User {
  name: string;
  email: string;
}

const usersList = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfF5pfAmeOUUMNb0mt8ZTgx5FN74ihWwsv2A&usqp=CAU",
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti nemo maiores ipsum laudantium libero alias eos, dolores, blanditiis dolorem minus incidunt distinctio, id tempore perspiciatis? Fugiat, expedita! Reiciendis, sequi.",
    likes: 10,
    dislikes: 20,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVx6CB56pxO8gwlzLLOkV8fPN0jfF3T_98w&usqp=CAU",
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti nemo maiores ipsum laudantium libero alias eos, dolores, blanditiis dolorem minus incidunt distinctio, id tempore perspiciatis? Fugiat, expedita! Reiciendis, sequi.",
    likes: 100,
    dislikes: 20,
  },
];
const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  };

  const deleteUser = (userName: string) => {
    const filteredUsers = users.filter((user) => user.name !== userName);
    setUsers(filteredUsers);
  };

  const formSubmit = (event: any) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
    };
  };

  return (
    <div style={{ width: "100vw", textAlign: "center", height: "100vh" }}>
      <Navbar />
      {usersList.map((user) => {
        return <UserDetails key={user.title} userData={user} />;
      })}
      {/* <form onSubmit={formSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br></br>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br></br>
        <input type="submit" />
      </form> */}

      {/* <button onClick={fetchUsers}>Fetch data</button>
      <div>
        {users.map((user) => {
          return (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                {user.name} - {user.email}
              </div>
              <button onClick={() => deleteUser(user.name)}>Delete</button>
            </div>
          );
        })}
      </div> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eum,
        rem saepe debitis ipsam aliquam facilis quae inventore, dolorum
        consequatur, provident fuga eius recusandae molestiae similique tempora.
        Omnis, aspernatur! Harum?
      </p>
      <img src={BirdImage} alt="img" height="200px" /> */}
    </div>
  );
};

export default Users;
