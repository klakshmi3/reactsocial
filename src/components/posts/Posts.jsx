
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [

    {
      id: 1,
      name: "LakshmiK",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/26341258/pexels-photo-26341258/free-photo-of-hong-kong-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "pure bliss",
      img: "https://images.pexels.com/photos/26341258/pexels-photo-26341258/free-photo-of-hong-kong-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },



    {
      id: 2,
      name: "Aryen",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/23193134/pexels-photo-23193134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "Let my love like sunlight surround you and yet give you illumined freedom",
      img: "https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Kinjal",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/18238100/pexels-photo-18238100/free-photo-of-a-woman-holding-a-girl-sitting-on-railings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "He is obliged to compensate the pain of the pleasures of the thing with the pleasure of convenience, for the pleasures are the laborious consequences of ours! You don't get bigger than that in the smallest amount of time.",
    },

    {
        id: 4,
        name: "Chetan",
        userId: 4,
        profilePic:
          "https://images.pexels.com/photos/14681649/pexels-photo-14681649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "I like wildflowers; you must allow yourself to grow in all the places people thought you never would.",
        img: "https://images.pexels.com/photos/7003468/pexels-photo-7003468.jpeg?auto=compress&cs=tinysrgb&w=600"
      },

      {
        id: 5,
        name: "Anupriya",
        userId: 5,
        profilePic:
          "https://images.pexels.com/photos/26346188/pexels-photo-26346188/free-photo-of-hong-kong-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        
        img: "https://images.pexels.com/photos/26341264/pexels-photo-26341264/free-photo-of-hong-kong-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      },

      {
        id: 6,
        name: "Rishabh",
        userId: 6,
        profilePic:
          "https://images.pexels.com/photos/9220184/pexels-photo-9220184.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadno",
        
        img: "https://images.pexels.com/photos/26352708/pexels-photo-26352708/free-photo-of-a-narrow-alleyway-with-a-sign-for-a-pizza-shop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      },

      
  ];

  return (
  <div className="posts">
  {posts.map(post=>(
    <Post post={post} key={post.id}/>
  ))}
</div>
  );
};



export default Posts;