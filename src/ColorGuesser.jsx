import { useEffect } from "react";
import { useState } from "react";
import "./ColorGuesser.css";

//helper function
function getRandomColor() {
    const digits = "123456789ABCDEF".split("");

    const combination = Array(6)
        .fill("")
        .map(() => {
            const _randomIndex = parseInt(Math.random() * digits.length);
            return digits[_randomIndex];
        });
    return "#" + combination.join("");
}

export default function ColorGuesser() {
    const [color, setColor] = useState("");
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(undefined);
    const [correctCount, setCorrectcCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    const generateColor = () => {
        const actualColor = getRandomColor();
        setColor(actualColor);
        setAnswers(
            [actualColor, getRandomColor(), getRandomColor()].sort(
                () => 0.5 - Math.random()
            )
        );
    };

    useEffect(() => {
        generateColor();
    }, []);

    const handleAnswerClicked = (answer) => {
        if (answer === color) {
            setResult("correct");
            setCorrectcCount((prev) => prev + 1);
            generateColor();
        } else {
            setResult("wrong");
            setWrongCount((prev) => prev + 1);
        }
    };

    return (
        <div className="color-guesser">
            <div
                className="guessbox"
                style={{ background: color }}
                title={color}
            ></div>
            <div className="choices">
                {answers.map((answer) => (
                    <button onClick={() => handleAnswerClicked(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
            {result === "wrong" && <div className="wrong">Wrong Answer</div>}
            {result === "correct" && <div className="correct">Correct!</div>}

            <div className="tally">
                <span> Correct: {correctCount}</span>

                <span> Wrong: {wrongCount}</span>
            </div>
        </div>
    );
}
