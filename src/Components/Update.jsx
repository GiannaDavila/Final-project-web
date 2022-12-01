import { useState } from 'react'

export default function UpdateCard ({ setToggle, toggle}) {
    const [food, setFood] = useState('')
    const [protein, setProtein] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [calories, setCalories] = useState('')
    const hanldeSubmit = (e) => {
        e.preventDefault()
        return (   
    }
    const updateItem = { food, protein, carbs, fats, calories }
        fetch('https://hosting-food-final-project-gd.web.app',{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        .then(() => {
            setToggle(!toggle)
            setFood('')
            setProtein('')
            setCarbs('')
            setFats('')
            setCalories('')
        })
        .catch(alert)
        return(
        )
        )
}