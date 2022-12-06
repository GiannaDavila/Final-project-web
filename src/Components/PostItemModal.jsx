import { Modal, Form, Input, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom';

export default function PostItemModal({ isModalOpen, category, setIsModalOpen }) {
    const handleCancel = () => {
        setIsModalOpen(false);
      };
    const handleSubmit = (values) => {
        values.category = category
        fetch('https://final-project-api-gd.web.app/food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(values)
            .catch(err => console.error(err))
            setIsModalOpen(false);
    }

    return (
        <Modal title={category+' Nutrition Facts'} 
        open={isModalOpen} 
        onCancel={handleCancel}
        >
            <Form className='form'
                onFinish={handleSubmit}
                wrapperCol={{ span: 14 }}
                >
                    <div className='form'>
                <Form.Item label='Food:' name='food'>
                    <Link to=""/> 
                    <Input />
                </Form.Item>
                <Form.Item label="Protein" name='protein'>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Carbs" name='carbs'>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Fats" name='fats'>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Calories" name='calories'>
                    <InputNumber />
                </Form.Item>
                <Button htmlType='submit' type="primary">Save</Button>
                </div>
            </Form>
        </Modal>
    )
}
