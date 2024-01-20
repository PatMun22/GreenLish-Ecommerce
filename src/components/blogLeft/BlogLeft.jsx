import BlogSearch from "../blogSearch/BlogSearch";
import BlogSocials from "../blogSocials/BlogSocials";
import CategoriesBox from "../categoriesBox/CategoriesBox";
import Cook from "../cook/Cook";
import RecentPosts from "../reecentPosts/RecentPosts";
import "./blogLeft.scss";

const BlogLeft = () => {
  return (
    <div className="blog-left">
      <div className="left-blog-box box1">
        <BlogSearch />
      </div>
      <div className="left-blog-box box2">
        <BlogSocials />
      </div>
      <div className="left-blog-box box3">
        <CategoriesBox />
      </div>
      <div className="left-blog-box box4">
        <RecentPosts />
      </div>
      <div className="left-blog-box box4">
        <Cook />
      </div>
    </div>
  );
};

export default BlogLeft;
