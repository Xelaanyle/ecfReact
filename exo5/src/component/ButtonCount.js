import React from "react";

export default function ButtonCount({ increment }) {

    return (
        <div>
            <button onClick={increment}>Press for increment</button>
        </div>

    );
}