"use client"

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button"
import RadioForm from "./Fourth-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { create } from '@/actions/resultat'


const FormSchema = z.object(
  Object.fromEntries(
    [].map((question, index) => [
      `type${index + 1}`,
      z.enum(["First", "Second", "Third", "Fourth"], {
        required_error: `You need to select a notification type for question ${index + 1}.`,
      }),
    ])
  )
);



export function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  

  

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submited")
    
    let questions_ef = document.querySelectorAll(".qt-ef[correct='1']")
    let questions_c = document.querySelectorAll(".qt-c[correct='1']")
    let questions_v = document.querySelectorAll(".qt-v[correct='1']")
    let questions_o = document.querySelectorAll(".qt-o[correct='1']")
    let questions_p = document.querySelectorAll(".qt-p[correct='1']")
    let result_final = questions_ef.length + questions_c.length + questions_v.length + questions_o.length + questions_p.length
    console.log(questions_ef)
    create({
      expressionfrancaise: questions_ef.length,
      conjugaison: questions_c.length,
      vocabulaire: questions_v.length,
      orthographe: questions_o.length,
      prononciation: questions_p.length,
      final: result_final,
      user: {id: "1"}
    }).then(data => {
      console.log(data)
    })
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

      <div className="flex justify-center ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Expressions françaises</h1>
      </div>

         <RadioForm form={form} name="type1" label="1. « Quand les poules auront des dents »" a="Jamais" b="Toujours" c="Souvent" d="Rarement" qt="ef" correctAnswer="First" /> 
         <RadioForm form={form} name="type2" label="2. « Faire la fine bouche »" a="Être ridicule" b="Être malin" c="Faire des exercices de prononciation" d="Se montrer difficile" qt="ef" correctAnswer="Fourth"  />
         <RadioForm form={form} name="type3" label="3. « Lever le pied »" a="Ralentir" b="Être maladroit" c="Hésiter" d="Danser" qt="ef"  correctAnswer="First" />
         <RadioForm form={form} name="type4" label="4. « Faire un tour »" a="Dessiner un rond" b="Se promener" c="Faire un nœud " d="Construire une tour" qt="ef" correctAnswer="Second" />
         <RadioForm form={form} name="type5" label="5. « À toute allure »" a="Lentement" b="Élégamment" c="Immédiatement" d="Rapidement" qt="ef" correctAnswer="Fourth" />
         <RadioForm form={form} name="type6" label="6. « N'en faire qu'à sa tête »" a="Être en colère" b="Être têtu" c="Être réaliste" d="Être avare" qt="ef" correctAnswer="Second" />
         <RadioForm form={form} name="type7" label="7. « Sauter aux yeux »" a="C'est bizarre!" b="C'est évident!" c="C'est laid!" d="C'est incroyable" qt="ef" correctAnswer="Second" />
         <RadioForm form={form} name="type8" label="8. « Avoir du nez »" a="Avoir de l'intuition" b="Sentir bon" c="Avoir un grand nez" d="Être curieux" qt="ef" correctAnswer="First" />
         <RadioForm form={form} name="type9" label="9. « Tenter le coup »" a="Abondonner" b="Boire un verre" c="Essayer" d="Aider une personne" qt="ef" correctAnswer="Third" />
         <RadioForm form={form} name="type10" label="10. « Mettre les bouchées doubles »" a="Aller plus vite" b="Manger plus vite" c="Augmenter les quantités" d="Diviser en deux" qt="ef" correctAnswer="First" />

        <div className="flex justify-center ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Conjugaison</h1>
        </div>

        <RadioForm form={form} name="type11" label="11.Quelle forme est correcte?" a="J'apele" b="J'appelle" c="J'appelle" d="J'apelle" qt="c" correctAnswer="Second" />
        <RadioForm form={form} name="type12" label="12. ... de te plaindre !" a="Arrête" b="Arrêtes" c="Arête" d="Arêtes" qt="c" correctAnswer="First" /> 
        <RadioForm form={form} name="type13" label="13. À quel temps est la forme « Je courrais» ?" a="Imparfait" b="Futur" c="Conditionnel" d="Subjonctif" qt="c" correctAnswer="Third" /> 
        <RadioForm form={form} name="type14" label="14. Quelle forme est correcte ?" a="J'envoierai" b="J'enverrai" c="J'enverai" d="J'envoyerai" qt="c" correctAnswer="Second" /> 
        <RadioForm form={form} name="type15" label="15. Elle a ... attentivement les leçons." a="écouté" b="écoutée" c="écoutés" d="écoutées" qt="c" correctAnswer="First" /> 
        <RadioForm form={form} name="type16" label="16. Quelle est la mauvaise réponse?" a="Elles se sont disputées" b="Elles se sont photographié" c="Elles se sont téléphoné" d="Elles se sont lavé les cheveux" qt="c" correctAnswer="Second" /> 
        <RadioForm form={form} name="type17" label="17. Elle se sont ... compte de leurs erreurs." a="rendue" b="rendues" c="rendus" d="rendu" qt="c" correctAnswer="Fourth" /> 
        <RadioForm form={form} name="type18" label="18. Les chansons que tu m'as fait ... sont géniales !" a="écouter" b="écoutées" c="écouté" d="écoutés" qt="c" correctAnswer="First" /> 
        <RadioForm form={form} name="type19" label="19. Je regrette qu'il ... pris cette décision." a="es" b="est" c="ait" d="aie" qt="c" correctAnswer="Third" /> 
        <RadioForm form={form} name="type20" label="20. ...! Tu vas réussir." a="Va y" b="Va-y" c="Vas y" d="Vas-y" qt="c" correctAnswer="Fourth" />  

        <div className="flex justify-center ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Vocabulaire</h1>
        </div>

        <RadioForm form={form} name="type21" label="21. J'ai laissé la bougie se ..." a="consumer." b="consumé." c="consommer." d="consomé." qt="v" correctAnswer="First" />
        <RadioForm form={form} name="type22" label="22. Cette lettre est ... de Mme la Présidente" a="à l'attention" b="à l'intention" c="à l'atention" d="à l'inttention" qt="v" correctAnswer="First" /> 
        <RadioForm form={form} name="type23" label="23. Il a fait ... dans la salle de classe." a="eruption" b="éruption" c="irruption" d="iruption" qt="v" correctAnswer="Third" /> 
        <RadioForm form={form} name="type24" label="24. C'est un ... docteur en philosophie." a="imminent" b="éminant" c="éminent" d="imminant" qt="v" correctAnswer="Third" /> 
        <RadioForm form={form} name="type25" label="25. Il n'a jamais été très ..." a="social" b="sociaux" c="sociable" d="socialisable" qt="v" correctAnswer="Third" /> 
        <RadioForm form={form} name="type26" label="26. Les explications de ce professeur sont ..." a="compréhensibles" b="compréhensives" c="compréhensible" d="compréhensif" qt="v" correctAnswer="First" /> 
        <RadioForm form={form} name="type27" label="27. J'aimerais avoir ... de temps pour étudier le français." a="d'avantages" b="davantages" c="d'avantage" d="davantage" qt="v" correctAnswer="Fourth" /> 
        <RadioForm form={form} name="type28" label="28. On ne ... trouve nulle part" a="l'a" b="là" c="la" d="l'as" qt="v" correctAnswer="Third" /> 
        <RadioForm form={form} name="type29" label="29. Cette chanteuse a une ... incroyable" a="voie" b="vois" c="voix" d="voit" qt="v" correctAnswer="Third" /> 
        <RadioForm form={form} name="type30" label="30. Je vous ... ce paquet de la part de Sophie" a="emmène" b="apporte" c="amène" d="emporte" qt="v" correctAnswer="Second" />  

        <div className="flex justify-center ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Orthographe</h1>
        </div>

        <RadioForm form={form} name="type31" label="31. J'ai bu deux verres et ..." a="demie." b="demi." c="demis." d="demies." qt="o" correctAnswer="Second" /> 
        <RadioForm form={form} name="type32" label="32. ... sont les horaires de la lignes 1 ?" a="Quelles" b="Quels" c="Qu'elles" d="Quelle" qt="o" correctAnswer="Second" />
        <RadioForm form={form} name="type33" label="33. J'ai arrêté d'apprendre l'... c'était trop difficile." a="Alemand" b="allemand" c="Allemand" d="alemands" qt="o" correctAnswer="Second" />
        <RadioForm form={form} name="type34" label="34. Quel nombre est mal écrit ?" a="Six cents millions" b="Six mille un" c="Quatre-vingts-sept" d="Huit cent vingt" qt="o" correctAnswer="Third" />
        <RadioForm form={form} name="type35" label="35. Elle a mis des rideaux" a="bleu foncé" b="bleu foncés" c="bleus foncé" d="bleus foncés" qt="o" correctAnswer="First" />
        <RadioForm form={form} name="type36" label="36. Le pluriel de « savoir-faire » est: " a="Des savoir-faires" b="Des savoirs-faire" c="Des savoirs-faires" d="Des savoir-faire" qt="o" correctAnswer="First" />
        <RadioForm form={form} name="type37" label="37. Ma femme et moi, on est ... au retaurant." a="allé" b="allée" c="allés" d="allées" qt="o" correctAnswer="Third" />
        <RadioForm form={form} name="type38" label="38. « Les cours de francais ont lieu les ... » " a="jeudi soir." b="jeudis soir." c="jeudi soirs." d="jeudis soirs." qt="o" correctAnswer="Second" />
        <RadioForm form={form} name="type39" label="39. Ils veulent ... comprendre le subjonctif." a="tout" b="touts" c="tous" d="toutes" qt="o" correctAnswer="Third" />
        <RadioForm form={form} name="type40" label="40. Ces billets d'avion coûtent ..." a="cher." b="chers." c="chère." d="chères." qt="o" correctAnswer="First" />

        <div className="flex justify-center ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Prononciation</h1>
        </div>

        <RadioForm form={form} name="type41" label="41. Il a couru ... de 10 km aujourd'hui" a="[ply]" b="[plys]" c="[plyz]" d="[py]" qt="p" correctAnswer="First" />
        <RadioForm form={form} name="type42" label="42. Quel mot commence par un « h » muet ?" a="haricot" b="hauteur" c="hôpital" d="héros" qt="p" correctAnswer="Third" /> 
        <RadioForm form={form} name="type43" label="43. Quel mot commence par un « h » aspiré ?" a="hibou" b="histoire" c="hôtel" d="heure" qt="p" correctAnswer="First" /> 
        <RadioForm form={form} name="type44" label="44. Comment prononcer le « x » dans « sixième » ?" a="[z]" b="[s]" c="[ks]" d="[gz]" qt="p" correctAnswer="First" /> 
        <RadioForm form={form} name="type45" label="45. Comment prononcez-vous le « x » dans « Bruxelles » ?" a="[s]" b="[z]" c="[ks]" d="[gz]" qt="p" correctAnswer="First" /> 
        <RadioForm form={form} name="type46" label={<span>46. Comment se prononce le mot « tous » dans cette phrase ? <br /> Ils parlent tous anglais </span> }  a="[tus]" b="[tuz]" c="[tu]" d="[tut]" qt="p" correctAnswer="First" /> 
        <RadioForm form={form} name="type47" label={<span> 47. Comment prononcez-vous le mot « plus » dans cette phrase ? <br /> J'en voudrais plus, s'il vous plait. </span>} a="[plys]" b="[ply]" c="[plyz]" d="[py]" qt="p" correctAnswer="First" /> 
        <RadioForm form={form} name="type48" label="50. Comment prononcez-vous les lettres « en » dans le mot: « examen » ?" a="[ɑ̃]" b="[ɛ̃ ]" c="[ɛ]" d="[i.n]" qt="p" correctAnswer="Second" />  
         
         
        <Button type="submit">Submit</Button>
        
      </form>
    
      </Form>

      
  )
  
}
export default RadioGroupForm;

