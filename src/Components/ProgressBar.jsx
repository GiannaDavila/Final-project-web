import React from "react";
import { Progress, Space } from 'antd';


const ProgressBar = () => (
    <Space wrap className="progressBar">
      <div className="progressContainer">
      <Progress type="circle" percent={4} />
      <h1>Protein</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={0} />
      <h1>Carbs</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={100} />
      <h1>Fats</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={100} />
        <h1>Calories</h1>
        </div>
    </Space>
  );
  export default ProgressBar;