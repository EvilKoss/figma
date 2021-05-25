import React from 'react';
import style from './Figma.module.css'

const Figma = () => {
  return (
    <div>
      <div className={style.body}>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet" />
        <header>
          <div className={style.header}>
            <a href='' className={style.logo}><span className={style.logo_img}></span><span className={style.logo_text}>mamon</span> </a>
            <nav>
              <ul className={style.nav}>
                <li><a href=''>Services</a></li>
                <li><a href=''>Clients</a></li>
                <li><a href=''>Our team</a></li>
                <li><button className={style.nav_btn}>Contact Us</button></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className={style.page}>
          <div className={style.wrap}>
            <h1 className={style.title_main}>We're an independent development agency.</h1>
            <p className={style.text_main}>We understand the intricacies of web development inside-out.
              That's why we build rock-solid Mobile and Web applications enriched with user-centered visual experiences.
            </p>
            <button className={style.button}>Contact Us</button>
          </div>
        </div>

        <div className={style.page_top}>
          <div className={style.wrap}>
            <h2>OUR SERVICES</h2>
            <div className={style.service}>

              <div className={style.service_item}>
                <div className={style.service_img1}></div>
                <div className={style.service_text}>
                  <h3>Mobile Development</h3>
                  <p>We develop mobile apps for all contemporary
                    mobile platforms. Mamon team builds
                    native and cross-platform solutions.</p>
                </div>
              </div>

              <div className={style.service_item}>
                <div className={style.service_img2}></div>
                <div className={style.service_text}>
                  <h3>Web Development</h3>
                  <p>Mamon offers full range of services from various
                  CMS and frameworks based websites to complex
                  ERP/CRM solutions and e-commerce stores.</p>
                </div>
              </div>

              <div className={style.service_item}>
                <div className={style.service_img3}></div>
                <div className={style.service_text}>
                  <h3>Product Design</h3>
                  <p>We create design given the product audience,
                  goal, business domain, technology and
                  the platform for the solution.</p>
                </div>
              </div>

              <div className={style.service_item}>
                <div className={style.service_img4}></div>
                <div className={style.service_text}>
                  <h3>Quality Assurance</h3>
                  <p>Our QA team ensures high standard of
                  quality of products delivered.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={style.page_top_page}>
          <div className={style.wrap}>
            <h2>OUR CLIENTS</h2>
              <div className={style.clients}>
                <div className={style.clients_item}>
                  <div className={style.myImage1}> </div>
                  <div className={style.myImage2}> </div>
                  <div className={style.myImage3}> </div>
                  <div className={style.myImage4}> </div>
                  <div className={style.myImage5}> </div>
                  <div className={style.myImage6}> </div>
                  <div className={style.myImage7}> </div>
                  <div className={style.myImage8}> </div>
                  <div className={style.myImage9}> </div>
                  <div className={style.myImage10}> </div>
                  <div className={style.myImage11}> </div>
                  <div className={style.myImage12}> </div>
                </div>
              </div>
          </div>
        </div>

        <div className={style.page_team}>
          <div className={style.wrap}>
            <h2>OUR TEAM</h2>
            <div className={style.team}>

              <div className={style.teammate}>
                <div className={style.teammate_photo1}></div>
                <div className={style.teammate_text}>
                  <h3>Vadim</h3>
                  <p>Managing Director</p>
                </div>
              </div>


              <div className={style.teammate}>
                <div className={style.teammate_photo2}></div>
                <div className={style.teammate_text}>
                  <h3>Sergey</h3>
                  <p>Technology Director</p>
                </div>
              </div>

              <div className={style.teammate}>
                <div className={style.teammate_photo3}></div>
                <div className={style.teammate_text}>
                  <h3>Andrey</h3>
                  <p>Front-end Developer</p>
                </div>
              </div>

              <div className={style.teammate}>
                <div className={style.teammate_photo4}></div>
                <div className={style.teammate_text}>
                  <h3>Alex</h3>
                  <p>Front-end Developer</p>
                </div>
              </div>

              <div className={style.teammate}>
                <div className={style.teammate_photo5}></div>
                <div className={style.teammate_text}>
                  <h3>Agneshka</h3>
                  <p>Mobile Developer</p>
                </div>
              </div>

              <div className={style.teammate}>
                <div className={style.teammate_photo6}></div>
                <div className={style.teammate_text}>
                  <h3>Dmitry</h3>
                  <p>Back-end Developer</p>
                </div>
              </div>

              <div className={style.teammate}>
                <div className={style.teammate_photo7}></div>
                <div className={style.teammate_text}>
                  <h3>Artyom</h3>
                  <p>Back-end Developer</p>
                </div>
              </div>

              <div className={style.teammate}>
                <div className={style.teammate_photo8}></div>
                <div className={style.teammate_text}>
                  <h3>Evgeny</h3>
                  <p>Product Designer</p>
                </div>
              </div>

              <div className={style.teammate}>
                <div className={style.teammate_photo9}></div>
                <div className={style.teammate_text}>
                  <h3>Tom</h3>
                  <p>Product Designer</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>


      <div className={style.last_line}>
        <span className={style.logo_img}></span>
        <div className={style.cat}></div>
        <div className={style.be}></div>
        <div className={style.in}></div>
        <div className={style.figure}></div>
      </div>
    </div>
  )
}

export default Figma;
