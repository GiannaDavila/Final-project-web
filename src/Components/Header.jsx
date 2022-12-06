import { Menu } from 'antd';

const App = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['home']} className="header">
    <Menu.Item key="home">
      Home
    </Menu.Item>
      <Menu.Item key="food">
        Food
      </Menu.Item>
      <Menu.Item key="three" >
        Exercise
      </Menu.Item>
      
  </Menu>
);
export default App;