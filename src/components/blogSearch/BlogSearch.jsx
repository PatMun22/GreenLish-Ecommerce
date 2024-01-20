import { BiSearch } from "react-icons/bi";
import "./blogSearch.scss";

const BlogSearch = () => {
  return (
    <div className="blog-search">
      <form action="" className="search-blogs">
        <input type="text" placeholder="Search blogs" />
        <button type="submit" className="blog-search-btn">
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;
