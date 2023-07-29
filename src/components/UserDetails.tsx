interface User {
  imageUrl: string;
  title: string;
  description: string;
  likes: number;
  dislikes: number;
}
const UserDetails = ({ userData }: { userData: User }) => {
  return (
    <div style={{ width: '300px', backgroundColor: 'green', margin: '10px'}}>
      <img src={userData.imageUrl} height="200px" width="100px" alt="img" />
      <div style={{ fontSize: "10px" }}>{userData.title}</div>
      <div style={{ fontSize: "20px", fontWeight: "600" }}>
        {userData.description}
      </div>
      <div>
        Likes: {userData.likes} Dislikes: {userData.dislikes}
      </div>
    </div>
  );
};

export default UserDetails;
