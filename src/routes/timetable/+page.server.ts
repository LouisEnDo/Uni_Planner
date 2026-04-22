
type Event = {
    weekday: "mon"|"tue"|"wed"|"thu"|"fri"|"sat"|"sun"
    type: "activity"|"university"|"work"|"other"
    from: number
    to:number
    title: string
}

export async function load() {
  const modules : {name: string,credits: Number}[] = [
    {name: "Prog1",credits: 6},
    {name: "Prog2",credits: 6},
    {name: "Studium Genrale",credits: 2.5}
]
  return {modules};
}