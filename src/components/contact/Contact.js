import React from 'react'
import img from "../../images/web-application-development.png";

export default function Contact() {
    return (
        <div class="container-fluid p-5 contanct-section" id="Contanct">
            <div class="form-container position-relative">
                <h2>How Can I help You?</h2>
                <form class="w-100">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="auther-name" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="message-subject" placeholder="Subject" />
                    </div>

                    <div class="form-floating mb-3">
                        <textarea class="form-control" placeholder="Message"
                            id="Message"></textarea>
                    </div>
                    <div class="form-footer">
                        <button type="submit">Contact</button>
                    </div>
                </form>
            </div>

            <img src={img} width="55%" />
        </div>
    )
}
