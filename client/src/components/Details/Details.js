
import './Details.css'


export default function Details() {
    return (
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
    )
}
