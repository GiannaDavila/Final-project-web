import { Modal, Form, Input, Button } from 'antd';


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
        // footer={null} 
        open={isModalOpen} 
        onCancel={handleCancel}
        >
            <Form
                onFinish={handleSubmit}
                wrapperCol={{ span: 14 }}
                >
                    <div className='form'>
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
                </div>
            </Form>
        </Modal>
    )
}
