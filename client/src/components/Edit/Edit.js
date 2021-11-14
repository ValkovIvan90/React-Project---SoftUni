import './Edit.css'

export default function Edit() {
    return (
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
    )
}
