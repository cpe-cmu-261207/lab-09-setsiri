import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div class="d-flex gap-5 justify-content-center mx-4">
        <img
          src="img/profile.jpg"
          class="mx-1 rounded float-start"
          height="250"
        />
        <div>
          <p class="fw-bold font-monospace">
            welcome to my resume my name is Stamp :D
          </p>
          <p>
            Hi,my name is Setsiri Matewin. who studying in faculty of Computer
            Engieneering at CMU in Thailand. <br />
            Welcome to my resume by html and bootstrap css flamework. I'm
            interested about website developing
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quasi? Lorem ipsum dolor sit amet <br />
            consectetur, adipisicing elit. Ipsa, quod.
          </p>
        </div>
      </div>
      <p class="text-center h2 font-monospace">My skill</p>
      <div class="d-flex gap-4 mb-3 mx-3 my-3 justify-content-center">
        <div class="card">
          <img src="img/c+.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              programming is my skill c++ java html css cssflamework boolstrap
              tailwind
            </p>
          </div>
        </div>
        <div class="card">
          <img src="img/sh.jpg " class="card-img-top" alt="..." height="300" />
          <div class="card-body">
            <p class="card-text">
              I used to go in shirt compitition by grandsport company and i aslo
              have alot of project about art and design because it is by hobby.
            </p>
          </div>
        </div>
        <div class="card">
          <img src="img/sc.jpg" class="card-img-top" alt="..." height="200" />
          <div class="card-body">
            <p class="card-text">
              i had experience about scatch project with my friend in last year.
              It call jumpking game.
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex gap-4 mb-3 mx-3 my-3 justify-content-center">
        <div class="card">
          <img src="img/c3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              [ fullfill ] Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Animi repellat fugit praesentium, impedit atque cupiditate
              dolorum id placeat voluptatum, nobis est alias commodi? Vitae,
              quas doloribus. Fuga ratione
            </p>
          </div>
        </div>
        <div class="card">
          <img src="img/cat02.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              [ fullfill ] Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Animi repellat fugit praesentium, impedit atque cupiditate
              dolorum id placeat voluptatum, nobis est alias commodi? Vitae,
              quas doloribus.
            </p>
          </div>
        </div>
        <div class="card">
          <img src="img/cat01.avif" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              [ fullfill ] Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Animi repellat fugit praesentium, impedit atque cupiditate
              dolorum id placeat voluptatum, nobis est alias commodi? Vitae,
              quas doloribus. Fuga ratione veniam deleniti?
            </p>
          </div>
        </div>
      </div>
      <p class="text-center mt-5 mb-5">
        Copyright © 2021 630610766 Setsiri Matewin
      </p>
    </div>
  );
}
