import React from "react";

function Buttongame() {
  const [value, setvalue] = useState(false);

  const funcclick = () => {
    setvalue(true);
  };

  const funcnormal = () => {
    setvalue(false);
  };

  return (
    <>
      <h1>Full Contactus Page</h1>
      {value === true ? null : <button onClick={funcclick}>Click It</button>}

      {value === true ? (
        <div>
          <p>
            My Name is <span style={{ fontWeight: "bold" }}>Yash</span>
          </p>
          <p>I am the creator of this Website</p>
          <p>
            I am <span style={{ fontWeight: "bold" }}>Web Developer</span> and{" "}
            <span style={{ fontWeight: "bold" }}>Blockchain Developer</span>
          </p>

          <button onClick={funcnormal}> backtonormal </button>
        </div>
      ) : null}

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          checked
        />
        <label class="form-check-label" for="flexSwitchCheckChecked">
          Checked switch checkbox input
        </label>
      </div>
    </>
  );
}
