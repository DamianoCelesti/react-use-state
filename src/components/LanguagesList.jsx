import Language from './Language.jsx'
import LanguageCard from './LanguageCard.jsx'
import { useState } from "react";

const languages = [
    {
        id: 1,
        title: "HTML",
        description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
    },
    {
        id: 3,
        title: "JavaScript",
        description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
    },
    {
        id: 4,
        title: "Node.js",
        description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
    },
    {
        id: 5,
        title: "Express",
        description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
    },
    {
        id: 6,
        title: "ReactJS",
        description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
    }
];



export default function LanguagesList() {
    const [activeLanguage, setActiveLanguage] = useState(null);
    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-start gap-2">
                {languages.map((language) => (
                    <Language key={language.id} language={language}
                        // controlla se language id è attivo, se activelanguage è uguale all id allora sarà considerato attivo
                        isOpen={activeLanguage === language.id}
                        onToggle={() => setActiveLanguage(language.id)}
                    />

                ))}
            </div>
            <div  >
                {/* non si usa il map perchè mi crea 5 div inutili perchè mi cicla per tutto l array */}
                {languages.map((language) => (
                    <LanguageCard key={language.id} language={language}
                        isOpen={activeLanguage === language.id}
                        onToggle={() => setActiveLanguage(language.description)}
                    />
                ))}
            </div>

        </div>
    )
}