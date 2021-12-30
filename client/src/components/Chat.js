import React from "react";
import CommonNavbar from "./Header/CommonNavbar";

const Chat = (props)=>{
    return(
        <div>
            <CommonNavbar/>
            <div className="container flex-end">
                <div className="flex-auto">
                    <p className="flex-center mt-15 mb-30"><span className="hr"></span><span className="px-5 text-grey text_sm chat_date">28.08.2020</span><span className="hr"></span></p>
                    <div className="chat-block">
                        <div className="chat-wrapper text-right">
                            <div className="chat-card bg-blue chat-right">
                                <p className="chat_text">Lorem ipsum dolor sit amet,</p>
                                <p className="text-right text_xxs chat_time">3:18 PM</p>
                            </div>
                        </div>
                        <div className="chat-wrapper">
                            <div className="custom-card chat-card chat-left">
                                <p className="chat_text">Lorem ipsum dolor sit amet,</p>
                                <p className="text-right text_xxs chat_time">3:18 PM</p>
                            </div>
                        </div>
                        <div className="bg-blue write_message_block w-100 flex-center">
                            <span className="material-icons-outlined">sentiment_satisfied</span>
                            <input type="text" placeholder="Сообщение" className="form-control text_md" id="chat_input"/>
                            <span className="material-icons">send</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;