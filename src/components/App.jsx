import "../style/index.scss"

import React from 'react'
import room from "../images/comfortable-bedroom.jpg"
import room2 from "../images/table-inspirations.jpg"

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Hello Im React</h1>
                </section>
                <img src={room} alt="room" width="250" />
                <img src={room2} alt="room" width="250" />
            </main>   
        </>
    )
}

export default App
