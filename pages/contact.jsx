import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar>
        <p class="text-center h2 font-monospace">my contact</p>
        <div class="d-flex mx-4">
          <div class="card mx-auto alian-items-centers my-3">
            <div class="d-flex">
              <img
                src="img/profile.jpg"
                class=" mx-4 my-4 rounded float-start"
                height="250"
              />
              <div class="card-body">
                <h5 class="card-title">CPE 630610766</h5>
                <p class="card-text">
                  Hi,my name is Setsiri Matewin. who studying in faculty of
                  Computer Engieneering at CMU in Thailand. Welcome to my resume
                  by html and bootstrap css flamework. I'm interested about
                  website developing
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat odio quod neque fuga a odit cumque quisquam
                  dignissimos laudantium ab.
                </p>
              </div>
            </div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span class="ms-5 my-auto fw-bold">Name :</span>
                <span class="ms-2 my-auto">Setsiri Matewin</span>
              </li>
              <li class="list-group-item">
                <span class="ms-5 my-auto fw-bold">Nickname :</span>
                <span class="ms-2 my-auto">Stamp</span>
              </li>
              <li class="list-group-item">
                <span class="ms-5 my-auto fw-bold">Address :</span>
                <span class="ms-2 my-auto">
                  117/6 หมู่.5 ตำบล.สุเทพ อำเภอ.เมืองเชียงใหม่ จังหวัดเชียงใหม่
                  50200 ประเทศไทย
                </span>
              </li>
              <li class="list-group-item">
                <span class="ms-5 my-auto fw-bold">Facebook :</span>
                <span class="ms-2 my-auto">
                  <a
                    href="https://www.facebook.com/setsiri.stamp"
                    class="card-link"
                  >
                    https://www.facebook.com/setsiri.stamp/
                  </a>
                </span>
              </li>
              <li class="list-group-item">
                <span class="ms-5 my-auto fw-bold">Email :</span>
                <span class="ms-2 my-auto">
                  <a href="mailto:setsiri_matewin@cmu.ac.th" class="card-link">
                    setsiri_matewin@cmu.ac.th
                  </a>
                </span>
              </li>
              <li class="list-group-item">
                <span class="ms-5 my-auto fw-bold">Phone :</span>
                <span class="ms-2 my-auto">66+ 090-320-1898</span>
              </li>
              <li class="list-group-item">
                <span class="ms-5 my-auto fw-bold">Freelance :</span>
                <span class="ms-2 my-auto">Available</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-center mt-5 mb-5">
          Copyright © 2021 630610766 Setsiri Matewin
        </p>
      </Navbar>
    </div>
  );
}
