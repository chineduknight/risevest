import './App.scss'
const App = () => {
  return (
    <div id="container">
      <div id="nav-showcase">
        <div id="nav-bar">
          <div className="nav-rise">
            <a href="#"><img src="./image/rise.png" alt="rise" /></a>
          </div>
          <div className="nav-links">
            <ul>
              <li><a href="#"><img src="./image/Home.png" alt="rise" /></a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Investment Club</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <a href="#"><i className="fa-solid fa-bars fa-2x"></i></a>
          </div>
        </div>
        <div id="showcase">
          <div className="showcase-content">
            <h2>Dollar investments that help you grow <img src="./image/Ellipse.png" alt="ellipse" /> </h2>
            <p className="sub-text">We put your money in high quality assets that help you build wealth and achieve your financial goals. </p>

            <div className="download-app">
              <a href="#" className="apple-download download">
                <i className="fa-brands fa-apple "></i>
                <p>Download on the<span>App Store</span></p>

              </a>
              <a href="#" className="playstore-download download">
                <i className="fa-brands fa-google-play"></i>
                <p>Download on the <span>Play Store</span></p>
              </a>
            </div>
          </div>

          <div className="phone">
            <img src="./image/Phone.png" alt="" />
          </div>
        </div>
      </div>

      <div id="partners-invest">
        <div className="partners">
          <img src="./image/Partners.png" alt="partners" />
        </div>
        <div className="invest">
          <div className="invest-benefits">
            <div>
              <h2>Invest Your Money in Dollars</h2>
              <p>By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
              <a href="#">Start investing now <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="image">
              <img src="./image/Image 1.png" alt="image 1" />
            </div>
          </div>
          <div className="invest-benefits">
            <div className="image">
              <img src="./image/Image 2.png" alt="image 2" />
            </div>
            <div>
              <h2>Choose what's best for you</h2>
              <p>Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.</p>
              <a href="#">Start investing now <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="invest-benefits">
            <div>
              <h2>Set goals and reach them</h2>
              <p>You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.
              </p>
              <a href="#">Start investing now <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="image">
              <img src="./image/Image 3.png" alt="image 3" />
            </div>
          </div>
          <div className="invest-benefits">
            <div className="image">
              <img src="./image/Image 4.png" alt="image 3" />
            </div>
            <div>
              <h2>We remember so you dont have to</h2>
              <p>Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.
              </p>
              <a href="#">Start investing now <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div id="asset-classes">
        <div className="asset-class">
          <h1>Asset Classes</h1>
          <p>It's your money, choose where to invest it</p>
        </div>
        <div className="assets">
          <div className="asset-stock asset">
            <div className="stock">
              <img src="./image/Asset Stock.png" alt="stock" />
              <h1>Stocks</h1>
              <p>We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.</p>
              <p className="historical-returns"><span>Historical Returns:</span> 14% Per Annum</p>
              <p className="risk-level"><span>Risk Level:</span> High</p>
              <a href="#">Learn How Stocks works</a>
            </div>
          </div>

          <div className="asset-real-estate asset">
            <div className="real-estate">
              <img src="./image/Asset Real Estate.png" alt="real estate" />
              <h1>Real Estate</h1>
              <p>Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.</p>
              <p className="historical-returns"><span>Historical Returns:</span> 14% Per Annum</p>
              <p className="risk-level"><span>Risk Level:</span> Medium</p>
              <a href="#">Learn How Real Estate works</a>
            </div>
          </div>

          <div className="asset-fixed-income asset">
            <div className="fixed-income">
              <img src="./image/Asset Fixed Income.png" alt="fixed income" />
              <h1>Fixed Income</h1>
              <p>A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.</p>
              <p className="historical-returns"><span>Historical Returns:</span> 10% Per Annum</p>
              <p className="risk-level"><span>Risk Level:</span> Low</p>
              <a href="#">Learn How Fixed Income works</a>
            </div>
          </div>
        </div>
      </div>

      <div id="rise-app">
        <img src="./image/Rise App.png" alt="rise app" />

        <div className="rise-app">
          <p>The Rise App</p>
          <h1>Save for your <span>future</span></h1>
          <p className="details">With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children's future and more.</p>
          <button>Start Saving</button>
        </div>
      </div>

      <div id="our-regulation">
        <div className="left-box">
          <div className="upper-box"></div>
          <div className="lower-box"></div>
        </div>

        <div className="regulations">
          <h1>How we are Regulated</h1>
          <p>Rise is registered and regulated both in the US and in Nigeria. The founder is registered as an investment adviser with the US SEC. The Nigerian SEC regulates Rise's Nigerian investments through a trusteeship agreement with ARM Trustees, who oversees investments on behalf of the users. And a registered investment subsidiary holds all users' assets regulated in the US</p>
        </div>

        <div className="right-box">
          <div className="upper-box"></div>
          <div className="lower-box"></div>
        </div>
      </div>

      <div id="testimonials">
        <div className="testimonial-heading">
          <h1>From The People Who Use Rise</h1>
          <p>Our mission at Risevest is to empower more people just like you to <br /> achieve your personal financial goals.</p>
        </div>

        <div className="testimonials">
          <div className="testimonial">
            <p>Like everyone, I want to be protected from currency fluctuations and Rise helps me with that. The fixed income and real estate asset classNamees are my preferred things about Rise. I 💚 seeing how my returns perform on a daily basis. It demonstrates safety and also puts me at a lower risk of losing money!</p>
            <div>
              <img src="./image/testimonial 1.png" alt="testimonial 1" />
              <h2>Babajide</h2>
            </div>
          </div>

          <div className="testimonial">
            <p>I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.</p>
            <div>
              <img src="./image/testimonial 2.png" alt="testimonial 2" />
              <h2>Jesse</h2>
            </div>
          </div>

          <div className="testimonial">
            <p>I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.</p>
            <div>
              <img src="./image/testimonial 3.png" alt="testimonial 3" />
              <h2>Lade <span> UX Researcher </span></h2>
            </div>
          </div>
        </div>
      </div>

      <div id="group-community">
        <div className="group-community">
          <h1>Join The Rise Community</h1>
          <p className="details">If you want to go far, go together.
            Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning.
            It's completely free and open to new and seasoned investors. </p>
          <button>Join our community</button>
        </div>

        <img src="./image/Group .png" alt="rise app" />

      </div>

      <div id="downloading-app">
        <div className="downloading-app">
          <p className="text">Download The Rise App</p>

          <h1>Join our 100,000 users investing and setting long term goals! </h1>
          <p className="sub-text">Dollar investments that help you grow </p>

          <div className="download-app">
            <a href="#" className="apple-download download">
              <i className="fa-brands fa-apple fa-2x"></i>
              <p>Download on the<span>App Store</span></p>

            </a>
            <a href="#" className="playstore-download download">
              <i className="fa-brands fa-google-play fa-2x"></i>
              <p>Download on the <span>Play Store</span></p>
            </a>
          </div>
        </div>

        <div className="phone">
          <img src="./image/Phone.png" alt="" />
        </div>
      </div>

      <div id="footer">
        <div className="rise footer">
          <h2><img src="./image/black rise logo.png" alt="black rise logo" />
          </h2>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Info</a>
        </div>
        <div className="explore footer">
          <h2>Explore</h2>
          <a href="#">Investment Club <i className="fa-solid fa-arrow-up-right"></i> </a>
          <a href="#">Blog <i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
        <div className="products footer">
          <h2>Product</h2>
          <a href="#">Rise App</a>
        </div>
        <div className="contact-us footer">
          <h2>Contact Us</h2>
          <a href="#">+234 01 888 3519 <i className="fa-solid fa-arrow-up-right"></i></a>
          <a href="#">hello@risevest.com <i className="fa-solid fa-arrow-up-right"></i></a>
          <a href="#">Newsletter <i className="fa-solid fa-arrow-up-right"></i></a>
          <a href="#">Instagram <i className="fa-solid fa-arrow-up-right"></i></a>
          <a href="#">Twitter <i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default App