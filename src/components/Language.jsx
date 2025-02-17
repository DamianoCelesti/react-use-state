import { useState } from "react";

export default function Language(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className={`btn ${isOpen ? "btn-warning" : "btn-primary"} `}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {props.language.title}
                </button>
            </h2>
            <div >
                <div className="accordion-body">
                    {isOpen && props.language.description}
                </div>
            </div>
        </div>
    )
}