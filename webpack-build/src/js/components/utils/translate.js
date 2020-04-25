import React, { useContext } from 'react';
import LangContext from "../LangContext/langContext";

export const translate = (key) => {
    const langContext = useContext(LangContext);

    return langContext.dictionary[key];
};
