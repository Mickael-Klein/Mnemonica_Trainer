import React, { useEffect } from "react";
import { useState } from "react";
import Cards from "../../Assets/Mnemonica.json";
import Card from "../../Component/Card/Card";
import "../GuessByNumber/GuessByNumber.scss";

export default function GuessByNumber() {
  const [cardCliked, setCardClicked] = useState();
  const [randomCard, setRandomCard] = useState();
  const [errorsRemaining, setErrorsRemaining] = useState(3);
  const [result, setResult] = useState(false);

  function filterByID(data, min, max) {
    return data.deck.filter(function (item) {
      return item.id >= min && item.id <= max;
    });
  }

  function resetGuess() {
    let CardListed = document.querySelectorAll(".lineOfCards__button");
    CardListed.forEach((Card) =>
      Card.classList.remove("falseCard", "trueCard")
    );

    setResult(false);
    getRandomCard();
    setCardClicked();
    setErrorsRemaining(3);
  }

  function cardSelected(MnemonicaId) {
    if (errorsRemaining > 0) {
      setCardClicked(MnemonicaId);
    }
  }

  function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 52) + 1;
    let randomCardFromRandomNumber = Cards.deck.find(
      (card) => card.id === randomNum
    );
    if (randomCardFromRandomNumber === randomCard) {
      getRandomCard();
      console.log("something");
    }
    setRandomCard(randomCardFromRandomNumber);
  }

  useEffect(() => {
    getRandomCard(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (randomCard !== undefined && cardCliked !== undefined) {
      if (cardCliked === randomCard.MnemonicaId) {
        let trueCard = document.getElementById(`${cardCliked}`);
        trueCard !== null && trueCard.classList.add("trueCard");
        setResult(true);
      } else {
        let falseCard = document.getElementById(`${cardCliked}`);
        falseCard !== null && falseCard.classList.add("falseCard");
        setErrorsRemaining((prevCount) => prevCount - 1);
      }
    } // eslint-disable-next-line
  }, [cardCliked]);

  useEffect(() => {
    if (errorsRemaining === 0) {
      let trueCard = document.getElementById(`${randomCard.MnemonicaId}`);
      trueCard.classList.add("trueCard");
      setResult(true);
    } // eslint-disable-next-line
  }, [errorsRemaining]);

  const spades = filterByID(Cards, 1, 13);
  const clubs = filterByID(Cards, 14, 26);
  const hearts = filterByID(Cards, 27, 39);
  const diamonds = filterByID(Cards, 40, 52);

  return (
    <div className="GuessByNumber">
      <div className="guess">
        <div className="guess__card">
          <div className="containerInfo">
            <div className="guess__card--toFind">
              Mnemonica Index :{" "}
              {randomCard !== undefined && randomCard.MnemonicaId}
            </div>
            <div className="counterAndResetBtn">
              <div className="guess__errorCounter">
                Errors remaining: {errorsRemaining}
              </div>
              {result && (
                <div className="resetBtn">
                  <button onClick={() => resetGuess()}>Next</button>
                </div>
              )}
            </div>
          </div>

          <div className="containerCard">
            <div className="guess__card--toReveal">
              <div className="flip-card">
                <div className={`flip-card-inner ${result && "rotate"}`}>
                  <div className="flip-card-front"></div>
                  {result && (
                    <div className="flip-card-back">
                      <span className="flip-card-back__cardContent">
                        {randomCard !== undefined && randomCard.number}
                        {randomCard !== undefined &&
                          randomCard.colorOfSymbol === "black" && (
                            <span className="black">{randomCard.symbol}</span>
                          )}
                        {randomCard !== undefined &&
                          randomCard.colorOfSymbol === "red" && (
                            <span className="red">{randomCard.symbol}</span>
                          )}
                      </span>
                      <span className="flip-card-back__cardMnemonicaId">
                        {randomCard !== undefined && randomCard.MnemonicaId}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choice">
        <div className="lineOfCards spade">
          {spades.map((card) => (
            <button
              key={card.id * 100}
              id={card.MnemonicaId}
              className="lineOfCards__button"
              onClick={() => cardSelected(card.MnemonicaId)}
            >
              <Card
                key={card.id}
                idOfCard={card.id}
                value={card.number}
                suit={card.symbol}
                showId={false}
              />
            </button>
          ))}
        </div>
        <div className="lineOfCards club">
          {clubs.map((card) => (
            <button
              key={card.id * 100}
              id={card.MnemonicaId}
              className="lineOfCards__button"
              onClick={() => cardSelected(card.MnemonicaId)}
            >
              <Card
                key={card.id}
                idOfCard={card.id}
                value={card.number}
                suit={card.symbol}
                showId={false}
              />
            </button>
          ))}
        </div>
        <div className="lineOfCards heart">
          {hearts.map((card) => (
            <button
              key={card.id * 100}
              id={card.MnemonicaId}
              className="lineOfCards__button"
              onClick={() => cardSelected(card.MnemonicaId)}
            >
              <Card
                key={card.id}
                idOfCard={card.id}
                value={card.number}
                suit={card.symbol}
                showId={false}
              />
            </button>
          ))}
        </div>
        <div className="lineOfCards diamond">
          {diamonds.map((card) => (
            <button
              key={card.id * 100}
              id={card.MnemonicaId}
              className="lineOfCards__button"
              onClick={() => cardSelected(card.MnemonicaId)}
            >
              <Card
                key={card.id}
                idOfCard={card.id}
                value={card.number}
                suit={card.symbol}
                showId={false}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
