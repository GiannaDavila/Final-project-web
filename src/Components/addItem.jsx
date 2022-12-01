import { useState } from "react";

export default function AddItem({ setToggle, toggle }) {
    const [food, setFood] = useState('')
    const [protein, setProtein] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [calories, setCalories] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        //lets check if they entered all the data
        if (!food || !protein || !carbs || !fats || calories) {
            alert('Please enter all feilds!')
            return
        }
        const newItem = { food, protein, carbs, fats, calories, category: "Lunch" }
        fetch('https://hosting-food-final-project-gd.web.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newItem)
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
    }
    return (
        <>
            {/* <section>
            {food.map(item,id) => {
                return(
                    ObjectId
                    )
                }}
        </section> */}
            <section className="add-Item">
                <h3>Add Item</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Food">Food:
                        <input type='text' name='food' required
                            onChange={e => setFood(e.target.value)}
                            value={food} />
                    </label>
                    <br />
                    <label htmlFor="Protein">Protein:
                        <input type='number' name='protein' required
                            onChange={e => setProtein(e.target.value)}
                            value={protein} />
                    </label>
                    <br />
                    <label htmlFor="Carbs">Carbs:
                        <input type='number' name='carbs' required
                            onChange={e => setCarbs(e.target.value)}
                            value={carbs} />
                    </label>
                    <br />
                    <label htmlFor="Fats">Fats:
                        <input type='text' name='fats' required
                            onChange={e => setFats(e.target.value)}
                            value={fats} />
                    </label>
                    <br />
                    <label htmlFor="Calories">Calories:
                        <input type='text' name='calories' required
                            onChange={e => setCalories(e.target.value)}
                            value={calories} />
                    </label>
                    <br />
                </form>
            </section>
        </>
    )
}