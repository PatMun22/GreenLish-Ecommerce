import "./blogComment.scss";

const BlogComments = () => {
  return (
    <div className="blog-comment-container">
      <div className="reader-comments">
        <h1>Comments</h1>
        <div className="comment">
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/14686865/pexels-photo-14686865.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="commenter1"
              loading="lazy"
            />
          </div>
          <div className="comment-details">
            <h4>Robert Kiluki</h4>
            <p className="date">13 Sept. 2023</p>
            <p className="the-comment">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              architecto neque cum perspiciatis ut, dolore aut nesciunt dicta
              aliquam eos?
            </p>
            <button className="reply-btn">Reply</button>
          </div>
        </div>
        <div className="comment">
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/19415783/pexels-photo-19415783/free-photo-of-elegant-man-in-suit-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="commenter2"
              loading="lazy"
            />
          </div>
          <div className="comment-details">
            <h4>Robert Kiluki</h4>
            <p className="date">13 Sept. 2023</p>
            <p className="the-comment">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              architecto neque cum perspiciatis ut, dolore aut nesciunt dicta
              aliquam eos?
            </p>
            <button className="reply-btn">Reply</button>
          </div>
        </div>
        <div className="comment">
          <div className="image-container">
            <img
              src="https://images.pexels.com/photos/9990715/pexels-photo-9990715.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="commenter3"
              loading="lazy"
            />
          </div>
          <div className="comment-details">
            <h4>Robert Kiluki</h4>
            <p className="date">13 Sept. 2023</p>
            <p className="the-comment">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              architecto neque cum perspiciatis ut, dolore aut nesciunt dicta
              aliquam eos?
            </p>
            <button className="reply-btn">Reply</button>
          </div>
        </div>
      </div>
      <div className="comment-input-section">
        <h1>Leave a comment</h1>
        <form action="" className="comments-form">
          <div className="inputs">
            <input type="text" placeholder="Your full name" />
            <input type="text" placeholder="enter your email" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="type your comments..."
          ></textarea>
          <button className="comment-btn">comment</button>
        </form>
      </div>
    </div>
  );
};

export default BlogComments;
