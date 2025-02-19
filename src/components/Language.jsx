

export default function Language(props) {



    return (


        // {/* se props is open è tre verra aggiunta la classe warning, altrimenti verra aggiunta l altra classe */}
        <button className={`btn ${props.isOpen ? "btn-warning" : "btn-primary"} `}
            // quando si clicca verra invocata questa funzione
            onClick={props.onToggle}
        >
            {props.language.title}
        </button>




    )
}