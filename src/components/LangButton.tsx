import React, { FC, useEffect, useState } from 'react';
import styles from '@/styles/LangButton.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const langs = ['en', 'es', 'pt', 'fr'];

const LangButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(langs[0]);
  const { push, locale } = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (locale) {
      setCurrentLang(locale);
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const toggleLangMenu = () => setIsOpen(!isOpen);

  const handleLangClick = (lang: string) => {
    push('/', '/', { locale: lang });
    setIsOpen(false);
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

        {/* <li>
          <button>
            <b>PT</b>
            <Image src="/images/pt.png" width={30} height={20} alt="pt-flag" />
          </button>
        </li>
        <li>
          <button>
            <b>FR</b>
            <Image src="/images/fr.png" width={30} height={20} alt="fr-flag" />
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default LangButton;
