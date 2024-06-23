"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface Step2Props {
  onPrev: () => void;
  onNext: () => void;
  onScoreCalculated: (score: number) => void;
}

const Step2: React.FC<Step2Props> = ({ onPrev, onNext, onScoreCalculated }) => {
  const accords = [
    { symbole: "0", description: "Pas du tout d’accord: Si l’énoncé est tout à fait faux ou si vous n’êtes pas du tout d’accord." },
    { symbole: "1", description: "Pas d’accord: Si l’énoncé est généralement faux ou si vous n’êtes pas d’accord." },
    { symbole: "2", description: "Neutre: Si l’énoncé vous est indifférent, si vous ne parvenez pas à vous décider ou si l’énoncé vous semble aussi vrai que faux." },
    { symbole: "3", description: "D’accord: Si l’énoncé est généralement vrai ou si vous êtes d’accord." },
    { symbole: "4", description: "Tout à fait d’accord: Si l’énoncé est tout à fait vrai ou si vous êtes entièrement d’accord." },
  ];

  const questions = [
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
  ];

  const [responses, setResponses] = useState<string[]>(new Array(questions.length).fill(''));

  const handleChange = (index: number, value: string) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Responses:', responses);
    calculateScore();
  };

  const calculateScore = () => {
    let score = 0;
    responses.forEach(response => {
      score += parseInt(response, 10) || 0; // Accumulate the scores
    });
    onScoreCalculated(score); // Pass the score to the parent component
    onNext();
  };

  return (
    <Card className="shadow-lg rounded-lg p-6">
      <h1 className="text-center text-2xl font-bold mb-4">Tableau d'accords</h1>
      <Table className="mb-6">
        <TableCaption className="text-center font-bold">Tableau d'accords</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">degré</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accords.map((accord) => (
            <TableRow key={accord.symbole}>
              <TableCell className="font-medium">{accord.symbole}</TableCell>
              <TableCell>{accord.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Fin du tableau</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <form onSubmit={handleSubmit} className="shadow-lg rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2"></th>
              <th className="border p-2">0</th>
              <th className="border p-2">1</th>
              <th className="border p-2">2</th>
              <th className="border p-2">3</th>
              <th className="border p-2">4</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td className="border p-2">{`${index + 1}. ${question}`}</td>
                {['0', '1', '2', '3', '4'].map((option) => (
                  <td key={option} className="border p-2 text-center">
                    <label className="block w-full h-full cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={responses[index] === option}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="hidden"
                      />
                      <span className={`block w-full h-full p-2 ${responses[index] === option ? 'bg-blue-200' : ''}`}>
                        {option}
                      </span>
                    </label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8 flex justify-between">
          <Button type="button" onClick={onPrev}>Back</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default Step2;
