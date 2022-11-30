export default function mealCard ({ thisCard }){
    return (
        <div>
            <h3>{thisCard.card}</h3>
                <p>{thisCard.Food}, {thisCard.Protein}, {thisCard.Carbs}, {thisCard.Fats}, {thisCard.Calories}</p>
        </div>
    )
}