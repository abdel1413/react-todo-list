import "./Themes.css";

function Themes(props) {
  let body = document.getElementsByTagName("body")[0];
  const changeTheme = (body, t) => {
    // body.classList.add(t.theme);
    //body.className = `${t.theme}`;
    body.setAttribute("class", `${t.theme}`);
  };

  return (
    <div className="themes-ul">
      {props.themes.map((t) => {
        return (
          <li
            className="themes-data"
            key={t.id}
            onClick={() => changeTheme(body, t)}
          >
            {t.theme}
          </li>
        );
      })}
    </div>
  );
}

export default Themes;
