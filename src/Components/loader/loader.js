import React from 'react';
import loader from './variation11.svg';
import './loader.css';
import './index.css'

const Loader = ({
    showLoader = false
}) => {

    return (
        <>
            {showLoader ? (
                <div style={{
                    alignItems: 'center',
                    background: '#000',
                    display: 'flex',
                    height: '100vh',
                    justifyContent: 'center',
                    left: 0,
                    position: 'fixed',
                    opacity: 0.85,
                    top: 0,
                    transition: 'opacity 0.3s linear',
                    width: '100%',
                    zIndex: '9999'
                  }}>
                    <img src={loader} style={{
                          height: '150px',
                          position: 'absolute'
                    }}/>
                    <div class="typewriter">
                        <h1>Loading</h1>
                    </div>
                  </div>
            ) : null}
        </>
    )
}

export default Loader;