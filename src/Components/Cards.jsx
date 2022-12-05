import { Card, List} from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import PostItemModal from './PostItemModal';
import FoodList from './FoodList';

export default function Cards() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [category, setCategory] = useState()
    const [foods, setFoods] = useState();
    const showModal = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        fetch("https://final-project-api-gd.web.app/food")
            .then((res) => res.json())
            .then((data) => setFoods(data))
            .catch((err) => console.error(err));
    }, [])
    if (!foods) {
        return <h1>Loading...</h1>
    }
    const BreakfastList = foods?.filter(item => item.category === "Breakfast")
    const LunchList = foods?.filter(item => item.category === "Lunch")
    const DinnerList = foods?.filter(item => item.category === "Dinner")
    const SnackList = foods?.filter(item => item.category === "Snack")

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
                    <List dataSource={BreakfastList} renderItem={(item) => {
                        return (
                        <FoodList food={item}/> 
                        )
                        
                    }} />
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
                    <List dataSource={LunchList} renderItem={(item) => {
                        return (
                            <FoodList food={item}/> 
                            )
                    }} />
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
                    <List dataSource={DinnerList} renderItem={(item) => {
                        return (
                            <FoodList food={item}/> 
                            )
                    }} />
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
                    <List dataSource={SnackList} renderItem={(item) => {
                        return (
                            <FoodList food={item}/> 
                            )
                    }} />
                </Card>
            </div>
        </>
    )
}
