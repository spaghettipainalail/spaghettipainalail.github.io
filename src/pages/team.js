const people = [
    {
      name: 'Alexandre Bernier',
      role: 'Génie Informatique',
      imageUrl:
        './pictures/Alex.png',
    },
    {
      name: 'Philippe Debigaré',
      role: 'Génie Informatique',
      imageUrl:
        './pictures/phil.png',
    },
    {
      name: 'Jérôme Gagné',
      role: 'Génie Informatique',
      imageUrl:
        './pictures/jerome.png',
    },
    {
      name: 'Thomas Keita',
      role: 'Génie Informatique',
      imageUrl:
        './pictures/thom.png',
    },
    {
      name: 'Sacha Labbé',
      role: 'Génie Informatique',
      imageUrl:
        './pictures/sacha.jpg',
    },
    {
      name: 'Véronique Paquin',
      role: 'Génie Informatique',
      imageUrl:
        './pictures/vero.png',
    },
    {
      name: 'Julien Thériault',
      role: 'Génie Robotique',
      imageUrl:
        './pictures/julien.png',
    },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rencontrez notre équipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              L'équipe HomoDeus est l'équipe de l'Université de Sherbrooke qui a pour objectif de compétitionner au défi de robotique RoboCup@Home
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }