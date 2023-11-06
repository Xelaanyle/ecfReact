import React from "react";

export default function ConditionalRender({ children, condition }) {

    const lowercaseCondition = condition.toLowerCase();

    if (lowercaseCondition === 'oui') {
        return (
            <div>
                {children.true}
            </div>
        )
    } else if (lowercaseCondition === 'non') {
        return (
            <div>
                {children.false}
            </div>
        )
    } else {
        return (
            null
        )
    }

}