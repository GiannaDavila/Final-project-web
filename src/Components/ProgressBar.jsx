import React from "react";
import { Progress, Space } from 'antd';


const ProgressBar = ({totalProtein, totalCarbs, totalFats, totalCalories}) => (
    <Space wrap className="progressBar">
      <div className="progressContainer">
      <Progress type="circle" percent={(100 * totalProtein/ 83)} format={()=> totalProtein+"g"} />
      <h1>Protein</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={(100 * totalCarbs/ 182)} format={()=> totalCarbs+"g"} />
      <h1>Carbs</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={(100 * totalFats/ 39)} format={()=> totalFats+"g"} />
      <h1>Fats</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={(100 * totalCalories/ 1,368)} format={()=> totalCalories+"cals"} />
        <h1>Calories</h1>
        </div>
    </Space>
  );
  export default ProgressBar;