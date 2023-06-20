import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from '@/styles/LangButton.module.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const langs = ['en', 'es', 'pt', 'fr'];

const LangButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(langs[0]);
  const { i18n } = useTranslation();

  const toggleLangMenu = () => setIsOpen(!isOpen);

  const setLang = useCallback(
    (lang: string) => {
      setCurrentLang(lang);
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      setLang(savedLang);
    } else {
      const userLang = navigator.language.split('-')[0];

      if (langs.includes(userLang)) {
        setLang(userLang);
      }
    }
  }, [setLang]);

  const handleLangClick = (lang: string) => {
    setIsOpen(false);
    setLang(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className={styles.langButtonContainer}>
      <button
        onClick={toggleLangMenu}
        className={`${isOpen ? styles.openButton : ''}`}
      >
        <b>{currentLang.toUpperCase()}</b>
        <Image
          src={`/images/${currentLang}.png`}
          width={30}
          height={20}
          alt={`${currentLang}-flag`}
        />
      </button>
      <ul className={`${styles.langOptions} ${isOpen ? styles.openMenu : ''}`}>
        {langs
          .filter(l => l !== currentLang)
          .map(lang => (
            <li key={lang}>
              <button onClick={_ => handleLangClick(lang)}>
                <b>{lang.toUpperCase()}</b>
                <Image
                  src={`/images/${lang}.png`}
                  width={30}
                  height={20}
                  alt={`${lang}-flag`}
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LangButton;
