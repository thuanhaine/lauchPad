 import React from 'react'
 
 function Gameplay() {
   return (
     <>
     <div className="gameplay">
        <div className="nav">
            <i className="fa fa-arrow-left"></i>
        </div>
        <div className="keypad">
            {/* <!-- <div className="keys"> --> */}
                <div data-key="103" className= "drum key1">
                    <p className="character">7</p>
                    <span className="sound"></span>
                </div>
                <div data-key="104" className= "drum key2">
                    <p className="character">8</p>
                    <span className="sound"></span>
                </div>
                <div data-key="105" className= "drum key3">
                    <p className="character">9</p>
                    <span className="sound"></span>
                </div>
        </div>
        <div className="keypad">
            <div data-key="100" className= "drum key4">
                <p className="character">4</p>
                <span className="sound"></span>
            </div>
            <div data-key="101" className= "drum key5">
                <p className="character ">5</p>
                <span className="sound"></span>
            </div>
            <div data-key="102" className= "drum key6">
                <p className="character">6</p>
                <span className="sound"></span>
            </div>
        </div>
                
        <div className="keypad">
            <div data-key="97" className= "drum key7">
                <p className="character">1</p>
                <span className="sound"></span>
            </div>
            <div data-key="98" className= "drum key8">
                <p className="character">2</p>
                <span className="sound"></span>
            </div>
            <div data-key="99" className= "drum key9">
                <p className="character">3</p>
                <span className="sound"></span>
            </div>
        </div>
    </div>
     </>
   )
 }
 
 export default Gameplay