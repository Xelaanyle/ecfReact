import React from "react";

export default function Counter({ count }) {
  return (
    <div>
      <p style={{ position: "absolute", bottom: 0 }}>Compteur: {count}</p>
    </div>
  );
}
