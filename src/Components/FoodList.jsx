import { List } from 'antd'

export default function FoodList({food}) {
    return (
        <List.Item>
            {food.food}, {food.protein},{food.carbs},{food.fats},{food.calories},
        </List.Item>
    )
}
