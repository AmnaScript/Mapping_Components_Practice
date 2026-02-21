import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";

function App() {
  function emoji(item) {
    return (
      <Term
        key={item.id}
        emoji={item.emoji}
        name={item.name}
        meaning={item.meaning}
      />
    );
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emoji)}</dl>
    </div>
  );
}

export default App;
