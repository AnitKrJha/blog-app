import FeaturedPost from "../../components/FeaturedPost/featured-post.component";
import "./home.styles.scss";

const FeaturedPostContent = {
  date: "21 March,2022",
  heading:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate error voluptas laudantium ratione ea, facere consequuntur quia! Doloremque velit amet ullam iusto eligendi omnis doloribus!",
  glimpse:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vitae velit corrupti quam vel iure laboriosam ducimus earum odit et veritatis, laudantium accusamus enim reprehenderit. In numquam non ea deserunt inventore, aut corporis facilis, nemo velit ipsum deleniti quod corrupti autem quae ipsa. Repellat explicabo quae magnam ipsa molestiae minus?",
  tags: ["Tag1", "Tag2"],
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Cornwall_Daffodils.jpg",
};

const Home = () => {
  return (
    <div className="main-content">
      <h1>
        <span className="latest-heading">
          Latest Post.
          <div className="heading-underline"></div>
        </span>
      </h1>

      <FeaturedPost content={FeaturedPostContent} />

      

    </div>
  );
};

export default Home;
