import { useState } from "react";

export default function NewItem() {
    const [foods, setFoods] = useState();
    useEffect(() => {
        fetch("https://final-project-api-gd.web.app/food")
            .then((res) => res.json())
            .then((data) => setFoods(data))
            .catch((err) => console.error(err));
    }, [])
    return(
        <>
        <div>
            {!foods ? ( 
                <h2>Loading...</h2>
            ):(
                foods.map((food) => {

                })
            )}
        </div>
        </>
    )
};
