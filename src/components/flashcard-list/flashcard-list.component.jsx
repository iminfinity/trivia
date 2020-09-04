import React from "react";
import Flashcard from "../flashcard/flashcard.component";
import "./flashcard-list.styles.scss";
const FlashcardsList = ({ flashcards }) => {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashcardsList;
