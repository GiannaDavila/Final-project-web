import React from "react";
import { Progress, Space } from 'antd';


const ProgressBar = ({totalProtein, totalCarbs, totalFats, totalCalories}) => (
    <Space wrap className="progressBar" >
      <div className="progressContainer">
      <Progress id="hello" type="circle" percent={(100 * totalProtein) / 88} format={()=> totalProtein+"g"}
       strokeColor={{
        '0%': 'orange',
        '100%': 'red',
      }} />
      <h1>Protein</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={(100 * totalCarbs/ 192)} format={()=> totalCarbs+"g"} 
       strokeColor={{
        '0%': 'orange',
        '100%': 'red',
      }}/>
      <h1>Carbs</h1>
      </div>
      <div className="progressContainer">
      <Progress 
      className="progressG" type="circle" percent={ (100 * totalFats/ 38)} format={()=> totalFats+"g"} 
       strokeColor={{
        '0%': 'orange',
        '100%': 'red',
      }}/>
      <h1>Fats</h1>
      </div>
      <div className="progressContainer">
      <Progress type="circle" percent={(100 * totalCalories/ 1440)} format={()=> totalCalories+"cals"} 
       strokeColor={{
        '0%': 'orange',
        '100%': 'red',
      }}/>
        <h1>Calories</h1>
        </div>
    </Space>
  );
  export default ProgressBar;