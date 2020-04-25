import React, { useContext } from 'react';
import LangContext from './langContext';
import { languageOptions } from '../lang'
import { translate } from '../utils/translate';

const LangSelector = () => {
    const langContext = useContext(LangContext);
    const handleLanguageChange = (event) => {
        const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
        langContext.changeLanguage(selectedLanguage);
    };

    return (
        <>
            <select
                onChange={handleLanguageChange}
                value={langContext.language.id}
            >
                {languageOptions.map(item => (
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {item.text}
                    </option>
                ))}
            </select>
            <h2>{translate('aboutMe')}</h2>
        </>
    );
};

export default LangSelector;