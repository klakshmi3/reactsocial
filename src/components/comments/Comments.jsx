import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "“I wasn’t expecting you. I didn’t think that we would end up together. The single most extraordinary thing I’ve ever done with my life is fall in love with you. I’ve never been seen so completely, loved so passionately and protected so fiercely.”",
      name: "LakshmiK",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/26341258/pexels-photo-26341258/free-photo-of-hong-kong-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      desc: "God has sent his only begotten son into the world , that we might live through him.",
      name: "Jyoti",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/21839016/pexels-photo-21839016/free-photo-of-woman-with-dyed-white-hair-sitting-with-leg-raised.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },

    {
      id: 3,
      desc: " “Love does not consist in gazing at each other, but in looking outward together in the same direction.”",
      name: "Vanni.pr",
      userId: 3,
      profilePicture:
        "https://images.pexels.com/photos/20441505/pexels-photo-20441505/free-photo-of-crouching-by-wall-woman-in-trench-coat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;