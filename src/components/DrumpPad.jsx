import React from 'react'

const DrumpPad = (props) => {
    console.log(props);
    return (
    <div className="drum-pad col-4 my-3 d-flex justify-content-center " onClick={() => props.handleClick(props.src)}>
      {props.id}
      <audio src={props.src} />
    </div>
    )
}

export default DrumpPad
