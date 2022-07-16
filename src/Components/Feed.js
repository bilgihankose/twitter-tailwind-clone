import { SparklesIcon } from "@heroicons/react/outline";
import TweetInput from "./TweetInput";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Bilgihan Kose",
      username: "bilgihankose",
      userImage: "https://avatars.githubusercontent.com/u/39279529",
      postImage:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      text: "I'm baby literally heirloom vape, ennui tote bag keffiyeh hella shaman hoodie tousled hammock tbh bushwick cloud bread actually. ",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Bilgihan Kose",
      username: "bilgihankose",
      userImage: "https://avatars.githubusercontent.com/u/39279529",
      postImage:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      text: "Blog heirloom iPhone activated charcoal man braid butcher, YOLO palo santo. ",
      timestamp: "8 hours ago",
    },
    {
      id: "3",
      name: "Bilgihan Kose",
      username: "bilgihankose",
      userImage: "https://avatars.githubusercontent.com/u/39279529",
      postImage:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      text: "Beard ethical health goth, migas kinfolk tousled austin freegan narwhal selvage 8-bit vinyl drinking vinegar. Lo-fi flexitarian bicycle rights prism jianbing pug art party literally bitters.",
      timestamp: "23 hours ago",
    },
  ];
  return (
    <div className="xl:ml-[260px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white justify-between items-center border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <TweetInput />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Feed;
