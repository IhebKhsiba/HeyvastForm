import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import RadioForm from "./TestFrenchRadioForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FormSchema = z.object(
  Object.fromEntries(
    Array(48).fill(0).map((_, index) => [
      `type${index + 1}`,
      z.enum(["First", "Second", "Third", "Fourth"], {
        required_error: `You need to select a notification type for question ${index + 1}.`,
      }),
    ])
  )
);

interface TestFrenchProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  onScoreCalculated: (score: number) => void;
}

const TestFrench: React.FC<TestFrenchProps> = ({ onNext, onPrev, onScoreCalculated }) => {
  const methods = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const correctAnswers = {
    type1: "First",
    type2: "Fourth",
    type3: "First",
    type4: "Second",
    type5: "Fourth",
    type6: "Second",
    type7: "Second",
    type8: "First",
    type9: "Third",
    type10: "First",
    type11: "Second",
    type12: "First",
    type13: "Third",
    type14: "Second",
    type15: "First",
    type16: "Second",
    type17: "Fourth",
    type18: "First",
    type19: "Third",
    type20: "Fourth",
    type21: "First",
    type22: "First",
    type23: "Third",
    type24: "Third",
    type25: "Third",
    type26: "Fourth",
    type27: "Fourth",
    type28: "Third",
    type29: "Third",
    type30: "Second",
    type31: "Second",
    type32: "Second",
    type33: "Second",
    type34: "Third",
    type35: "First",
    type36: "First",
    type37: "Third",
    type38: "Second",
    type39: "Third",
    type40: "First",
    type41: "First",
    type42: "Third",
    type43: "First",
    type44: "First",
    type45: "First",
    type46: "First",
    type47: "First",
    type48: "Second"
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    let score = 0;
    for (const [key, value] of Object.entries(data)) {
      if (value === correctAnswers[key as keyof typeof correctAnswers]) {
        score++;
      }
    }
    onScoreCalculated(score);
    onNext(data);
   
  };

  return (
    <Card className="shadow-lg rounded-lg p-6">
      <CardHeader>
      
        <CardTitle className="text-2xl text-center">Testez vos connaissances en français.</CardTitle>
        <CardTitle className="text-2xl text-center">Bonne chance!</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Expressions françaises</h1>
            </div>
            <RadioForm name="type1" label="1. « Quand les poules auront des dents »" a="Jamais" b="Toujours" c="Souvent" d="Rarement" qt="ef" correctAnswer="First" />
            <RadioForm name="type2" label="2. « Faire la fine bouche »" a="Être ridicule" b="Être malin" c="Faire des exercices de prononciation" d="Se montrer difficile" qt="ef" correctAnswer="Fourth" />
            <RadioForm name="type3" label="3. « Lever le pied »" a="Ralentir" b="Être maladroit" c="Hésiter" d="Danser" qt="ef" correctAnswer="First" />
            <RadioForm name="type4" label="4. « Faire un tour »" a="Dessiner un rond" b="Se promener" c="Faire un nœud " d="Construire une tour" qt="ef" correctAnswer="Second" />
            <RadioForm name="type5" label="5. « À toute allure »" a="Lentement" b="Élégamment" c="Immédiatement" d="Rapidement" qt="ef" correctAnswer="Fourth" />
            <RadioForm name="type6" label="6. « N'en faire qu'à sa tête »" a="Être en colère" b="Être têtu" c="Être réaliste" d="Être avare" qt="ef" correctAnswer="Second" />
            <RadioForm name="type7" label="7. « Sauter aux yeux »" a="C'est bizarre!" b="C'est évident!" c="C'est laid!" d="C'est incroyable" qt="ef" correctAnswer="Second" />
            <RadioForm name="type8" label="8. « Avoir du nez »" a="Avoir de l'intuition" b="Sentir bon" c="Avoir un grand nez" d="Être curieux" qt="ef" correctAnswer="First" />
            <RadioForm name="type9" label="9. « Tenter le coup »" a="Abondonner" b="Boire un verre" c="Essayer" d="Aider une personne" qt="ef" correctAnswer="Third" />
            <RadioForm name="type10" label="10. « Mettre les bouchées doubles »" a="Aller plus vite" b="Manger plus vite" c="Augmenter les quantités" d="Diviser en deux" qt="ef" correctAnswer="First" />

            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Conjugaison</h1>
            </div>
            <RadioForm name="type11" label="11. Quelle forme est correcte?" a="J'apele" b="J'appelle" c="J'appele" d="J'apelle" qt="c" correctAnswer="Second" />
            <RadioForm name="type12" label="12. ... de te plaindre !" a="Arrête" b="Arrêtes" c="Arête" d="Arêtes" qt="c" correctAnswer="First" />
            <RadioForm name="type13" label="13. À quel temps est la forme « Je courrais» ?" a="Imparfait" b="Futur" c="Conditionnel" d="Subjonctif" qt="c" correctAnswer="Third" />
            <RadioForm name="type14" label="14. Quelle forme est correcte ?" a="J'envoierai" b="J'enverrai" c="J'enverai" d="J'envoyerai" qt="c" correctAnswer="Second" />
            <RadioForm name="type15" label="15. Elle a ... attentivement les leçons." a="écouté" b="écoutée" c="écoutés" d="écoutées" qt="c" correctAnswer="First" />
            <RadioForm name="type16" label="16. Quelle est la mauvaise réponse?" a="Elles se sont disputées" b="Elles se sont photographié" c="Elles se sont téléphoné" d="Elles se sont lavé les cheveux" qt="c" correctAnswer="Second" />
            <RadioForm name="type17" label="17. Elle se sont ... compte de leurs erreurs." a="rendue" b="rendues" c="rendus" d="rendu" qt="c" correctAnswer="Fourth" />
            <RadioForm name="type18" label="18. Les chansons que tu m'as fait ... sont géniales !" a="écouter" b="écoutées" c="écouté" d="écoutés" qt="c" correctAnswer="First" />
            <RadioForm name="type19" label="19. Je regrette qu'il ... pris cette décision." a="es" b="est" c="ait" d="aie" qt="c" correctAnswer="Third" />
            <RadioForm name="type20" label="20. ...! Tu vas réussir." a="Va y" b="Va-y" c="Vas y" d="Vas-y" qt="c" correctAnswer="Fourth" />

            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Vocabulaire</h1>
            </div>
            <RadioForm name="type21" label="21. J'ai laissé la bougie se ..." a="consumer." b="consumé." c="consommer." d="consomé." qt="v" correctAnswer="First" />
            <RadioForm name="type22" label="22. Cette lettre est ... de Mme la Présidente" a="à l'attention" b="à l'intention" c="à l'atention" d="à l'inttention" qt="v" correctAnswer="First" />
            <RadioForm name="type23" label="23. Il a fait ... dans la salle de classe." a="eruption" b="éruption" c="irruption" d="iruption" qt="v" correctAnswer="Third" />
            <RadioForm name="type24" label="24. C'est un ... docteur en philosophie." a="imminent" b="éminant" c="éminent" d="imminant" qt="v" correctAnswer="Third" />
            <RadioForm name="type25" label="25. Il n'a jamais été très ..." a="social" b="sociaux" c="sociable" d="socialisable" qt="v" correctAnswer="Third" />
            <RadioForm name="type26" label="26. Les explications de ce professeur sont ..." a="compréhensibles" b="compréhensives" c="compréhensible" d="compréhensif" qt="v" correctAnswer="First" />
            <RadioForm name="type27" label="27. J'aimerais avoir ... de temps pour étudier le français." a="d'avantages" b="davantages" c="d'avantage" d="davantage" qt="v" correctAnswer="Fourth" />
            <RadioForm name="type28" label="28. On ne ... trouve nulle part" a="l'a" b="là" c="la" d="l'as" qt="v" correctAnswer="Third" />
            <RadioForm name="type29" label="29. Cette chanteuse a une ... incroyable" a="voie" b="vois" c="voix" d="voit" qt="v" correctAnswer="Third" />
            <RadioForm name="type30" label="30. Je vous ... ce paquet de la part de Sophie" a="emmène" b="apporte" c="amène" d="emporte" qt="v" correctAnswer="Second" />

            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Orthographe</h1>
            </div>
            <RadioForm name="type31" label="31. J'ai bu deux verres et ..." a="demie." b="demi." c="demis." d="demies." qt="o" correctAnswer="Second" />
            <RadioForm name="type32" label="32. ... sont les horaires de la lignes 1 ?" a="Quelles" b="Quels" c="Qu'elles" d="Quelle" qt="o" correctAnswer="Second" />
            <RadioForm name="type33" label="33. J'ai arrêté d'apprendre l'... c'était trop difficile." a="Alemand" b="allemand" c="Allemand" d="alemands" qt="o" correctAnswer="Second" />
            <RadioForm name="type34" label="34. Quel nombre est mal écrit ?" a="Six cents millions" b="Six mille un" c="Quatre-vingts-sept" d="Huit cent vingt" qt="o" correctAnswer="Third" />
            <RadioForm name="type35" label="35. Elle a mis des rideaux" a="bleu foncé" b="bleu foncés" c="bleus foncé" d="bleus foncés" qt="o" correctAnswer="First" />
            <RadioForm name="type36" label="36. Le pluriel de « savoir-faire » est: " a="Des savoir-faires" b="Des savoirs-faire" c="Des savoirs-faires" d="Des savoir-faire" qt="o" correctAnswer="First" />
            <RadioForm name="type37" label="37. Ma femme et moi, on est ... au restaurant." a="allé" b="allée" c="allés" d="allées" qt="o" correctAnswer="Third" />
            <RadioForm name="type38" label="38. « Les cours de francais ont lieu les ... » " a="jeudi soir." b="jeudis soir." c="jeudi soirs." d="jeudis soirs." qt="o" correctAnswer="Second" />
            <RadioForm name="type39" label="39. Ils veulent ... comprendre le subjonctif." a="tout" b="touts" c="tous" d="toutes" qt="o" correctAnswer="Third" />
            <RadioForm name="type40" label="40. Ces billets d'avion coûtent ..." a="cher." b="chers." c="chère." d="chères." qt="o" correctAnswer="First" />

            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Prononciation</h1>
            </div>
            <RadioForm name="type41" label="41. Il a couru ... de 10 km aujourd'hui" a="[ply]" b="[plys]" c="[plyz]" d="[py]" qt="p" correctAnswer="First" />
            <RadioForm name="type42" label="42. Quel mot commence par un « h » muet ?" a="haricot" b="hauteur" c="hôpital" d="héros" qt="p" correctAnswer="Third" />
            <RadioForm name="type43" label="43. Quel mot commence par un « h » aspiré ?" a="hibou" b="histoire" c="hôtel" d="heure" qt="p" correctAnswer="First" />
            <RadioForm name="type44" label="44. Comment prononcer le « x » dans « sixième » ?" a="[z]" b="[s]" c="[ks]" d="[gz]" qt="p" correctAnswer="First" />
            <RadioForm name="type45" label="45. Comment prononcez-vous le « x » dans « Bruxelles » ?" a="[s]" b="[z]" c="[ks]" d="[gz]" qt="p" correctAnswer="First" />
            <RadioForm name="type46" label={<span>46. Comment se prononce le mot « tous » dans cette phrase ? <br /> Ils parlent tous anglais </span> } a="[tus]" b="[tuz]" c="[tu]" d="[tut]" qt="p" correctAnswer="First" />
            <RadioForm name="type47" label={<span> 47. Comment prononcez-vous le mot « plus » dans cette phrase ? <br /> J'en voudrais plus, s'il vous plait. </span>} a="[plys]" b="[ply]" c="[plyz]" d="[py]" qt="p" correctAnswer="First" />
            <RadioForm name="type48" label="48. Comment prononcez-vous les lettres « en » dans le mot: « examen » ?" a="[ɑ̃]" b="[ɛ̃ ]" c="[ɛ]" d="[i.n]" qt="p" correctAnswer="Second" />

            <div className="mt-8 flex justify-between">
              <Button type="button" onClick={onPrev}>Back</Button>
              <Button type="submit">Submit</Button>
            </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    );
  };

  export default TestFrench;
