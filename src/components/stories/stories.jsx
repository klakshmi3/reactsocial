//import { useContext } from "react";
import "./stories.scss"
//import { AuthContext } from "../../context/authContext"

const Stories = () => {

 // const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Aryen",
      img: "https://images.pexels.com/photos/23193134/pexels-photo-23193134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Jyoti",
      img: "https://images.pexels.com/photos/21839016/pexels-photo-21839016/free-photo-of-woman-with-dyed-white-hair-sitting-with-leg-raised.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Vanni.pr",
      img: "https://images.pexels.com/photos/20441505/pexels-photo-20441505/free-photo-of-crouching-by-wall-woman-in-trench-coat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "PrathamVeer",
      img: "https://images.pexels.com/photos/614115/pexels-photo-614115.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="Stories">
      <div className="story">
          <img src="https://images.pexels.com/photos/26341258/pexels-photo-26341258/free-photo-of-hong-kong-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <span>LakshmiK</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories