import React from "react";
import ButtonCount from "./ButtonCount";

export default function Section({ increment }) {
  return (
    <div>
      <h2> Section </h2>
      <p> Bouton pour incrémenter le compteur </p>
      <ButtonCount increment={increment} />
    </div>
  );
}
