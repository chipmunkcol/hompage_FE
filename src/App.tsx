import axios from "axios";
import React from "react";
import "./pages/main/main.css";
import land from "./images/land.png";
import bridges from "./images/bridges.png";
import dams from "./images/dams.png";
import buildings from "./images/buildings.png";

function App() {
  const API_test = () => {
    axios
      .get(process.env.REACT_APP_SERVER_PATH + "api")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    API_test();
  }, []);

  return (
    <div>
      {/* background 전체 image 100vh */}
      <div className="slider-image">
        {/* header 컴포넌트 */}
        <div className="header">
          <div className="header-logo">
            <i className="logo" />
          </div>
          <div className="header-nav">NEWS</div>
          <div className="header-nav">회사소개</div>
          <div className="header-nav">사업소개</div>
          <div className="header-nav">솔루션</div>
          <div className="header-nav">고객지원</div>
        </div>

        {/* title 컴포넌트 */}
        <div className="title">
          세상에 없던 <br />
          지도제작, AI 솔루션 제공 <br />
          함께하기 {">"}
        </div>
      </div>

      {/* product 컴포넌트 (land / safety 등) */}
      <div className="product-container">
        <div className="product-title">Ko-mapper PRODUCT</div>
        {/* product image 컴포넌트 */}
        <div className="image-container">
          <div className="land-container">
            <div className="land-box">
              <img src={land} width={240} height={296} />
            </div>
          </div>

          <div className="safety-box">
            <img src={bridges} width={240} height={296} />
            <span>BRIDGES</span>
          </div>
          <div className="safety-box">
            <img src={dams} width={240} height={296} />
            <span>DAMS</span>
          </div>
          <div className="safety-box">
            <img src={buildings} width={240} height={296} />
            <span>BUILDINGS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
