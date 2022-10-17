import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Hi() {
    return ( <
        div >
        <
        div className = "container" >

        <
        div className = "shedow" >

        <
        div className = "top-of-cv" >

        <
        h1 > Ahmed Raza < /h1> <
        p > Cell# 0322 - 2665676 < /p> <
        p > ahmadraza.azt @gmail.com < /p> <
        a href = "https://www.linkedin.com/in/ahmedrazachandio"
        target = "blank" > Linkedin < /a><br/ >
        <
        a href = "https://github.com/ahmedrazachandio"
        target = "blank" > Github < /a> <
        /div> <
        div className = "objective" >
        <
        h2 > Objective < /h2> <
        p >
        Objective is to take challenge of making website
        for companies.Providing good unique and professional designs
        for companies.Another role is to gain employment as a marketing associate where I can effectively utilize my skills as a marketing professional,
        Seeking a marketing position where my skills and qualifications willbe put to use on a daily basis. <
        /p> <
        /div> <
        div className = "exp" >
        <
        h2 > Experience < /h2> <
        p >
        Aug - 11 - 2021– Jan - 30 - 2021 < br / >
        <
        b > Asst.Purchase Manager | Rasheed Textile Mill | Karachi. < /b> <
        /p> <
        p >
        Aug - 01 - 2019– Aug - 10 - 2020 < br / >
        <
        b > Timekeeper in HR | Rasheed Textile Mill | Karachi. < /b> <
        /p> <
        /div> <
        div className = "edu" >
        <
        h2 > Education < /h2> <
        p >
        <
        b > Saylani Mass It Traning < /b> <br/ > Course in Web Development and Mobile Application Development | Continue <
        /p> <
        p >
        <
        b > Sindh Board of Technical Education Karachi < /b> <br/ > D.A.E in Electronics | 2015 - 2018 <
        /p> <
        p >
        <
        b > Board of Secondary Education Karachi < /b> <br/ > Matriculation | 2013– 2015 <
        /p> <
        /div> <
        div className = "skills" >
        <
        h2 > Skills < /h2> <
        div className = "t-skills" >
        <
        ul >
        <
        h2 > Technical Skills < /h2> <
        li > MS office < /li> <
        li > Website design < /li> <
        li > Coding or Programming < /li> <
        li > Business Analysis < /li> <
        li > Data Entry < /li> <
        /ul> <
        /div> <
        div className = "s-skills" >
        <
        ul >
        <
        h2 > Soft Skills < /h2> <
        li > Communication < /li> <
        li > Teamwork < /li> <
        li > Adaptability < /li> <
        li > Problem - Solving < /li> <
        li > Time Management < /li> <
        /ul> <
        /div> <
        /div> <
        div className = "w-shop" >
        <
        h2 > Workshops < /h2> <
        div className = "w-s" >
        <
        ul >
        <
        li > Business Communication And Skills < /li> <
        li > Entrepreneurship < /li> <
        li > Freelancing < /li> <
        li > Harassment < /li> <
        li > Soft Skills < /li> <
        /ul> <
        /div> <
        /div>

        <
        /div> { /* <a href="../index.html"><button className="h-btn">Home</button></a> */ } <
        /div>

        <
        /div>
    );
}
ReactDom.render( < Hi / > , document.querySelector("#root"));