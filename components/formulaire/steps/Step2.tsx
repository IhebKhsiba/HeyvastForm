"use client";

import { useState, useEffect, ChangeEvent } from 'react';
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
import { 
  Card,
  CardTitle,


 } from "@/components/ui/card";

interface Step2Props {
  onPrev: () => void;
  onNext: () => void;
 
  experience:(experience :number) => void
  conscience:(conscience :number) => void
  extraversion:(extraversion :number) => void
  agreabilite:(agreabilite :number) => void
  nervosisme:(nervosisme :number) => void
}

const Step2: React.FC<Step2Props> = ({ onPrev, onNext ,experience, conscience, agreabilite, extraversion, nervosisme}) => {
  const accords = [
    { symbole: "0", description: "Pas du tout d’accord: Si l’énoncé est tout à fait faux ou si vous n’êtes pas du tout d’accord." },
    { symbole: "1", description: "Pas d’accord: Si l’énoncé est généralement faux ou si vous n’êtes pas d’accord." },
    { symbole: "2", description: "Neutre: Si l’énoncé vous est indifférent, si vous ne parvenez pas à vous décider ou si l’énoncé vous semble aussi vrai que faux." },
    { symbole: "3", description: "D’accord: Si l’énoncé est généralement vrai ou si vous êtes d’accord." },
    { symbole: "4", description: "Tout à fait d’accord: Si l’énoncé est tout à fait vrai ou si vous êtes entièrement d’accord." },
  ];


  type TableQuestions = {id: number, type: number, q: String, p: number}[];

  
  const [questions, setQuestions] = useState<TableQuestions>([
    {id: 1,  type: 2, q:'Je ne suis pas bilieux(se).' , p: 0},
    {id: 2, type: 1, q: 'Je me fais facilement des amis.', p: 0},
    {id: 3, type: 4, q: 'J’ai beaucoup d’imagination.', p: 0},
    {id: 4, type: 1, q: 'Je fais confiance aux autres.', p: 0},
    {id: 5, type: 4, q: 'J’accomplis les tâches avec succès.', p: 0},
    {id: 6, type: 0, q: 'Je ne me fâche pas facilement.', p: 0},
    {id: 7, type: 1, q: 'J’apprécie beaucoup les grandes réceptions et réunions.', p: 0},
    {id: 8, type: 0, q: 'Je ne trompe jamais les autres pour faire les choses à ma façon.', p: 0},
    {id: 9, type: 3, q: 'Je n’aime pas le désordre. J’aime ranger.', p: 0},
    {id: 10, type: 3, q: 'J’aime prendre en mains les situations et les événements', p: 0},
    {id: 11, type: 2, q: 'Je tiens toujours mes promesses.', p: 0},
    {id: 12, type: 1, q: "Je trouve qu'il est facile d'approcher les autres.", p: 0},
    {id: 13, type: 0, q: 'Je suis toujours occupé(e), toujours sur la brèche.', p: 0},
    {id: 14, type: 0, q: 'J’adore une bonne dispute, une bonne querelle.', p: 0},
    {id: 15, type: 3, q: 'Je travaille très dur.', p: 0},
    {id: 16, type: 2, q: "J'aime trop me faire plaisir parfois.", p: 0},
    {id: 17, type: 0, q: "Je suis une personne pleine d’entrain.", p: 0},
    {id: 18, type: 1, q: "Je suis spontané(e). J’agis sans réfléchir.", p: 0},
    {id: 19, type: 0, q: "Je crains le pire.", p: 0},
    {id: 20, type: 2, q: 'Je crois que les gens ont fondamentalement de bonnes intentions.', p: 0},
    {id: 21, type: 0, q: "Je ne m’irrite pas facilement.", p: 0},
    {id: 22, type: 4, q: "Je vois dans les choses des beautés que les autres pourraient ne pas remarquer.", p: 0},
    {id: 23, type: 0, q: "Je refuse de tricher pour prendre l’avantage.", p: 0},
    {id: 24, type: 0, q: "J’essaie de commander, de diriger les autres.", p: 0},
    {id: 25, type: 0, q: "J’ai peur d’attirer l’attention sur moi.", p: 0},
    {id: 26, type: 3, q: "Je préfère m’en tenir aux choses que je connais.", p: 0},
    {id: 27, type: 2, q: "Je fais plus que ce que l’on attend de moi.", p: 0},
    {id: 28, type: 2, q: "J’évite les discussions philosophiques.", p: 0},
    {id: 29, type: 4, q: "Je crois que rien n’est absolument vrai ou faux, bon ou mauvais.", p: 0},
    {id: 30, type: 4, q: "J’éprouve de la compassion pour ceux qui n'ont pas la même chance que moi.", p: 0},
    {id: 31, type: 0, q: "Je réfléchis avant d'agir.", p: 0},
    {id: 32, type: 3, q: "Je reste calme sous la pression.", p: 0},
    {id: 33, type: 0, q: "Je ne suis pas intéressé(e) par les discussions théoriques.", p: 0},
    {id: 34, type: 0, q: "Je m'investis toujours beaucoup de temps et d'effort dans mon travail.", p: 0},
    {id: 35, type: 0, q: "Je prends toujours ma revanche sur les autres.", p: 0},
    {id: 36, type: 1, q: "Je ne comprends pas les gens qui réagissent de manière émotionnelle.", p: 0},
    {id: 37, type: 1, q: "Je coopère toujours pleinement - j'encourage les plans des autres.", p: 0},
    {id: 38, type: 3, q: "Je sais m’y prendre pour faire ce qui est à faire.", p: 0},
    {id: 39, type: 2, q: "Je suis proche des autres.", p: 0},
    {id: 40, type: 3, q: "Je crois que les lois devraient être appliquées de façon stricte.", p: 0},
    {id: 41, type: 0, q: "Je me sens capable de prendre les choses en main.", p: 0},
    {id: 42, type: 0, q: "Je valorise mon temps.", p: 0},
    {id: 43, type: 1, q: "J'ai une facilité à comprendre les idées abstraites.", p: 0},
    {id: 44, type: 1, q: "Je m'investis pleinement dans mon travail.", p: 0},
    {id: 45, type: 1, q: "Je me sens bien parmi mes collègues.", p: 0},
  ])

  

  const [responses, setResponses] = useState<string[]>(new Array(questions.length).fill(''));

  const handleChange = (id: number, index: number, event: ChangeEvent) => {
    let value = event.target.value;
    console.log(value)
    setQuestions(prev => {
      return prev.map(question => {
        if(question.id === id){
          switch(value){
            case "0":
              question.p = 0;
              break;
            case "1":
              question.p = 25;
              break;
            case "2":
              question.p = 50;
              break;
            case "3":
              question.p = 75;
              break;
            case "4":
              question.p = 100;
              break;
          }
        }
  
        return question;
      })
    })
    // questions = questions.map(question => {
    //   if(question.id === id){
    //     switch(value){
    //       case "0":
    //         question.p = 0;
    //         break;
    //       case "1":
    //         question.p = 25;
    //         break;
    //       case "2":
    //         question.p = 50;
    //         break;
    //       case "3":
    //         question.p = 75;
    //         break;
    //       case "4":
    //         question.p = 100;
    //         break;
    //     }
    //   }

    //   return question;
    // })

    // console.log(questions)

    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
    // console.log('Updated Responses:', newResponses); // Log updated responses
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Final Responses:', responses); // Log final responses before calculating score
    calculateScore();
  };

  const calculatePercentage = (array: TableQuestions) => {
    if(array.length <= 0) return 0;
    let sum = 0;
    array.forEach(q => sum += q.p);
    return sum / array.length;
  }

  const calculateScore = () => {
    console.log(questions)
    let res = {
      oe: 0,
      c: 0,
      e: 0,
      a: 0,
      n: 0
    }
    let oeqs = questions.filter(q => q.type === 4);
    let cqs = questions.filter(q => q.type === 3);
    let eqs = questions.filter(q => q.type === 2);
    let aqs = questions.filter(q => q.type === 1);
    let nqs = questions.filter(q => q.type === 0);

    console.log(oeqs)

    res.oe = calculatePercentage(oeqs);
    res.c = calculatePercentage(cqs);
    res.e = calculatePercentage(eqs);
    res.a = calculatePercentage(aqs);
    res.n = calculatePercentage(nqs);
    
    console.log(res)
    // prev.oe = sum;


    
    // let score = 0;
    // responses.forEach(response => {
    //   score += parseInt(response) || 0; // Accumulate the scores
    //   console.log('CScore:', score); // Debugging: log the calculated score
    // });
    // console.log('Calculated Score:', score); // Debugging: log the calculated score



     experience(res.oe)
     conscience(res.c)
     extraversion(res.e)
     agreabilite(res.a)
     nervosisme(res.n)
      // Pass the score to the parent component
     onNext();
    
  };

  return (
    <Card className="shadow-lg rounded-lg p-6">
       <CardTitle className="text-2xl text-center">Test Psychotechnique.</CardTitle>
       <CardTitle className="text-2xl text-center">Parlons un peu de vous.</CardTitle>
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
                <td className="border p-2">{`${index + 1}. ${question.q}`}</td>
                {['0', '1', '2', '3', '4'].map((option) => (
                  <td key={option} className="border p-2 text-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      data-id={question.id}
                      checked={responses[index] === option}
                      onChange={(e) => handleChange(question.id, index, e)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8 flex justify-between">
          <Button type="button" onClick={onPrev}>Retour</Button>
          <Button type="submit">Suivant</Button>
        </div>
      </form>
    </Card>
  );
};

export default Step2;

