import { useState } from "react";

function CheckBox() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div>
      <h1>Kurs React</h1>

      <input
        type="checkbox"
        id="show-description"
        checked={showDescription}
        onChange={(event) => setShowDescription(event.target.checked)}
      />
      <label htmlFor="show-description">Pokaż opis</label>

      <p>Opis: {showDescription ? "włączony" : "wyłączony"}</p>

      {showDescription && <p>Na kursie poznajemy tworzenie aplikacji React.</p>}
    </div>
  );
}

export default CheckBox;