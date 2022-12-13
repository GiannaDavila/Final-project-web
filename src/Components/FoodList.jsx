import { List } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function FoodList({ food, toggle, setToggle }) {
    const navigate = useNavigate();

    function deleteCard(id, toggle, setToggle) {
        fetch('https://final-project-api-gd.web.app/food/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => setToggle(!toggle))
            .then(navigate("/"))
            .catch(console.error)
    }

    return (
        <List.Item>
            <h3>{food.food.charAt(0).toUpperCase()+food.food.slice(1)}</h3>
            <div />
            <h4>Protein:{food.protein}   </h4>
            <div />
            <h4>Carbs:{food.carbs}  </h4>
            <div />
            <h4>Fats:{food.fats}    </h4>
            <div />
            <h4>Cals:{food.calories}    </h4>
            <MinusCircleOutlined onClick={() => deleteCard(food._id, toggle, setToggle)} />
        </List.Item>
    )
}
