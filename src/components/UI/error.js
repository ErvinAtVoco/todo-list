import React from "react";
import Card from "./Card";

const Error = (props) => {
    return(
        <div>
            <Card>
                <h2>{props.title}</h2>
                <div>
                    <p>{props.message}</p>
                </div>
                <button onClick={props.onConfirm}>OK</button>
            </Card>
        </div>
    )
}

export default Error