import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

function AppContextApiTask6Example2() {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <LanguageSelector />
    </LanguageContext.Provider>
  );
}

function LanguageSelector() {
  const { language, setLanguage} = useContext(LanguageContext);
  const [inputValue, setInputValue] = useState(language);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleChangeLanguage = () => {
    setLanguage(inputValue);
  }
  return (
    <div>
      <p>Current language: {language}</p>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter Language'
      />
      <button onClick={handleChangeLanguage}>Change Language</button>
    </div>
  );
}

export default AppContextApiTask6Example2;