
import './App.css';
import HomePage from './components/Home/HomePage';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Details from './components/Details/Details';


function App() {
  return (
    <>
      <Header />
      <section className="container">
        <HomePage />
        <Catalog />
        <Login />
        <Register />
        <Details />

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
