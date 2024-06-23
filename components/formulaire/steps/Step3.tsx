// components/formulaire/steps/Step3.tsx
"use client";

import { FC } from "react";
import Image from 'next/image';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import RadioForm from "./RadioForm";
import SpecialRadioForm from "./SpecialRadioForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FormSchema = z.object({
  type1: z.enum(["First", "Second", "Third", "Fourth"], {
    required_error: "You need to select a notification type for question 1.",
  }),
  type2: z.enum(["First", "Second", "Third", "Fourth"], {
    required_error: "You need to select a notification type for question 2.",
  }),
  type3: z.enum(["First", "Second", "Third", "Fourth", "Fifth"], {
    required_error: "You need to select a notification type for question 3.",
  }),
  type4: z.enum(["First", "Second", "Third", "Fourth"], {
    required_error: "You need to select a notification type for question 4.",
  }),
  type5: z.enum(["First", "Second", "Third", "Fourth", "Fifth"], {
    required_error: "You need to select a notification type for question 5.",
  }),
  type6: z.enum(["First", "Second", "Third", "Fourth"], {
    required_error: "You need to select a notification type for question 6.",
  }),
  type7: z.enum(["First", "Second", "Third", "Fourth", "Fifth"], {
    required_error: "You need to select a notification type for question 7.",
  }),
  type8: z.enum(["First", "Second", "Third", "Fourth"], {
    required_error: "You need to select a notification type for question 8.",
  }),
  type9: z.enum(["First", "Second", "Third", "Fourth"], {
    required_error: "You need to select a notification type for question 9.",
  }),
  type10: z.enum(["First", "Second", "Third", "Fourth"], {
    required_error: "You need to select a notification type for question 10.",
  }),
  type11: z.enum(["First", "Second", "Third"], {
    required_error: "You need to select a notification type for question 11.",
  }),
  type12: z.enum(["First", "Second", "Third", "Fourth", "Fifth", "Sixth"], {
    required_error: "You need to select a notification type for question 12.",
  }),
  type13: z.enum(["First", "Second", "Third", "Fourth", "Fifth", "Sixth"], {
    required_error: "You need to select a notification type for question 13.",
  }),
  type14: z.enum(["First", "Second", "Third", "Fourth", "Fifth", "Sixth"], {
    required_error: "You need to select a notification type for question 14.",
  }),
  type15: z.enum(["First", "Second", "Third", "Fourth", "Fifth", "Sixth"], {
    required_error: "You need to select a notification type for question 15.",
  }),
  type16: z.enum(["Verte", "Grise"], {
    required_error: "You need to select a category for question 16.",
  }),
  type17: z.enum(["Verte", "Grise"], {
    required_error: "You need to select a category for question 17.",
  }),
  type18: z.enum(["Verte", "Grise"], {
    required_error: "You need to select a category for question 18.",
  }),
  type19: z.enum(["Verte", "Grise"], {
    required_error: "You need to select a category for question 19.",
  }),
});

interface Step3Props {
  onPrev: () => void;
  onNext: () => void;
  onScoreCalculated: (score: number) => void;
}

