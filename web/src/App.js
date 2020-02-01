import React from "react";
import "./global.css";
import "./App.css";
import "./Siderbar.css";
/*  */
function App() {
  return (
    <>
      <div id="app">
        <aside>
          <strong>Cadrastrar</strong>
          <form>
            <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input id="github_username" name="github_username" required />
            </div>

            <div className="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input id="techs" name="github_username" required />
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input id="latitude" name="latitude" required />
              </div>

              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input id="longitude" name="longitude" required />
              </div>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </aside>
        <main></main>
      </div>
    </>
  );
}

export default App;
