import { Modal, Form, Input, Button, InputNumber } from 'antd'


export default function DeleteCard({ isModalOpen, category, setIsModalOpen, setFoods }) {
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = (values) => {
        values.category = category
        fetch('https://final-project-api-gd.web.app/food', {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(() => {
                fetch("https://final-project-api-gd.web.app/food")
                .then(response => response.json())
                .then((data) => setFoods(data)) 
                .catch(err => console.log(err))
            })
            .catch(err => console.error(err))
            setIsModalOpen(false);
    }
 
    
}

// export default function DeleteCard() {
//     const handleCancel = () => {
//         setIsModalOpen(false);
//     };
//     const updateItem = (values) => {
//         values.category = category
//         fetch('https://final-project-api-gd.web.app/food', {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(values)
//         })
//         .then(response => response.json())
//         .then(() => {
//             setIsModalOpen(false)
//         })
//         .catch(err => console.log(err))
//     }
//     return (
//         onFinish={updateItem},
//         onCancel={handleCancel}
//     )
// }
