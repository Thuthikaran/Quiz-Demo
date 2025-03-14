import { useState } from 'react';

const quizData = [
  {
    question: '01. Quel est le ton de votre peau ?',
    choices: ['Froid', 'Chaud', 'Neutre', 'Je ne sais pas'],
  },
  {
    question: '02. Quelle finition de bijou préférez-vous ?',
    choices: ['Argent', 'Doré', 'Rose gold', "Je n'ai pas de préférence"],
  },
  {
    question: '03. Quel type de bijou préférez-vous ?',
    choices: [
      'Fin et délicat',
      'Gros et imposant',
      'Un mélange des deux',
      'Ça dépend de mon humeur',
    ],
  },
  {
    question: '04. Quel type de bijou portez-vous le plus souvent ?',
    choices: ['Bagues', 'Colliers', 'Bracelets', 'Boucles d’oreilles'],
  },
  {
    question: '05. Préférez-vous les bijoux avec ou sans pierres précieuses ?',
    choices: [
      'Avec des pierres précieuses',
      'Sans pierre, designs épurés',
      'Un mélange des deux',
      'Peu importe',
    ],
  },
  {
    question: '06. Quel type de bijoux recherchez-vous ?',
    choices: [
      'Discrets pour le quotidien',
      'Voyants et élégants pour des événements',
      'Un mix des deux selon l’occasion',
      'Je ne sais pas encore',
    ],
  },
  {
    question: '07. Comment aimez-vous porter vos bijoux ?',
    choices: [
      'J’aime accumuler plusieurs bijoux fins',
      'Je préfère porter une seule pièce forte',
      'J’adapte selon ma tenue',
      'Je ne sais pas',
    ],
  },
  {
    question:
      '08. Aimez-vous les bijoux personnalisés avec des initiales ou des symboles significatifs ?',
    choices: [
      'Oui, j’adore la personnalisation',
      'Pas forcément, je préfère des designs classiques',
      'Ça dépend du bijou',
      'Je ne sais pas',
    ],
  },
];

const Quiz = () => {
  const [quiz, setQuiz] = useState(0);

  function handleClick() {
      if (quiz < quizData.length - 1) {
        setQuiz(quiz + 1)
    }
    console.log(quiz);
  }

  function handleBack() {
    if (quiz > 0) {
      setQuiz(quiz - 1);
      console.log(quiz);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1>{quizData[quiz].question}</h1>
        {quizData[quiz].choices.map((choice, index) => (
          <div key={index}>
            <input type="radio" name="myQuiz" value={choice} /> {choice}
          </div>
        ))}
        <div>
          <button
            className="btn bg-[#FDC7E8] text-white p-1 cursor-pointer m-3 rounded-md"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="next-btn bg-[#FDC7E8] text-white p-1 cursor-pointer m-3 rounded-md"
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
