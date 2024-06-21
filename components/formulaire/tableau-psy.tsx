"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"
export function Questionnaire () {
  const [responses, setResponses] = useState<string[]>(new Array(45).fill(''));

  const handleChange = (index: number, value: string) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Responses:', responses);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
        </thead>
        <tbody>
          {[
            'Je ne suis pas bilieux(se).',
            'Je me fais facilement des amis.',
            'J’ai beaucoup d’imagination.',
            'Je fais confiance aux autres.',
            'J’accomplis les tâches avec succès.',
            'Je ne me fâche pas facilement.',
            'J’apprécie beaucoup les grandes réceptions et réunions.',
            'Je ne trompe jamais les autres pour faire les choses à ma façon.',
            'Je n’aime pas le désordre. J’aime ranger.',
            'J’aime prendre en mains les situations et les événements',
            'Je tiens toujours mes promesses.',
            "Je trouve qu'il est facile d'approcher les autres.",
            'Je suis toujours occupé(e), toujours sur la brèche.',
            'J’adore une bonne dispute, une bonne querelle.',
            'Je travaille très dur.',
            "J'aime trop me faire plaisir parfois.",
            "Je suis une personne pleine d’entrain.",
            "Je suis spontané(e). J’agis sans réfléchir.",
            "Je crains le pire.",
            'Je crois que les gens ont fondamentalement de bonnes intentions.',
            "Je ne m’irrite pas facilement.",
            "Je vois dans les choses des beautés que les autres pourraient ne pas remarquer.",
            "Je refuse de tricher pour prendre l’avantage.",
            "J’essaie de commander, de diriger les autres.",
            "J’ai peur d’attirer l’attention sur moi.",
            "Je préfère m’en tenir aux choses que je connais.",
            "Je fais plus que ce que l’on attend de moi.",
            "J’évite les discussions philosophiques.",
            "Je crois que rien n’est absolument vrai ou faux, bon ou mauvais.",
            "J’éprouve de la compassion pour ceux qui n'ont pas la même chance que moi.",
            "Je réfléchis avant d'agir.",
            "Je reste calme sous la pression.",
            "Je ne suis pas intéressé(e) par les discussions théoriques.",
            "Je m'investis toujours beaucoup de temps et d'effort dans mon travail.",
            "Je prends toujours ma revanche sur les autres.",
            "Je ne comprends pas les gens qui réagissent de manière émotionnelle.",
            "Je coopère toujours pleinement - j'encourage les plans des autres.",
            "Je sais m’y prendre pour faire ce qui est à faire.",
            "Je suis proche des autres.",
            "Je crois que les lois devraient être appliquées de façon stricte.",
            "Je me sens capable de prendre les choses en main.",
            "Je valorise mon temps.",
            "J'ai une facilité à comprendre les idées abstraites.",     
            "Je m'investis pleinement dans mon travail.",
            "Je me sens bien parmi mes collègues.",


          ].map((question, index) => (
            <tr key={index}>
              <td>{question}</td>
              {['0', '1', '2', '3', '4'].map((option) => (
                <td key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={responses[index] === option}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Questionnaire;
