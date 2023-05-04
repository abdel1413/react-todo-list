// import "./Themes.css";

function Themes() {
  let th = [
    { id: 1, theme: "cupcake" },
    { id: 2, theme: "dark" },
    { id: 3, theme: "light" },
    { id: 4, theme: "bumblebee" },
    { id: 5, theme: "synthwave" },
    { id: 6, theme: " halloween" },
    { id: 7, theme: "fantasy" },
    { id: 8, theme: "dracula" },
    { id: 9, theme: "aqua" },
    { id: 10, theme: "luxury" },
    { id: 11, theme: "night" },
  ];

  const changeTheme = (html) => {
    console.log("this them", html);
  };

  return (
    <div className="themes-ul">
      {th.map((t) => {
        return (
          <li className="themes-data" key={t.id} onClick={changeTheme}>
            {t.theme}
          </li>
        );
      })}
    </div>
  );
}

export default Themes;
