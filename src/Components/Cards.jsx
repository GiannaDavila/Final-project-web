import { Card, List } from 'antd';
import { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import PostItemModal from './PostItemModal';
import FoodList from './FoodList';
import ProgressBar from './ProgressBar';

export default function Cards() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [category, setCategory] = useState()
    const [foods, setFoods] = useState();
    const [toggle, setToggle] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        fetch("https://final-project-api-gd.web.app/food")
            .then((res) => res.json())
            .then((data) => setFoods(data))
            .catch((err) => console.error(err));
    }, [toggle])
    if (!foods) {
        return <h1 style={{ color: "rgba(68, 79, 87, 0.881)" }}>Loading...</h1>
    }
    const BreakfastList = foods?.filter(item => item.category === "Breakfast")
    const LunchList = foods?.filter(item => item.category === "Lunch")
    const DinnerList = foods?.filter(item => item.category === "Dinner")
    const SnackList = foods?.filter(item => item.category === "Snack")

    return (
        <>  {isModalOpen && <PostItemModal
            isModalOpen={isModalOpen}
            setFoods={setFoods}
            category={category}
            setIsModalOpen={setIsModalOpen} />}
            <ProgressBar />
            <div className='mainCardContainer'>
                <div className='cardSet'>
                    <Card
                        title="Breakfast"
                        hoverable
                        actions={[
                            <PlusOutlined key="add"
                                onClick={() => {
                                    setCategory('Breakfast')
                                    showModal()
                                }} />
                        ]}>
                        <List dataSource={BreakfastList} renderItem={(item) => {
                            return (
                                <FoodList food={item} toggle={toggle} setToggle={setToggle} />
                            )
                        }} />
                    </Card>
                </div>
                <div className='cardSet'>
                    <Card
                        title="Lunch"
                        hoverable
                        actions={[
                            <PlusOutlined key="add" onClick={() => {
                                setCategory('Lunch')
                                showModal()
                            }} />
                        ]}>
                        <List dataSource={LunchList} renderItem={(item) => {
                            return (
                                <FoodList food={item} toggle={toggle} setToggle={setToggle} />
                            )
                        }} />
                    </Card>
                </div>
                <div className='cardSet'>
                    <Card
                        title="Dinner"
                        hoverable
                        actions={[
                            <PlusOutlined key="add" onClick={() => {
                                setCategory('Dinner')
                                showModal()
                            }} />,
                        ]}>
                        <List dataSource={DinnerList} renderItem={(item) => {
                            return (
                                <FoodList food={item} toggle={toggle} setToggle={setToggle} />
                            )
                        }} />
                    </Card>
                </div>
                <div className='cardSet'>
                    <Card
                        title="Snack"
                        hoverable
                        actions={[
                            <PlusOutlined key="add" onClick={() => {
                                setCategory('Snack')
                                showModal()
                            }} />
                        ]}>
                        <List dataSource={SnackList} renderItem={(item) => {
                            return (
                                <FoodList food={item} toggle={toggle} setToggle={setToggle} />
                            )
                        }} />
                    </Card>
                </div>
            </div>
        </>
    )
}