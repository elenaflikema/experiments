import React, { createContext, useState } from 'react';
import { languageOptions, dictionaryList } from '../lang';

const LangContext = createContext({
    language: languageOptions[0],
    dictionary: dictionaryList[languageOptions[0].id]
});

const LangProvider = (props) => {

    const [lang, setLang] = useState(languageOptions[0]);

    const langContextValue = {
        language: lang,
        dictionary: dictionaryList[lang.id],
        changeLanguage: (langId) => {
            setLang(langId);
        }
    };

    return (
        <LangContext.Provider value={langContextValue}>
            {props.children}
        </LangContext.Provider>
    )
};

export { LangProvider };

export default LangContext;