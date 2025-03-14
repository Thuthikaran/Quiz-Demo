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
    choices: ['Fin et délicat', 'Gros et imposant', 'Un mélange des deux', 'Ça dépend de mon humeur'],
  },
  {
    question: '04. Quel type de bijou portez-vous le plus souvent ?',
    choices: ['Bagues', 'Colliers', 'Bracelets', 'Boucles d’oreilles'],
  },
  {
    question: '05. Préférez-vous les bijoux avec ou sans pierres précieuses ?',
    choices: ['Avec des pierres précieuses', 'Sans pierres, designs épurés', 'Un mélange des deux', 'Peu importe'],
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
    question: '08. Aimez-vous les bijoux personnalisés avec des initiales ou des symboles significatifs ?',
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
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (quiz === quizData.length) {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
      }
      // Handle email submission (e.g., send to server or display recommendations)
      alert(`Merci! Vos recommandations seront envoyées à ${email}.`);
      return;
    }

    if (userAnswers[quiz] === null) {
      alert('Veuillez sélectionner une réponse avant de continuer.');
      return;
    }
    if (quiz < quizData.length - 1) {
      setQuiz(quiz + 1);
    } else {
      setQuiz(quiz + 1); // Mark quiz as completed
    }
  };

  const handleBack = () => {
    if (quiz > 0) {
      setQuiz(quiz - 1);
    }
  };

  const handleAnswer = (choice) => {
    const newAnswers = [...userAnswers];
    newAnswers[quiz] = choice;
    setUserAnswers(newAnswers);
    console.log(userAnswers);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        {quiz === quizData.length ? (
          <div className='flex flex-col'>
            <label htmlFor="email-input">
              Veuillez entrer votre adresse e-mail pour recevoir vos recommandations personnalisées.
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-2 border rounded"
            />
          </div>
        ) : (
          <div>
            <h1 className="py-5 text-xl font-bold">{quizData[quiz].question}</h1>
            {quizData[quiz].choices.map((choice, index) => (
              <div key={index} className="py-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="myQuiz"
                    value={choice}
                    checked={userAnswers[quiz] === choice}
                    onChange={() => handleAnswer(choice)}
                    className="form-radio text-[#FDC7E8]"
                  />
                  <span>{choice}</span>
                </label>
              </div>
            ))}
          </div>
        )}
        <div className="flex space-x-4">
          {quiz < quizData.length && (
            <button
              className="btn bg-[#FDC7E8] text-white font-bold p-2 cursor-pointer m-3 rounded-md hover:bg-[#FFA7D1] transition-colors"
              onClick={handleBack}
              disabled={quiz === 0}
            >
              Précédent
            </button>
          )}
          <button
            className="next-btn bg-[#FDC7E8] text-white font-bold p-2 cursor-pointer m-3 rounded-md hover:bg-[#FFA7D1] transition-colors"
            onClick={handleClick}
          >
            {quiz === quizData.length - 1 ? 'Terminer' : 'Suivant'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
