

export default function UpdateCard() {
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const updateItem = (values) => {
        values.category = category
        fetch('https://final-project-api-gd.web.app/food', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(() => {
            setIsModalOpen(false)
        })
        .catch(err => console.log(err))
    }
    return (
        onFinish={updateItem},
        onCancel={handleCancel}
    )
}