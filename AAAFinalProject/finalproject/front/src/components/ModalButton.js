// import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import $ from "jquery";

export default function ModalButton() {
  let history = useHistory();

  const goToLogin = (e) => {
    $("#exampleModalCenter").modal("hide");
    history.push("/login");
  };

  const goToRegister = (e) => {
    $("#exampleModalCenter").modal("hide");
    history.push("/register");
  };

  return (
    <div>
      <button
        type="button"
        class="btn book-course"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        BOOK NOW
      </button>

      <div>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Login/Register
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <button onClick={goToLogin}>Login</button>
                <button onClick={goToRegister}>Register</button>

                {/* <NavLink
                  activeClassName="active"
                  className="links text-decoration-none ml-3"
                  exact
                  to="/login"
                >
                  <h5 className="white">Login</h5>
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="links text-decoration-none ml-3"
                  exact
                  to="/register"
                >
                  <h5 className="white">Register</h5>
                </NavLink> */}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
