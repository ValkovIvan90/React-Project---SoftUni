
import './App.css';
import HomePage from './components/home/HomePage';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';

function App() {
  return (
    <>
      <Header />
      <section className="container">
          <HomePage />
          <Catalog />
          
        <section className="login">
          <div className="login-box">
            <h1>Login</h1>
            <p className="login-untertitle">Please enter your email and password.</p>
            <form className="login-form" action="#" method="post">
              <label htmlFor="email">Email</label>
              <input placeholder="Enter Email" name="email" type="email" />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
              />
              <input type="submit" className="loginBtn" value="Login" />
            </form>
            <div className="signup">
              <p>Dont have an account? <a href="/register">Sign up</a>.</p>
            </div>
          </div>
        </section>
        <section className="register">
          <div className="register-box">
            <h1>Register</h1>
            <p className="register-untertitle">Please fill in this form to create an account.</p>
            <form className="register-form">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />

              <label htmlFor="repeatPassword">Confirm your password</label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="repeatPass"
                required
              />
              <input type="submit" className="registerbtn" value="Register" />
            </form>
            <div className="signin">
              <p>Already have an account? <a href="/login">Sign in</a>.</p>
            </div>
          </div>
        </section>

        <section className="details">
          <h1 className="details-title">Details</h1>
          <article className="details-info">
            <div className="details-info-img">
              <img src="https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0" alt="img-details" />
            </div>
            <p className="details-text">
              Set in a world where fantasy creatures live side by side with
              humans. A human cop is forced to work with an Orc to find a weapon
              everyone is prepared to kill for. Set in a world where fantasy
              creatures live side by side with humans. A human cop is forced to
              work with an Orc to find a weapon everyone is prepared to kill for.
              creatures live side by side with humans. A human cop is forced to
              work with an Orc to find a weapon everyone is prepared to kill for.
            </p>
          </article>
          <article className="article-info">
            <ul className="art-info-items">
              <li>Seller : Ivan</li>
              <li>Email : Ivan@adasd.bg</li>
              <li>Place : Vienna</li>
              <li>Date of publication : 12.21</li>
              <li>Price : $123</li>
            </ul>
            <article className="message-box">
              <h4 className="box-title">Send message to <span>Ivan@gmai.com</span></h4>
              <form action="mailto:someone@example.com" method="post" enctype="text/plain">
                Name:<br />
                <input type="text" name="name" placeholder="Your name" /><br />
                E-mail:<br />
                <input type="text" name="mail" placeholder="Your Email" /><br />
                Message:<br />
                <textarea name="message" id="" cols="21" rows="4" placeholder="Send message..."></textarea>
                <div className="form-btn">
                  <input className="submit-btn" type="submit" value="Send" />
                  <input className="reset-btn" type="reset" value="Reset" />
                </div>
              </form>
            </article>
          </article>
          <article className="buttons">
            <a href="#" className="button edit">Edit</a>
            <a href="#" className="button del">Delete</a>
            <a href="#" className="button like">Like</a>
          </article>
        </section>
        <section className="create-article">
          <div className="create-article-box">
            <div className="create-art-text">
              <h1 className="art-title">Create Article</h1>
              <p className="create-art-untertitle">Please fill in this form to create an article.</p>
            </div>
            <form>
              <label htmlFor="category">Choose a category:</label>
              <select name="category" id="category">
                <option value=""></option>
                <option value="cars">Cars</option>
                <option value="animals">Animals</option>
                <option value="clothing">Clothing</option>
              </select>

              <label htmlFor="city">City</label>
              <input type="text" name="city" />

              <label htmlFor="image">Image</label>
              <input type="text" name="image" />

              <label htmlFor="price">Price</label>
              <input type="number" name="price" />

              <label htmlFor="description">Description</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Description..."></textarea>

              <input type="submit" className="createArtBtn" value="Create Article" />
            </form>
          </div>
        </section>
        <section className="edit-article">
          <div className="edit-article-box">
            <div className="edit-art-text">
              <h1 className="art-title">Edit Article</h1>
            </div>
            <form>
              <label htmlFor="category">Choose a category:</label>
              <select name="category" id="category">
                <option value=""></option>
                <option value="cars">Cars</option>
                <option value="animals">Animals</option>
                <option value="clothing">Clothing</option>
              </select>

              <label htmlFor="city">City</label>
              <input type="text" name="city" />

              <label htmlFor="image">Image</label>
              <input type="text" name="image" />

              <label htmlFor="price">Price</label>
              <input type="number" name="price" />

              <label htmlFor="description">Description</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Description..."></textarea>

              <input type="submit" className="createArtBtn" value="Edit Article" />
            </form>
          </div>
        </section>
        <section>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quos illum nulla deserunt sequi, at nesciunt, saepe harum libero quisquam neque sint suscipit quam quae officia eaque maxime obcaecati eius!</p>
        </section>
      </section>
    </>

  );
}

export default App;
