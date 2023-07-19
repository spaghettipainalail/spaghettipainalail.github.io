/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Header from '../menu/header.js';
import Blog from './components/blog.js';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const timeline = [
  {
    name: 'Analyse et conception',
    description:
      'Période de travail pour faire l\'analyse du projet existant, déterminer le travail à faire et plannification.',
    date: 'Été 2023',
    dateTime: '2023-06',
  },
  {
    name: 'Travail en simulation',
    description:
      'La majorité du travail se fait en simulation. On doit s\'assurer que celles-ci fonctionnent avant de poursuivre le développement sur le robot. Début des tests unitaires',
    date: 'Automne 2023',
    dateTime: '2023-08',
  },
  {
    name: 'Développement sur le robot',
    description:
      'Les simulations sont majoritairement fonctionnelles, c\'est le temps de fournir notre code au robot Tiago et apporter des correctifs, en plus de faire le travail d\'intégration.',
    date: 'Hiver 2024',
    dateTime: '2024-01',
  },
  {
    name: 'Robocup@home',
    description:
      'Jour de compétition, c\'est le moment tant attendu et la réalisation d\'un projet de plusieurs mois',
    date: '17 Juillet 2024',
    dateTime: '2024-07',
  },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <Header />
      <div className="bg-white">

      <main className="isolate">

        <Blog />

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8 mb-16">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    </div>
    
  )
}
