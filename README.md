# eXabyte '22

# Instructions

- fork the repo.
- create a new branch with the name of the page you are working on.
- put you work in a folder with the name of the task you are working on.
- add your work and create a merge request.

# adding navbar in pages

1. link the navbar.js and navbar.css files
2. add "selected" class in the li of the respective page and change the icon color from 808080 to ffffff in the icon image url
3. [important] please add 50px margin right in middle section for mobile & tablet view. Otherwise middle content will be covered by the page indicators in right side.

4. copy the code for snippet for navbar and paste in the bottom of pages
   [for example please check about/about.html]

```
      <!--right navbar-->
      <div class="sidebar" id="mySidebar">
        <div class="nav__btns">
          <img
            id="open"
            onclick="openNav()"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png"
          />
          <img
            onclick="closeNav()"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/delete-sign.png"
          />
        </div>
        <div class="options__container">
          <ul>
            <li>
              <a href="../Landing page/index.html">Home</a
              ><a href="../Landing page/index.html"
                ><img
                  src="https://img.icons8.com/material-rounded/50/808080/home.png"
              /></a>
            </li>
            <li>
              <a href="../about/about.html">About Us</a
              ><a href="../about/about.html"
                ><img
                  src="https://img.icons8.com/material-outlined/50/808080/about.png"
              /></a>
            </li>
            <li>
              <a href="">Events</a
              ><a href=""
                ><img
                  src="https://img.icons8.com/external-sbts2018-outline-sbts2018/50/808080/external-events-social-media-basic-1-sbts2018-outline-sbts2018.png"
              /></a>
            </li>
            <li>
              <a href="../Magazine Page/index.html">Magazines</a
              ><a href="../Magazine Page/index.html"
                ><img
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/808080/external-magazine-advertising-kiranshastry-lineal-kiranshastry.png"
              /></a>
            </li>
            <li>
              <a href="../Our Team/ourteam.html">Our team</a
              ><a href="../Our Team/ourteam.html"
                ><img
                  src="https://img.icons8.com/external-sbts2018-outline-sbts2018/50/808080/external-team-work-from-home-sbts2018-outline-sbts2018.png"
              /></a>
            </li>
            <li>
              <a href="../Sponsers/sponsors2.html">Sponsors</a
              ><a href="../Sponsers/sponsors2.html"
                ><img
                  src="https://img.icons8.com/external-wanicon-lineal-wanicon/50/808080/external-sponsored-digital-content-wanicon-lineal-wanicon.png"
              /></a>
            </li>
            <li class="selected">
              <a href="">Contact us</a
              ><a href=""
                ><img
                  src="https://img.icons8.com/ios/50/ffffff/online-support.png"
              /></a>
            </li>
          </ul>
        </div>
        <!--div class="icons__container">
          <a href=""
            ><img
              src="https://img.icons8.com/ios/30/ffffff/facebook-new.png"
            /> </a
          ><a href=""
            ><img
              src="https://img.icons8.com/ios/30/ffffff/twitter--v1.png"
            /> </a
          ><a href=""
            ><img
              src="https://img.icons8.com/ios/30/ffffff/instagram-new--v1.png"
          /></a>
        </div-->
      </div>
```
