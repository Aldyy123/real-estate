import React from "react";
import arrowLeft from '../Assets/Images/icons/arrow-left.svg'
import vertical from '../Assets/Images/icons/more-vertical.svg'
import moon from '../Assets/Images/icons/moon.svg'
import send from '../Assets/Images/icons/send4.svg'
import {ButtonLink} from '../Components/Elements/Button'

const Chat = () => {
    return(
        <>
        <section className="chat">
            <div className="header-nav">
                <div>
                    <ButtonLink colorbg={'transparant'} to="/" className="back">
                        <img src={arrowLeft} alt="" />
                    </ButtonLink>
                    <div className="name">
                        <span>Shahrul M</span>
                    </div>
                </div>
                <div>
                    <img src={vertical} alt="" />
                </div>
            </div>
            <div className="content-chat">
                <img src={moon} alt="" />
                <h3>Landlord Offline</h3>
                <span>Lorem ipsum dolor sit amet consecteur adipsing elit</span>
            </div>
            <div className="message">
                <div className="form-chat">
                    <input type="text" placeholder="Type Message…" />
                </div>
                <div className="send">
                    <img src={send} alt="" />
                </div>
            </div>
        </section>
        </> 
    )
}

export default Chat