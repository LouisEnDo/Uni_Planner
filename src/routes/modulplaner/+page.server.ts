import { json } from '@sveltejs/kit';

export async function load() {
  const modules : {name: string,credits: Number}[] = [
    {name: "Prog1",credits: 6},
    {name: "Prog2",credits: 6},
    {name: "Studium Genrale",credits: 2.5}
]
  return {modules};
}