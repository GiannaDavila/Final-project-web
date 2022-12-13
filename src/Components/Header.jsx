import { Tabs, Card } from 'antd';
import Cards from './Cards';


const Header = () => (
  <Tabs size='large' className='navBar' defaultActiveKey="1">
    <Tabs.TabPane className='tabs' tab="Home" key="1">
      <Cards />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Info" key="2">
    <Card style={{ flex: "wrap", color: "Black" }}>
      <ul>What are Macronutrients?</ul>
      <ol>
      <h4>Macronutrients are the nutrients we need in larger quantities that provide us with energy: in other words, fat, protein and carbohydrate.</h4>
    <li>Why do you need Protein to build muscle?</li>
        <h4>Protein is extremely important in building muscle because the amino acids help repair and maintain muscle tissue. After a workout, protein helps you recover from workouts because muscles slightly tear during exercise.</h4>
    <li>Why do you need Carbs(Carbohydrates) to build muscle?</li>
        <h4>Carbs are important protein sparing, which means the body looks to glycogen for energy instead of breaking down muscle tissue for energy. Consuming carbs post-workout can prevent muscle loss and help repair muscles.</h4>
    <li>Why do you need Fats to build muscle?</li>
        <h4>The fats in your diet—monounsaturated and polyunsaturated fats—increase levels of HDL, the good cholesterol. HDL leads to increased production of growth hormone, which in turn triggers more amino acids. These building blocks of protein are essential for building muscle tissue.</h4>
    <li>Why do you need Calories to build muscle?</li>
        <h4>You need to supply the body with fuel that the body will then use to generate that new lean muscle mass tissue.</h4>
      </ol>
        <ul>
          <h3>BMR Math (Basal Metobolic Rate)</h3>
        </ul>
        <ul>
          <li>Women BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age)</li>
          <li>Men BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age)</li>
        </ul>
        <ul>
          <h3>AMR Math (Active Metabolic Rate)</h3>
        </ul>
        <ul>
          <li>Sedentary (little or no exercise): AMR = BMR x 1.2</li>
          <li>Lightly active (exercise 1-3 days a week): AMR = BMR x 1.375</li>
          <li>Moderately active (exercise 3-5 days/week): AMR = BMR x 1.55</li>
          <li>Active (exercise 6-7 days/week): AMR = BMR x 1.725</li>
          <li>Very active (hard exercise 6-7 days/week): AMR = BMR x 1.9</li>
        </ul>
  </Card>
    </Tabs.TabPane>
    {/* <Tabs.TabPane tab="Info" key="3">
    </Tabs.TabPane> */}
  </Tabs>
);
export default Header;