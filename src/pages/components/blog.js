const posts = [
  {
    id: 3,
    title: "Nouveau travail de déplacement",
    href: "#",
    description:
      "Étant donné les problèmes liés aux objets moins simple comme les tables, nous retravaillons la navigation en nous servant dobjets plus facile à détecter: des cubes et des sphères.",

    date: "2023-07-03",
    datetime: "2023-07-03",
    category: { title: "Navigation", href: "#" },
    type: "vid",
    filename: "navigation-2023-07-13.mp4",
  },
  {
    id: 2,
    title: "Premiers pas au niveau du déplacement",
    href: "#",
    description:
      "Le robot commence à se déplacer de façon autonome. Par contre comme les capteurs sont à la base, il a de la difficulté à détecter le dessus des tables et tente de se faufiller entre les pattes.",

    date: "2023-07-05",
    datetime: "2023-07-05",
    category: { title: "Navigation", href: "#" },
    type: "vid",
    filename: "deplacement-2023-07-05.mkv",
  },
  {
    id: 1,
    title: "Premières simulations",
    href: "#",
    description:
      "Les premières simulations sont entamées à l'aide du logiciel Gazebo. On commence à déplacer des membres du robot.",

    date: "2023-07-01",
    datetime: "2023-07-01",
    category: { title: "Simulations", href: "#" },
    type: "img",
    filename: "Simulation_bras.png",
  },
  // More posts...
];

function getMedia(post) {
  if (post.type == "vid") {
    var source = "./avancement/" + post.filename;
    return (
      <video controls className="rounded-2xl">
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  if (post.type == "img") {
    var source = "./avancement/" + post.filename;
    return <img src={source} alt="" className="rounded-2xl" />;
  }
}

export default function Blog() {
  return (
    <div className="bg-white py-8 sm:py-8 my-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Progression
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Voici l'évolution du projet. Nous vous tiendrons au courrant des nouveaux progrès pertinents au cours de notre processus de développement.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {/* vidéo ici */}
                  {getMedia(post)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
