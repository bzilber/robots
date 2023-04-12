import React from "react";

const Card = ({name, email, id}) => { //function vs const?
  return (
    <>
    <div className ='tc grow bg-light-green dib br3 pa3 ma2  shadow-5'> 
        <div>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div className="athelas">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Card