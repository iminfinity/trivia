import React, { useState, useEffect } from "react";
import FlashcardsList from "./components/flashcard-list/flashcard-list.component";
import "./App.css";

import axios from "axios";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
function App() {
  const [flashcards, setFlashcards] = useState(null);
  const [category, setCategory] = useState(18);
  const decodeString = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  useEffect(() => {
    const link = category
      ? `https://opentdb.com/api.php?amount=40&category=${category}`
      : "https://opentdb.com/api.php?amount=50";

    axios.get(link).then((response) =>
      setFlashcards(
        response.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers,
            answer,
          ].map((answer) => decodeString(answer));
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      )
    );
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <Header category={category} handleCategoryChange={handleCategoryChange} />
      {flashcards ? <FlashcardsList flashcards={flashcards} /> : null}
      <Footer />
    </div>
  );
}

export default App;
