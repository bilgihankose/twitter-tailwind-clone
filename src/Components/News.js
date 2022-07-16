const News = ({ news }) => {
  return (
    <div>
      <div className="px-4 py-2 space-x-1 hover:cursor-pointer hover:bg-brightness-95 hover:rounded-none ">
        <h6 className="text-xs text-gray-400">
          {news.id} {news.subject}
        </h6>
        <p className="font-bold">{news.hashtag}</p>
        <p className="text-xs text-gray-400">{news.tweetCount}</p>
      </div>
    </div>
  );
};

export default News;
