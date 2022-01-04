import React from 'react'

import './Discussion.css'

export default function Discussion() {
    return (
        <div className='discussion-container'>
            <div className='discussion-article-info-img'>
                <h3 className='discussion-article-info-title'>Article-Info</h3>
                <div className='discussion-art-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlDLe4x52RtGHIx0oOU7jRL3kDICYAUeQkg&usqp=CAU" alt="" />
                </div>
                <div className='discussion-art-info'>
                    <ul className='discussion-ul-items'>
                        <li>City - Burgas</li>
                        <li>Data - 123.12123</li>
                        <li>Likes - 20</li>
                        <li>Price - 1000$</li>
                    </ul>
                </div>
            </div>
            <div className='chat-msg-container'>
                <h3 className='dsc-chat-msg-title'>Chat</h3>
                <div className='chat-msg-box'>
                    <div className='chat-avatar'>
                        <h4 className='chat-av-name'>
                            IV
                        </h4>
                    </div>
                    <p className='chat-message'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius fugit magnam dolorum libero. Velit harum reiciendis assumenda corporis vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit ab iure maxime asperiores dignissimos reprehenderit ea saepe, aliquam reiciendis, nihil doloribus assumenda vel eligendi. Impedit, saepe rerum consequuntur quod hic officiis necessitatibus ab molestiae esse, temporibus commodi sed fugiat eius similique aspernatur sequi voluptatum eos possimus in? Natus eveniet velit mollitia ab quisquam id magni praesentium harum veniam magnam beatae, placeat quibusdam corporis rem autem repellendus sed reprehenderit asperiores consectetur provident officia ipsum quae deleniti. Odio, accusantium a repellendus earum distinctio, voluptatum nobis aliquid tempora temporibus, nesciunt inventore doloremque dolorem architecto. Amet a quos unde corrupti vel odio voluptatibus.                      
                    </p>
                </div>
            </div>
        </div>
    )
}
