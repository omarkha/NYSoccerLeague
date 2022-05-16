import React from "react";
import Images from "../images/index.js";

const Home = () => {

    return (
        <div className="home">

            <img src={ Images.soccerMatch } alt="soccer game" />
            <h3>
                Start Your Journey Towards a Professional Soccer Career!
            </h3>
            <p>
                Love Soccer? Take your skills to the next level! Today more than ever, clubs are looking for talents to add to their arsenal. If you think you have what it takes to make it, or if you just like to play for fun, this is the ideal place for you. We have helped many amateur players develop into valuable members of professional football teams in MLS and overseas.
            </p>
            <br/>
            <br/>
            <h3>
                The Scouts Are Looking!
            </h3>
            <p>
                Good news for the ambitious ones! our company works closely with clubs from MLS, first, second and third division soccer teams in the US. So your work is seen by scouts of many clubs who are looking for talented players.
            </p>
            <br/>
            <h3>Let's Kick it!</h3>
        </div>
    )
}

export default Home;