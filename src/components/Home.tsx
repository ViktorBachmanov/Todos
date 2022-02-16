import React, { useState } from "react";
import logo from "../logoWelbex.png";

export default function Home() {
  const [lang, setLang] = useState("En");

  const toggleLang = () => {
    if (lang === "En") {
      setLang("Ru");
    } else {
      setLang("En");
    }
  };

  return (
    <div className="Description">
      <div onClick={toggleLang} style={{ cursor: "pointer", float: "right" }}>
        {lang}
      </div>

      <img src={logo} alt="logo" className="logo" />

      {lang === "Ru" ? (
        <div>
          <h2 className="header">Описание</h2>

          <article style={{ marginTop: "2rem" }}>
            <p>
              Данное приложение предназначено для работы с пользовательским
              "Todo" списком. Пользователь может добавлять в список новые
              элементы, а также изменять и удалять существующие. Интерфейс
              пользователя включает также панели навигации и пагинации.
            </p>
            <p>
              Приложение написано на языке программирования TypeScript с помощью
              библиотек React, Redux-Toolkit, React-Router и стилизовано
              средствами TailwindCSS framework. Список элементов отображается в
              виде колонок, количество которых зависит от ширины экрана
              устройства. Также имеется возможность выбора светлой / темной
              темы.
            </p>
          </article>
        </div>
      ) : (
        <div>
          <h2 className="header">Description</h2>

          <article style={{ marginTop: "2rem" }}>
            <p>
              This application is designed to operate with the user's "Todo"
              list. The user can add the new elements as well as modify or
              remove the existing ones. Also, the user's interface includes the
              navigation and pagination panels.
            </p>
            <p>
              The application is written in TypeScript programming language
              using the React, Redux-Toolkit, React-Router libraries and
              stylized by means of the TailwindCSS framework. The list of
              elements is presented in the form of columns, the number of which
              depends on the device screen width. Also, it is possible to choose
              the light/dark theme.
            </p>
          </article>
        </div>
      )}
    </div>
  );
}
