import { Card, Modal, Button } from 'antd';
import { useState } from 'react';
import AddItem from '../Components/addItem';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';



export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return (
        <div style={{backgroundColor:"royalblue"}}>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Food:</p>
        <p>Protein:</p>
        <p>Fats:</p>
        <p>Carbs:</p>
        <p>Calories:</p>
      </Modal>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="site-card-border-less-wrapper" style={{paddingRight: "60px"}}>
                <Card
                    title="Breakfast"
                    bordered={false}
                    hoverable={true}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add" onClick={showModal}/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper">
                <Card
                    title="Lunch"
                    bordered={false}
                    hoverable={true}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add" onClick={showModal}/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop:"40px"}}>
            <div className="site-card-border-less-wrapper" style={{paddingRight: "60px"}}>
                <Card
                    title="Dinner"
                    bordered={false}
                    hoverable={true}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add" onClick={showModal}/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper">
                <Card
                    title="Snack"
                    bordered={false}
                    hoverable={true}
                    style={{
                        width: 650,
                        height: 250,
                    }}
                    actions={[
                        <PlusOutlined key="add" onClick={showModal}/>,
                       <EditOutlined key="edit" />,
                       <DeleteOutlined key="delete"/>
                    ]}
                >
                    <p>Card content</p>
                </Card>
            </div>
        </div>
        </div>
    )
}