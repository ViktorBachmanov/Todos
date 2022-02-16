import React from "react";

export default function Home() {
  return (
    <div className="Description">
      <h2 className="header">Description</h2>

      <article style={{ marginTop: "2rem" }}>
        <p>
          Данное приложение предназначено для работы с пользовательским "Todo"
          списком. Пользователь может добавлять в список новые элементы, а также
          изменять и удалять существующие. Интерфейс польователя включает также
          панели навигации и пагинации (pagination).
        </p>
        <p>
          Приложение написано на языке программирования Typescript с помощью
          библиотек React, Redux-Toolkit, React-Router и стилизовано средствами
          TailwindCSS framework. Список элементов отображается в виде колонок,
          количество которых зависит от ширины экрана устройства. Также имеется
          возможность выбора светлой / темной темы.
        </p>
      </article>
    </div>
  );
}
