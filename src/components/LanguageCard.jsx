export default function LanguageCard(props) {



    return (
        <div>
            {props.activeLanguage && props.activeLanguage.description}
        </div>
    )
}