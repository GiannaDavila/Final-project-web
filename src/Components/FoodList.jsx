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
            <h4>{food.food.charAt(0).toUpperCase()+food.food.slice(1)}</h4>
            <div />
            <h6>Protein:{food.protein}   </h6>
            <div />
            <h6>Carbs:{food.carbs}  </h6>
            <div />
            <h6>Fats:{food.fats}    </h6>
            <div />
            <h6>Cals:{food.calories}    </h6>
            <MinusCircleOutlined onClick={() => deleteCard(food._id, toggle, setToggle)} />
        </List.Item>
    )
}
