"use client"

import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableDemo() {
  const accords = [
    { symbole: "0", description: "Pas du tout d’accord: Si l’énoncé est tout à fait faux ou si vous n’êtes pas du tout d’accord." },
    { symbole: "1", description: "Pas d’accord: Si l’énoncé est généralement faux ou si vous n’êtes pas d’accord." },
    { symbole: "2", description: "Neutre: Si l’énoncé vous est indifférent, si vous ne parvenez pas à vous décider ou si l’énoncé vous semble aussi vrai que faux." },
    { symbole: "3", description: "D’accord: Si l’énoncé est généralement vrai ou si vous êtes d’accord." },
    { symbole: "4", description: "Tout à fait d’accord: Si l’énoncé est tout à fait vrai ou si vous êtes entièrement d’accord." },
  ];



  return (
      
    <Table> 
      <TableCaption>Tableau d'accords</TableCaption>
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
  );
}

export default TableDemo;


