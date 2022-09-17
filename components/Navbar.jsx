import Link from "next/link";
import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>experience page</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <link
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></link>

      <div>
        <div className="mx-auto p-2" style={{ maxWidth: "1200px" }}>
          <div className="vstack gap-2 rounded-3 p-2 bg-light">
            {/* navbar */}
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  <a className="navbar-brand" href="#" />
                  <ul className="navbar-nav mx-auto gap-5">
                    <li className="nav-item">
                      <Link href="/">
                        <a
                          className="nav-link fs-2 fw-bold"
                          aria-current="page"
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/experience">
                        <a className="nav-link fs-2 fw-bold">Experience</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">
                        <a className="nav-link fs-2 fw-bold">Contact</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/lab-07">
                        <a className="nav-link fs-2 fw-bold">Lab-07</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
