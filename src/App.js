import "./App.css";
import profile_pic from "./images/my_image.jpg";
import doc_vector from "./images/dot-Vector.svg"
import icon_git from "./images/Icon-git.svg"
import i4G from "./images/I4G.svg"
import icon_slack from "./images/icon-slack.svg"
import zuri from "./images/zuri.svg"

function App() {
  return (
    <div>
        <div className="container">
          <main className="inner-container">
            <img src={profile_pic} alt="profile image" id="profile_img" />
            <h2 id="twitter">ChidezOk</h2>
            <h2 id="slack" hidden>ChideraOk</h2>
            <a href="https://twitter.com/ChidezOk/" id="twitter_link">
              <p> Twitter Link </p>
            </a>
            <a href="https://training.zuri.team/" id="btn_zuri">
              <p> Zuri Team </p>
            </a>
            <a href="http://books.zuri.team/" id="books">
              <p> Zuri Books </p>
            </a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=ChideraOk" id="book_python">
              <p> Python Books </p>
            </a>
            <a href="https://background.zuri.team/" id="pitch">
              <p> Background Check For Coders </p>
            </a>
            <a href="https://books.zuri.team/design-rules" id="book__design">
              <p>
                Design Books
              </p>
            </a>
            <div className="social">
              <img src={icon_slack} alt="slack icon" />
              <img src={icon_git} alt="github icon" />
            </div>
          </main>
        </div>
        <footer>
          <div className="zuri-logo">
            <img src={zuri} alt="zuri icon" id="writeup" />
            <img src={doc_vector} alt="dot vector" id="dot" />
          </div>
          <p id="hng">HNG Internship 9 Frontend Task</p>
          <img src={i4G} alt="hng icon" />
        </footer>
      </div>
    );
}

export default App;
