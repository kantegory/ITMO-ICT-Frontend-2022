# Отчет по проекту
> Рейнгеверц В.А. - K33401

## Предметная область: [Bookord](https://github.com/LiprikON2/bookord)

Библиотека
![ViOQXaO.png](https://i.imgur.com/ViOQXaO.png)

Чтение
![pjJ3Oka.png](https://i.imgur.com/pjJ3Oka.png)

Настройки
![FUDkWuu.png](https://i.imgur.com/FUDkWuu.png)

Продвинутые настройки
![STWbTjD.png](https://i.imgur.com/STWbTjD.png)


**Bookord** – это многофункциональное приложение для чтения книг с открытым исходным кодом для ПК. У него интуитивный интерфейс и множество полезных функций, позволяющих сделать чтение электронных книг более удобным.

С **Bookord** можно читать любые книги с компьютера, не беспокоясь о том, что можно потерять страницу на которой остановились, и не носить с собой физическую книгу.

С помощью данного приложения можно читать, аннотировать, выделять, организовывать свою библиотеку, пользоваться продвинутыми опциями преобразования текста в речь, персонализировать интерфейс и многое другое!

## Основные библиотеки и фреймворки
> Основанно на шаблоне:
>  [reZach/secure-electron-template | GitHub](https://github.com/reZach/secure-electron-template)

- Electron
- React
    - [Mantine](https://mantine.dev/) (UI библиотека)
    - [tabler-icons-react](https://tabler-icons-react.vercel.app/) (SVG иконки)
- [tinycolor2](https://github.com/bgrins/TinyColor) (для 'математики' с цветами)

## Возможности

### IPC & API

#### Inter-process communication
Коммуникация между electron backend'ом (**main proccess**) и frontend'ом (**renderer process**) осуществляется с помощью межпроцессного взаимодействия (**IPC**). 

Чтобы не раскрывать все методы из `ipcRenderer` полностью, используется скрипт-посредник (**preload**).

![rtBHX1F.png](https://i.imgur.com/rtBHX1F.png)

##### Пример: удаление книги из библиотеки

**main** – `app/electron/main.js`:
![lLuJaqO.png](https://i.imgur.com/lLuJaqO.png)


**preload** – `app/electron/preload.js`:
![E00oV5g.png](https://i.imgur.com/E00oV5g.png)


**renderer** – `app/src/pages/library/LibraryListCard.jsx`:
![h5I42Ol.png](https://i.imgur.com/h5I42Ol.png)


#### Deepl translation API
Используя API ключ от DeepL Translator, делается запрос с выделеным текстом, а в ответ Deepl отправляет уже переведенный текст

> Отображение tooltip'a пока не доделано

![Cm0FRL7.gif](https://i.imgur.com/Cm0FRL7.gif)
> [Ссылка на gif](https://i.imgur.com/Cm0FRL7.gif)

Из `app/src/pages/read/ReadContextMenu.jsx`:
![RLecVV5.png](https://i.imgur.com/RLecVV5.png)


### Доступность

#### Навигация всего приложения с помощью клавиатуры
![mvgr0pX.gif](https://i.imgur.com/mvgr0pX.gif)
>[Ссылка на gif](https://i.imgur.com/mvgr0pX.gif)

#### HTML структура

Используются семантические HTML теги: верхняя часть страницы – `header`; панель навигации под ней – `nav`; основная часть – `main`, внутри которого `section`, c оглавлениями `h1`, `h2`...

![TGRLuki.gif](https://i.imgur.com/TGRLuki.gif)
>[Ссылка на gif](https://i.imgur.com/TGRLuki.gif)


#### Адаптивность

![0dZXw7q.gif](https://i.imgur.com/0dZXw7q.gif)
>[Ссылка на gif](https://i.imgur.com/0dZXw7q.gif)

#### Text-To-Speech
> Пока не реализовано


### Иконки

#### Использование `tablers-icon-react`

Панель навигации
![ufVE5kf.png](https://i.imgur.com/ufVE5kf.png)

Из `app/src/core/Navbar.jsx`:
![H1B51am.png](https://i.imgur.com/H1B51am.png)

### Темизация

Умный color picker автоматичеки подбирает подцвета не лишая, при этом, возможности тонко настроить их вручную.


#### Цвет акцента
![vyMsUCg.gif](https://i.imgur.com/vyMsUCg.gif)
> [Ссылка на gif](https://i.imgur.com/vyMsUCg.gif)

#### Главные и вторстепенные цвета
![YpPjxk1.gif](https://i.imgur.com/YpPjxk1.gif)
> [Ссылка на gif](https://i.imgur.com/YpPjxk1.gif)

#### Реализация: изменение цвета
Все цвета находятся в CSS переменных и они меняются за счет метода [CSSStyleDeclaration.setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

![7TPShav.gif](https://i.imgur.com/7TPShav.gif)
>[Ссылка на gif](https://i.imgur.com/7TPShav.gif)

Из `app/src/pages/library/LibraryListCard.css`:
![GhZpPbO.png](https://i.imgur.com/GhZpPbO.png)


Из `app/src/utils/cssColors.js` функция `updateCssVar`:
![qm8LabA.png](https://i.imgur.com/qm8LabA.png)
> 

#### Реализация: подбор подцвета
Из `app/src/pages/settings/SettingsSections.jsx` функция `updateSettings`:
![EJLDTVJ.png](https://i.imgur.com/EJLDTVJ.png)
Изменение подцветов

Из `app/src/constants/defaultSettings.json`:
![OihbcQi.png](https://i.imgur.com/OihbcQi.png)
Параметры `h`, `s`, `l` для подцветов, описывающие их отличие от их родительного цвета