const Step3: FC<Step3Props> = ({ onPrev, onNext, onScoreCalculated }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const correctAnswers = {
    type1: "Second",
    type2: "Fourth",
    type3: "Second",
    type4: "Second",
    type5: "Second",
    type6: "First",
    type7: "Fourth",
    type8: "Second",
    type9: "Second",
    type10: "Second",
    type11: "First",
    type12: "Second",
    type13: "First",
    type14: "Fifth",
    type15: "Fifth",
    type16: "Verte",
    type17: "Grise",
    type18: "Verte",
    type19: "Grise",
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    let score = 0;
    for (const [key, value] of Object.entries(data)) {
      if (value === correctAnswers[key as keyof typeof data]) {
        score++;
      }
    }
    onScoreCalculated(score);
    onNext();
  };

  return (
    <Card className="shadow-lg rounded-lg p-6">
      <CardHeader>
        <CardTitle className="text-xl text-center">Test IQ</CardTitle>
        <CardDescription className="text-center">
          Answer the following questions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-center">
              <div>
                <h2>Synonyme :</h2>
              </div>
            </div>
            <RadioForm form={form} name="type1" label="1. Lequel des mots ci-dessous a le sens le plus proche du terme « rassurant » ?" a="Compatissant" b="réconfortant" c="explicatif" d="indiscret" />
            <RadioForm form={form} name="type2" label={<span>2. Quel nombre est la suite logique de cette série : <br /> 4 6 9 6 14 6 ... </span>} a="6" b="17" c="19" d="21" />
            <RadioForm form={form} name="type3" label={<span>3. Laquelle des figures de la ligne inférieure devrait se trouver logiquement à l'emplacement du point d'interrogation de la ligne supérieure ? <br /> <Image src='/etoiles.png' width={446} height={67} alt="etoiles" priority /> </span>} a={<span><Image src='/Reponse1.png' width={76} height={68} alt="Reponse1" priority /></span>} b={<span><Image src='/Reponse2.png' width={76} height={68} alt="Reponse2" priority /></span>} c={<span><Image src='/Reponse3.png' width={76} height={68} alt="Reponse3" priority /></span>} d={<span><Image src='/Reponse4.png' width={76} height={68} alt="Reponse4" priority /></span>} e={<span><Image src='/Reponse5.png' width={76} height={68} alt="Reponse5" priority /></span>} />
            <RadioForm form={form} name="type4" label={<span>4. À laquelle des conclusions suivantes les deux propositions ci-dessous mènent-elles avec certitude ? <br /> <ul><li>Aucune des stars de cinéma n’est un comédien.</li><li>Tous les producteurs sont des stars de cinéma.</li></ul></span>} a="Toutes les stars de cinéma sont des comédiens." b="Les comédiens ne sont pas des producteurs." c="Aucune star de cinéma n'est un producteur." d="Quelques producteurs sont des comédiens." />
            <RadioForm form={form} name="type5" label={<span>5. Lequel parmi les cinq cubes ci-dessous résulterait du pliage de ce papier ? <br /> <Image src='/cube.png' width={177} height={133} alt="cube" priority /> </span>} a={<span><Image src='/cube1.png' width={70} height={61} alt="Cube1" priority /></span>} b={<span><Image src='/cube2.png' width={71} height={61} alt="cube2" priority /></span>} c={<span><Image src='/cube3.png' width={71} height={61} alt="cube3" priority /></span>} d={<span><Image src='/cube4.png' width={71} height={61} alt="cube4" priority /></span>} e={<span><Image src='/cube5.png' width={71} height={61} alt="cube5" priority /></span>} />
            <RadioForm form={form} name="type6" label={<span><h1>6. Quelle est la réponse correcte au problème suivant ?</h1> <br /> <p>Tom possède un nouvel ensemble de clubs de golf. Il envoie la balle à une distance moyenne de 100 mètres à l'aide du club 8. Il envoie la balle à une distance moyenne de 108 mètres à l'aide du club 7. Il envoie la balle à une distance moyenne de 114 mètres à l'aide du club 6. Quelle distance la balle va-t-elle parcourir avec le club 5 ?</p> </span>} a="122 mètres" b="120 mètres" c="118 mètres" d="116 mètres" />
            <RadioForm form={form} name="type7" label="7. Quel le terme qui exprime le mieux le contraire du terme « dur » ?" a="lâche" b="amidon" c="fort" d="timide" e="masculin" />
            <RadioForm form={form} name="type8" label="8. L'eau est à un tuyau ce que le/la/l'... est à un câble." a="Fil" b="électricité" c="chauffage" d="gaz" />
            <RadioForm form={form} name="type9" label="9. Quel mot exprime un sentiment de mécontentement ?" a="injustice" b="plainte" c="futile" d="péché" e="discorde" />
            <RadioForm form={form} name="type10" label={<span>10. Laquelle des figures ci-dessous peut être composée à partir des pièces mobiles suivantes ? <br /> <Image src='/figure.png' width={101} height={101} alt="figure" priority /> </span>} a={<span><Image src='/figure1.png' width={101} height={101} alt="figure1" priority /></span>} b={<span><Image src='/figure2.png' width={101} height={101} alt="figure2" priority /></span>} c={<span><Image src='/figure3.png' width={101} height={101} alt="figure3" priority /></span>} d={<span><Image src='/figure4.png' width={101} height={101} alt="figure4" priority /></span>} />
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                LES MATRICES :
              </h1>
            </div>
            <h2 className="text-bold-xl">• Une même consigne pour toutes ces questions : quelle case numérotée complète logiquement la matrice ?</h2>
            <RadioForm form={form} name="type11" label={<span>Question1 : <br /> <Image src='/formes.png' width={275} height={146} alt="formes" priority /> </span>} a={<span><Image src='/formes1.png' width={120} height={81} alt="formes1" priority /></span>} b={<span><Image src='/formes2.png' width={131} height={92} alt="formes2" priority /></span>} c={<span><Image src='/formes3.png' width={116} height={72} alt="formes3" priority /></span>} />
            <RadioForm form={form} name="type12" label={<span>Question2 : <br /> <Image src='/rond&carré.png' width={154} height={156} alt="rond&carré" priority /> </span>} a={<span><Image src='/rond&carré1.png' width={66} height={68} alt="rond&carré1" priority /></span>} b={<span><Image src='/rond&carré2.png' width={73} height={67} alt="rond&carré2" priority /></span>} c={<span><Image src='/rond&carré3.png' width={70} height={69} alt="rond&carré3" priority /></span>} d={<span><Image src='/rond&carré4.png' width={66} height={72} alt="rond&carré4" priority /></span>} e={<span><Image src='/rond&carré5.png' width={79} height={76} alt="rond&carré5" priority /></span>} f={<span><Image src='/rond&carré6.png' width={71} height={77} alt="rond&carré6" priority /></span>} />
            <RadioForm form={form} name="type13" label={<span>Question3 : <br /> <Image src='/secteur.png' width={156} height={161} alt="secteur" priority /> </span>} a={<span><Image src='/secteur1.png' width={71} height={70} alt="secteur1" priority /></span>} b={<span><Image src='/secteur2.png' width={81} height={71} alt="secteur2" priority /></span>} c={<span><Image src='/secteur3.png' width={69} height={71} alt="secteur3" priority /></span>} d={<span><Image src='/secteur4.png' width={73} height={76} alt="secteur4" priority /></span>} e={<span><Image src='/secteur5.png' width={67} height={74} alt="secteur5" priority /></span>} f={<span><Image src='/secteur6.png' width={68} height={68} alt="secteur6" priority /></span>} />
            <RadioForm form={form} name="type14" label={<span>Question4 : <br /> <Image src='/magique.png' width={177} height={187} alt="magique" priority /> </span>} a={<span><Image src='/magique1.png' width={74} height={75} alt="magique1" priority /></span>} b={<span><Image src='/magique2.png' width={78} height={78} alt="magique2" priority /></span>} c={<span><Image src='/magique3.png' width={77} height={80} alt="magique3" priority /></span>} d={<span><Image src='/magique4.png' width={74} height={83} alt="magique4" priority /></span>} e={<span><Image src='/magique5.png' width={77} height={79} alt="magique5" priority /></span>} f={<span><Image src='/magique6.png' width={77} height={84} alt="magique6" priority /></span>} />
            <RadioForm form={form} name="type15" label={<span>Question5 : <br /> <Image src='/carreau.png' width={174} height={179} alt="carreau" priority /> </span>} a={<span><Image src='/carreau1.png' width={79} height={76} alt="carreau1" priority /></span>} b={<span><Image src='/carreau2.png' width={75} height={77} alt="carreau2" priority /></span>} c={<span><Image src='/carreau3.png' width={74} height={76} alt="carreau3" priority /></span>} d={<span><Image src='/carreau4.png' width={74} height={80} alt="carreau4" priority /></span>} e={<span><Image src='/carreau5.png' width={79} height={82} alt="carreau5" priority /></span>} f={<span><Image src='/carreau6.png' width={77} height={80} alt="carreau6" priority /></span>} />
            <span>
              <h1>Dans cet exercice de découverte des rôles et des interrelations de cut-e, <br /> six diagrammes appartenant chacun à la catégorie grise ou verte sont présentés. <br /> Chacune des catégories possède une règle commune. Votre tâche consiste à déterminer <br /> la catégorie de chacun des quatre diagrammes disposés en dessous.</h1>
              <Image src='/diagrammes.png' width={417} height={256} alt="diagrammes" priority />
            </span>
            <SpecialRadioForm form={form} name="type16" label={<span><Image src='/diagrammes1.png' width={145} height={139} alt="diagrammes1" priority /></span>} a="Verte" b="Grise" />
            <SpecialRadioForm form={form} name="type17" label={<span><Image src='/diagrammes2.png' width={122} height={139} alt="diagrammes2" priority /></span>} a="Verte" b="Grise" />
            <SpecialRadioForm form={form} name="type18" label={<span><Image src='/diagrammes3.png' width={124} height={136} alt="diagrammes3" priority /></span>} a="Verte" b="Grise" />
            <SpecialRadioForm form={form} name="type19" label={<span><Image src='/diagrammes4.png' width={114} height={140} alt="diagrammes4" priority /></span>} a="Verte" b="Grise" />
            <div className="mt-8 flex justify-between">
              <Button type="button" onClick={onPrev}>Back</Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Step3;
