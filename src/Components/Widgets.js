import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";

const newsData = [
  {
    id: "1",
    subject: "· Trending",
    hashtag: "#BilgihanKose",
    tweetCount: "1.2M Tweets",
  },
  {
    id: "2",
    subject: "· Trending",
    hashtag: "#JavaScript",
    tweetCount: "1M Tweets",
  },
  {
    id: "3",
    subject: "· Trending",
    hashtag: "#TypeScript",
    tweetCount: "900K Tweets",
  },
  {
    id: "4",
    subject: "· Trending",
    hashtag: "#React",
    tweetCount: "742K Tweets",
  },
  {
    id: "5",
    subject: "· Trending",
    hashtag: "#CSS",
    tweetCount: "522K Tweets",
  },
  {
    id: "6",
    subject: "· Trending",
    hashtag: "#ResponsiveWebDesign",
    tweetCount: "512K Tweets",
  },
  {
    id: "7",
    subject: "· Trending",
    hashtag: "#Tailwind",
    tweetCount: "421K Tweets",
  },
  {
    id: "8",
    subject: "· Trending",
    hashtag: "#Next.js",
    tweetCount: "363K Tweets",
  },
  {
    id: "9",
    subject: "· Trending",
    hashtag: "#Bootstrap",
    tweetCount: "262K Tweets",
  },
  {
    id: "10",
    subject: "· Trending",
    hashtag: "#Git",
    tweetCount: "191K Tweets",
  },
];
const Widgets = () => {
  const [newsNumber, setNewsNumber] = useState(3);
  return (
    <div className="lg:w-[600px] hidden lg:inline ml-7 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-2 z-50">
        <div className="flex items-center p-3 rounded-full relative ">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      {/* trends */}
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">World trends</h4>
        {newsData.slice(0, newsNumber).map((news) => (
          <News key={news.id} news={news} />
        ))}
        <button
          onClick={() => setNewsNumber(newsNumber + 3)}
          className="text-sky-500 px-4 py-2 hover:bg-gray-200 hover:rounded-bl hover:rounded-br w-[100%]"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
