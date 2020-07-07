import React, {useState} from 'react';
import '../styles.css';

const DataItem = (props) => {
    const [isAwesome, setIsAwesome] = useState(props.mydata.isAwesome);

    const handleChange = () => {
        if (isAwesome) {
            setIsAwesome(false)
        } else if (!isAwesome) {
            setIsAwesome(true)
        }
      }

    return (
        <div>
            <h3>Name: <span className="underline">{props.mydata.name}</span></h3>
            <h5>Favorite Number: <span className="underline">{props.mydata.favNum}</span></h5>
            <h5>Favorite Number (multiplied by three): <span className="underline">{props.mydata.favNum * 3}</span></h5>
            <h5>Are they awesome? <span className="underline">{isAwesome ? "Yes" : "No"}</span></h5>
            <h5>Their favorite shapes: {props.mydata.favShapes.map(item => {
            return ( 
                <li>{item}</li>
            )}
            )}
            </h5>
            <button onClick={handleChange}>Click to change awesome status</button>
        </div>
    )
}

export default DataItem;