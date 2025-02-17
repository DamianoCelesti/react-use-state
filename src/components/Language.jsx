import { useState } from "react";

export default function Language(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="btn btn-primary">
                    {props.language.title}
                </button>
            </h2>
            <div >
                <div className="accordion-body">
                    {props.language.description}
                </div>
            </div>
        </div>
    )
}