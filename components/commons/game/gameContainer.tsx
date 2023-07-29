import React from "react";

// js-tetris

const GameComponent = () => {
  return (
    <div className="h-screen">
      <iframe
        src={"/js-tetris/index.html"}
        className="w-full h-full overflow-y-auto"
      />
    </div>
  );
};

export default GameComponent;
