import { Tabs } from 'antd';
import Cards from '../Components/Cards';

const Header = () => (
  <Tabs defaultActiveKey="2">
  <Tabs.TabPane tab="Home" key="1">

  </Tabs.TabPane>
  <Tabs.TabPane tab="Food" key="2">
  <Cards/>
  </Tabs.TabPane>
</Tabs>
);
export default Header;