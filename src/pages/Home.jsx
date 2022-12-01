import { Card } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import AddItemModal from '../Components/AddItemModal';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [category, setCategory] = useState()
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div style={{ backgroundColor: "gray" }}>
            {isModalOpen && <AddItemModal isModalOpen={isModalOpen} category={category} setIsModalOpen={setIsModalOpen} />}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="site-card-border-less-wrapper" style={{ paddingRight: "60px" }}>
                    <Card
                        title="Breakfast"
                        bordered={false}
                        hoverable
                        style={{
                            width: 650,
                            height: 250,
                        }}
                        actions={[
                            <PlusOutlined key="add" onClick={() => {
                                setCategory('Breakfast')
                                showModal()
                            }} />,
                            <EditOutlined key="edit" />,
                            <DeleteOutlined key="delete" />
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
                            <PlusOutlined key="add" onClick={() => {
                                setCategory('Lunch')
                                showModal()
                            }} />,
                            <EditOutlined key="edit" />,
                            <DeleteOutlined key="delete" />
                        ]}
                    >
                        <p>Card content</p>
                    </Card>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                <div className="site-card-border-less-wrapper" style={{ paddingRight: "60px" }}>
                    <Card
                        title="Dinner"
                        bordered={false}
                        hoverable={true}
                        style={{
                            width: 650,
                            height: 250,
                        }}
                        actions={[
                            <PlusOutlined key="add" onClick={() => {
                                setCategory('Dinner')
                                showModal()
                            }} />,
                            <EditOutlined key="edit" />,
                            <DeleteOutlined key="delete" />
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
                            <PlusOutlined key="add" onClick={() => {
                                setCategory('Snack')
                                showModal()
                            }} />,
                            <EditOutlined key="edit" />,
                            <DeleteOutlined key="delete" />
                        ]}
                    >
                        <p>Card content</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}
