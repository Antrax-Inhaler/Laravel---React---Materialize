import { useEffect } from "react";
import M from "materialize-css";

export default function FloatingButton() {
  useEffect(() => {
    // Initialize Floating Action Button
    const elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      direction: "left", // options: 'top', 'right', 'bottom', 'left'
      hoverEnabled: false // set to true if you want menu on hover
    });
  }, []);

  return (
    <div className="fixed-action-btn" style={{ bottom: "45px", right: "24px" }}>
      <a className="btn-floating btn-large red">
        <i className="large material-icons">menu</i>
      </a>
      <ul>
        <li>
          <a className="btn-floating blue" href="#!">
            <i className="material-icons">home</i>
          </a>
        </li>
        <li>
          <a className="btn-floating green" href="#!">
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a className="btn-floating yellow darken-1" href="#!">
            <i className="material-icons">settings</i>
          </a>
        </li>
      </ul>
    </div>
  );
}
