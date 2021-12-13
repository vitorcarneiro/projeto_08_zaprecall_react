import { useState } from "react";

import turn from '../img/turn.png';

import '../css/single-card.css';

//import TurnButton from "./TurnButton";
//import AnswerButtons from "./AnswerButtons";

let flashCardListAnswers = [];

function FrontFaceCard( {question, page, totalPages}) {
    return (
        <div className='front-face'>
            <p className='card-marker'>{page}/{totalPages}</p>
            
            <h1>{question}</h1>
            
            <img src={turn} className='turn' onClick={() => console.log(page)}/>
        </div>
    );
}

function BackFaceCard( {question, answer, page, totalPages}) {
    const blackBox = 'Aprendi agora';
    const redBox = 'Não lembrei';
    const greenBox = 'Lembrei com esforço';
    const yellowBox = 'Zap!';
    
    return (
        <div className='back-face'>
            <p className='card-marker'>{page}/{totalPages}</p>
        
            <h1 className='question-small'>{question}</h1>

            <h2>{answer}</h2>

            <div className="bottom-card-boxes">
                <p className="bottom-box black" onClick={() => console.log(question)}>{blackBox}</p>
                <p className="bottom-box red" onClick={() => console.log(answer)}>{redBox}</p>
                <p className="bottom-box green" onClick={() => console.log(page)}>{greenBox}</p>
                <p className="bottom-box yellow" onClick={() => console.log(totalPages)}>{yellowBox}</p>
            </div>
        </div>
    );
}

export default function SingleFlashCard({ flashCardData, page, totalPages }) {
    const { question, answer } = flashCardData;

    flashCardListAnswers.push(flashCardData);
    console.log(flashCardListAnswers);

    const [containerFlashcardClasses, setContainerFlashcardClasses] = useState(['container-card'])
    const [flashcardClasses, setFlashcardClasses] = useState(['flashcard'])

    let cardToShow = null;

    if (page === 1) {
        
        cardToShow = (
        <div className='card'>
            <FrontFaceCard question={question} page={page} totalPages={totalPages}/>

            {/* <BackFaceCard question={question} answer={answer} page={page} totalPages={totalPages}/> */}

        </div>);
    } else {
        cardToShow = (
            <div className='card hidden'>
                <FrontFaceCard question={question} page={page} totalPages={totalPages}/>
    
                {/* <BackFaceCard question={question} answer={answer} page={page} totalPages={totalPages}/> */}
    
            </div>);
    }

    return cardToShow;


        // <div className={containerFlashcardClasses.join(' ')}>
        //     <div className={flashcardClasses.join(' ')}>
        //         <div class="back-face face">
        //             <div className='flashcard-counter'>
        //                 {counter}
        //             </div>

        //             <span>
        //                 {question}
        //             </span>

        //             <TurnButton onClick={() => setFlashcardClasses([...flashcardClasses, 'turned'])}/>
        //         </div>
        //         <div class="front-face face">
        //             <span>
        //                 {question}
        //             </span>

        //             <div className='flashcard-counter'>
        //                 {counter}
        //             </div>

        //             <p>
        //                 {answer}
        //             </p>
                    
        //             {
        //                 flashcardClasses.includes('answered') ?
        //                 <TurnButton onClick={() => setContainerFlashcardClasses([...containerFlashcardClasses, 'passed'])}/>
        //                 :
        //                 <AnswerButtons flashcardClasses={flashcardClasses} setFlashcardClasses={setFlashcardClasses}/>
        //             }
        //         </div>
        //     </div>
        // </div>   
    
}