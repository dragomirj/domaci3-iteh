import React from 'react'

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" style={{backgroundColor:'purple',color:'white'}}>
                © 2021 Copyright:
                <a className="text-dark" href="https://github.com/dragomirj" style={{padding:5 + 'px'}}>GitHub</a>
            </div>
        </footer>
    )
}

export default Footer
