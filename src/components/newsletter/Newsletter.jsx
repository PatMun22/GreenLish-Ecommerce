import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div>
        <h1>Subscribe for Newsletter</h1>
        <p>Stay connected for latest products news</p>
      </div>
      <form>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
