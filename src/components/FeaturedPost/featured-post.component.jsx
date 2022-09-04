import "./featured-post.styles.scss";

const FeaturedPost = ({ content }) => {
  const { date, heading, glimpse, imgUrl, tags } = content;

  return (
    <div className="mainpost-container">
      <div className="mainpost-image" style={{backgroundImage:`url(${imgUrl})`}}>
        <div className="mainpost-image2">
          <img src={`${imgUrl}`} alt="" />
        </div>
      </div>
      <div className="mainpost-content">
        <p className="content-date">{date}</p>
        <h2 className="content-heading">{`${heading.substr(0, 120)} ${
          heading.length > 120 ? "..." : ""
        }`}</h2>
        <p className="content-glimpse">{glimpse}</p>
        <div className="content-tags">
          <span className="tags">Tags:</span>
          {tags.map((tag) => {
            return (
              <span key={tag} className="tag">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
