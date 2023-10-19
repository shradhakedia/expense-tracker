import React from "react";

import "./Card.css";

function Card(props) {
  // to use classes of custom Components we need to add them here also in div. As, Html inbuilt tags understand className
  // but whereever the "Card tag(Custom Component)" is used, it does not understand className properties.
  // In order to make it understand we add it here in "div tag" which is html in built tag.
  const classes = "card " + props.className;

  // Also, we can't simply use this Card tag anywhere as a wrapper tag and return. We need to explicitly tell that we have props.children("reserved word") inside it and it is used as wrapper tag.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
