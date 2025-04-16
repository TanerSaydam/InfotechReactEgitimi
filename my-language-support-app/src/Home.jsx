import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("lang"));
    }, []);

    return (
        <>
            <button onClick={() => changeLanguage('en')}>{t("LANGUAGE.EN")}</button>
            <button onClick={() => changeLanguage('tr')}>{t("LANGUAGE.TR")}</button>

            <h1>{t('HELLO_WORLD')}</h1>
        </>
    )
}

export default Home;