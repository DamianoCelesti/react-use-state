export default function LanguageCard(props) {



    return (

        <div>

            {/* <button className={`btn ${props.isOpen ? "btn-warning" : "btn-primary"} `}
                onClick={props.onToggle}
            >
                {props.language.title}
            </button> */}

            <div >
                <div>
                    {props.isOpen && props.language.description}
                </div>
            </div>
        </div>

    )
}