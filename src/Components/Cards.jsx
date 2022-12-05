import { Card} from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import PostItemModal from './PostItemModal';


export default function Cards() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [category, setCategory] = useState()
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <>  {isModalOpen && <PostItemModal
            isModalOpen={isModalOpen}
            category={category}
            setIsModalOpen={setIsModalOpen} />}
            <div className="cards">
                <Card
                    title="Breakfast"
                    hoverable
                    actions={[
                        <PlusOutlined key="add" 
                        onClick={() => {
                            setCategory('Breakfast')
                            showModal()
                        }} />,
                        <EditOutlined key="edit"/>,
                        <DeleteOutlined key="delete" />
                    ]}
                >
                    <p>words</p>
                </Card>
                <Card
                    title="Lunch"
                    hoverable
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
                <Card
                    title="Dinner"
                    hoverable
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
                <Card
                    title="Snack"
                    hoverable
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
        </>
    )
}
