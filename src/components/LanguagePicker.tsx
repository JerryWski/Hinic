import { languages,  } from '../i18n/ui';
import React from 'react';


const LanguagePickier = () => {
  return (
    <ul>
      {Object.entries(languages).map(([lang, label]) => (
        <li key={lang}>
          <a href={`/${lang}/`}>{label}</a>
        </li>
      ))}
    </ul>
  );
};

export default LanguagePickier;
