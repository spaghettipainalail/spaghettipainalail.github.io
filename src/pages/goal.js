const stats = [
  { label: 'Début du projet', value: '2023' },
  { label: 'Étudiants', value: '7' },
  { label: 'Heures travaillées', value: '250' }
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 h-full">
            <div className="relative overflow-hidden h-full rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="./pictures/Tiago.jpg"
                alt=""
              />
              
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Nos Objectifs</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                HomoDeus: Un projet majeur de conception à l'UdeS
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Le projet HomoDeus consiste au développemnt logiciel d'un robot pour participer au concours RoboCup@Home.
                  La compétition propose un scénario dans lequel le robot doit effectuer de multiples tâches. 
                  Pour répondre à ces exigenaces, plusieurs modules doivent être codés. Entre autres, un système de vision numérique, 
                  de synthèse et compréhension de la voix, de déplacement ainsi que de manipulation d'objets fragiles
                </p>
                <p className="mt-8">
                  Notre groupe d'élève est le 2e à entreprendre cette mission au cours des dernières années. Nous avons donc accès aux vestiges du passé 
                  afin d'être mieux préparer aux embûches que le futur nous réserve. Doté de 6 membres en génie informatique et 1 membre en génie robotique, 
                  le groupe HomoDeus a pour but de remplir les critères pour participer et avec un peu d'optimisme gagner la compétition.
                </p>
                <p className="mt-8">
                  Bien entendu, nous ne pourrions y arriver sans aide et c'est pourquoi nous remercions l'Institut interdisciplinaire d’innovation technologique - 3IT - 
                  pour nous avoir donné accès à des locaux, ainsi qu'au robot Tiago, que vous pouvez observer sur la photo. De même, le projet se réalise 
                  en collaboration avec le professeur François Ferland, qui nous offre les bases de son algorithme décisionnel basé sur l'être humain, 
                  soit le "Hybrid Behavior-Based Architecture", ou HBBA.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
