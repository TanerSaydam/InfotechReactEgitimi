# Infotect React Eğitimi

## Documentatin
- [ ] Vite : https://vite.dev/
- [ ] React Router : https://reactrouter.com/
- [ ] Bootstrap : https://getbootstrap.com/
- [ ] Zustand: https://zustand-demo.pmnd.rs/ => State Management için

## i18n Kurulumu
```bash
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

- Dosya adı: i18n.js
```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
```

- İmport edilişi
```js
//main.jsx ya da index.jsx başına eklememiz yeterli
import './i18n';
```

- Örnek Kullanımı
```js
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
```

## 02.05.2025
- Register/Login işlemlerini tamamladık
- Sepet işlemlerini tamamladık
- State Management ile sepete ürün eklendiğinde sepet adedini güncelledik

## 30.04.2025
- Product listesini React'da görüntüledik
- Ana sayfayı tamamen bizim verilerimizden alır hale getirdik
- Kategoriler sayfasını hazırladık
- Products için pagination, sort, ve filter yapısı kurduk

## 28.04.2025
- Backend de Clean Architecture Mimarisi ile eCommerce.Server projesi oluşturduk
- Category Tablosu oluşturduk
- Category'e Seed Data ile veri bastık
- Category listesini React projemizde gösterdik
- Product Tablosu oluşturduk
- Product'a Seed Data ile veri bastık

## 23.04.2025
- eTicaret projemizin .NET Clean Arch ile Backedini yazmaya başlayacağız

## 21.04.2025
- AI ile MVC e Ticaret Projesi oluşturduk
- AI ile e Ticaret HTML CSS tasarımı yaptık
- React projesi oluşturup AI ile oluşturduğumuz eTicaret temasını React projemize giydirdik

## 15.04.2025
- React'a çoklu dil yapısı ekleme

## 14.04.2025
- Router yapısını tekrar ettik
- Layout yapısı ile router nasıl kullanılır onu inceledik
- Günümüz admni panelli projelerin layout yapısını simüle ettik
- Bootstrap gibi external css kütüphanelerini porjeye nasıl dahil edeceğimizi öğrendik
- Boostrap kullanarak örnek bir login sayfası tasarladık
- Login sayfasında form elementi kullanıp artıları ve eksilerinden bahsettim
- Validation kontrolü form elementi ile yaptık
- Giriş esnasında token saklamanın doğru yeri hakkında konuştuk
- Fake veri ile örnek bir giriş yaptık

## 11.04.2025
- Todo projemize Update metodunu hem backend de hem React'da yazdık
- React da if blogu ile nasıl şart yazacağımızı öğrendik
- Yeni component oluşturma
- İç içe component kullanımı (Nested component)
- Props (Componentler arası veri iletimi)
- Router yapısı (React Route ile route yapma)
- Ödev: Parçaladığımız componentlere akarabildiğiniz kadar değişken ve metotları taşıyın. Todo.jsx'de olabildiğince az kod barındırın
- Ödev2: Tekli kontrol için kullanılan ?? veya || arasındaki fark nedir?
- Ödev3: Login, Register, Home, Products, Layout componentleri içeren bir React projesi oluşturun. Ve Bunlar arası geçisi bir link ile yapın. Yani route yapın. Önemli nokta, Login ve Register kendi başına açılmalı, ama Home, Products sayfaları Layout içinde açılmalı

## 09.04.2025
- React frameworkleri nelerdir
- Vite framework ile React app oluşturma
- .NET WebAPI projesi oluşturma
- API ile çalışma (Fetch kullanımı)
- API ile Create, Read, Delete işlemleri yaptık
- Ödev: Update metodunu hem backend de hem React trafında yazın

## 07.04.2025
- React nedir
- İlk React projemizi oluşturalım
- React klasör yapısını inceleyelim
- Component nedir
- İlk componentimizi oluşturalım
- Değişken oluşturma ve use state hook kullanımı
- Değişken değerini yakalama ve set etme
- Eventler