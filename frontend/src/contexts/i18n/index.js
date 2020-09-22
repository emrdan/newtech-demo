import React, { useReducer } from "react";
import EN from "./en.json";
import ES from "./es.json";

const translations = {
  en: EN,
  es: ES,
};

const getTranslate = (langCode) => {
  return key => translations[langCode][key] || key;
}

const initialState = {
  langCode: "en",
  translateFn: getTranslate("en")
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LANGUAGE":
        return {
          langCode: action.payload,
          translateFn: getTranslate(action.payload)
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};