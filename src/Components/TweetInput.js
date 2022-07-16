/* eslint-disable jsx-a11y/img-redundant-alt */
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useState } from "react";

const TweetInput = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://avatars.githubusercontent.com/u/39279529"
        alt="Profile picture"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-500 tracking-wide min-h-[50px] text-gray-500"
            rows="2"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex">
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            disabled={!input.trim()}
            className="bg-blue-400 text-white px-4 py-2 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default TweetInput;
