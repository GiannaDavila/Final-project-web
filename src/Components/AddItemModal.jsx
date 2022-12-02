import { Modal, Form, Input, Button } from 'antd';


export default function AddItemModal({ isModalOpen, category, setIsModalOpen }) {
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const formSubmit = (value) => {
        //you need to add a category before sending to API.
        //How can you tell which card opened the model? Try useState()....
        return (
            fetch('https://hosting-food-final-project-gd.web.app/food', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
                .then(response => response.json())
                .then(value)
                .catch(err => console.error(err))
                
            })
                .then((response) => console.log("test", response))
        )
    }
    return (
        <Modal title="Nutrition Facts" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                onFinish={formSubmit}
                // initialValues={ {category} }
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal">
                <Form.Item label='Category:' name='category'>
                    <Input defaultValue={category} />
                </Form.Item>
                <Form.Item label='Food:' name='food'>
                    <Input />
                </Form.Item>
                <Form.Item label="Protein" name='protein'>
                    <Input />
                </Form.Item>
                <Form.Item label="Carbs" name='carbs'>
                    <Input />
                </Form.Item>
                <Form.Item label="Fats" name='fats'>
                    <Input />
                </Form.Item>
                <Form.Item label="Calories" name='calories'>
                    <Input />
                </Form.Item>
                <Button htmlType='submit' type="primary">Save</Button>
            </Form>
        </Modal>
    )
}
