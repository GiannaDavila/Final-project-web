import { Tabs } from 'antd';
import Cards from '../Components/Cards';


const Header = () => (
  <Tabs size='large' className='navBar' defaultActiveKey="2">
    <Tabs.TabPane  tab="Home" key="1">
    <>
    <h1>BMR Math (Basal Metobolic Rate)</h1>
    <h3>Women BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age)</h3>
    <h3>Men BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age)</h3>
    <div/> 
    <h1>AMR Math (Active Metabolic Rate)</h1>
    <ul>
    <h3>Sedentary (little or no exercise): AMR = BMR x 1.2</h3>
    <h3>Lightly active (exercise 1-3 days a week): AMR = BMR x 1.375</h3>
    <h3>Moderately active (exercise 3-5 days/week): AMR = BMR x 1.55</h3>
    <h3>Active (exercise 6-7 days/week): AMR = BMR x 1.725</h3>
    <h3>Very active (hard exercise 6-7 days/week): AMR = BMR x 1.9</h3>
    </ul>
    </>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Food" key="2">
      <Cards />
    </Tabs.TabPane>
  </Tabs>
);
export default Header;