import { Globe, Briefcase, Film, Dumbbell, HeartPulse } from "lucide-react";
export default function NewsDashboard() {
  return (
<main className="min-h-screen bg-gray-100 p-8 grid grid-cols-12 gap-6">

  {/* Fila 1 - Card Lámpara */}
  <article className="col-span-8 bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-2">
    <figure className="w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1614743559948-d158e36ecb4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA=="
        alt="Lamp"
        className="w-full h-full object-cover"
      />
    </figure>
    <div className="p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold leading-snug">
          Green plants are going to Extinct about 500 times faster than they should, Study finds
        </h1>
        <p className="text-gray-600 text-sm mt-3">
          If you are the sort of person who just can not keep a plant alive, you are not alone according to a new study published June 10 in the journal Nature..
        </p>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://img.freepik.com/foto-gratis/retrato-hombre-rubio-guapo-positivo-barba-bigote-pie-manos-cruzadas-camisa-blanca-leve-sonrisa-expresion-confianza_176420-17129.jpg?semt=ais_incoming&w=740&q=80"
            alt="Alexander Parkinson"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="ml-2 text-sm font-semibold">Alexander Parkinson</p>
        <p className="ml-auto text-xs text-gray-500">Jun 20, 2019</p>
      </div>
    </div>
  </article>

{/* Fila 1 -  categorías */}
<aside className="col-span-4 bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between">
  <ul className="space-y-4">
    <li className="flex items-center space-x-4">
      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
        <Globe size={18} />
      </span>
      <p className="text-gray-600 font-semibold">Global</p>
    </li>

    <li className="flex items-center space-x-4">
      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
        <Briefcase size={18} />
      </span>
      <p className="text-gray-600 font-semibold">Business</p>
    </li>

    <li className="flex items-center space-x-4">
      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
        <Film size={18} />
      </span>
      <p className="text-gray-600 font-semibold">Entertainment</p>
    </li>

    <li className="flex items-center space-x-4">
      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
        <Dumbbell size={18} />
      </span>
      <p className="font-bold text-blue-600">Sports</p>
    </li>

    <li className="flex items-center space-x-4">
      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
        <HeartPulse size={18} />
      </span>
      <p className="text-gray-600 font-semibold">Health</p>
    </li>
  </ul>
</aside>

  {/* Imagen café - ocupa 2 filas */}
  <article className="col-span-3 row-span-2 bg-white rounded-3xl shadow-lg p-6 flex flex-col">
    <figure className="mb-3 rounded-2xl overflow-hidden aspect-square">
      <img
        src="https://payz.com/wp-content/uploads/2023/04/Coffee-scaled.jpg"
        alt="Coffee cup"
        className="w-full h-full object-cover"
      />
    </figure>
    <h2 className="text-lg font-semibold mb-2">
      How to make the perfect morning coffee, according to the Science
    </h2>
    <footer className="flex items-center mt-auto space-x-2">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1064924442/es/foto/joven-morena-de-segura-en-camisa-blanca-elegante-sonriente-retrato-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=TcdUWS4Vhbrcug19t2JuUCwcM_PXViowszxcEamn9hM="
          alt="Tara Gibson"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm font-semibold">Tara Gibson</p>
      <p className="ml-auto text-xs text-gray-500">Jul 13, 2019</p>
    </footer>
  </article>

  {/* Buscador  */}
  <section className="col-span-5 bg-white rounded-3xl shadow-lg p-6 flex flex-col">
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search for articles"
        className="flex-grow outline-none text-sm text-gray-500 bg-gray-100 px-4 py-3 rounded-full"
      />
      <button className="bg-blue-600 text-white p-3 rounded-full flex items-center justify-center">
        🔍
      </button>
    </div>
    <div className="flex space-x-2 mt-4">
      <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full">#Politics</button>
      <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full">#Science</button>
      <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full">#Movies</button>
      <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full">#Technology</button>
    </div>
  </section>

{/* Small Building Card  */}
<article className="col-span-4 bg-white rounded-3xl shadow-lg p-4 flex items-center">
  <figure className="w-20 h-20 rounded-xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?fm=jpg&q=60&w=600&ixlib=rb-4.1.0"
      alt="Building"
      className="w-full h-full object-cover"
    />
  </figure>
  <div className="ml-4">
    <h3 className="font-semibold">An Inspiring Short Film</h3>
    <p className="text-gray-500 text-sm">80,989 views</p>
  </div>
</article>


{/* Card Alex Morrison */}
<article className="col-span-5 bg-white rounded-3xl shadow-lg p-6 flex items-center">
  {/* Imagen a la izquierda */}
  <div className="w-28 h-28 rounded-2xl overflow-hidden mr-6">
    <img
      src="https://i.pinimg.com/200x/e9/32/91/e93291c42fb2a9fe730f859a7ff38109.jpg"
      alt="Alex Morrison"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Texto */}
  <div className="flex flex-col flex-1">
    <h2 className="text-lg font-bold">Alex Morrison</h2>
    <p className="text-gray-500 text-sm mb-3">Senior Journalist</p>

    {/* Stats */}
    <div className="flex justify-between text-center mb-3">
      <div>
        <p className="font-bold text-base">34</p>
        <p className="text-xs text-gray-500">Articles</p>
      </div>
      <div>
        <p className="font-bold text-base">980</p>
        <p className="text-xs text-gray-500">Followers</p>
      </div>
      <div>
        <p className="font-bold text-base">8.9</p>
        <p className="text-xs text-gray-500">Rating</p>
      </div>
    </div>

    {/* Botones */}
    <nav className="flex space-x-2">
      <button className="flex-1 border border-gray-300 text-gray-700 font-semibold py-1.5 rounded-full text-sm">
        Chat
      </button>
      <button className="flex-1 bg-blue-600 text-white font-semibold py-1.5 rounded-full text-sm">
        Follow
      </button>
    </nav>
  </div>
</article>
{/* Navegación */}
<section className="col-span-4 flex flex-col gap-4">
  {/* Navigation Buttons */}
  <nav className="flex items-center justify-center gap-3  rounded-2xl  p-3">
    <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
      {"<"}
    </button>
    <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
      {">"}
    </button>
  </nav>

{/* Tags */}
<section className="col-span-5 bg-white rounded-2xl shadow-md p-3">
  <div className="grid grid-cols-2 gap-2">
    <button className="px-3 py-2 rounded-lg bg-gray-100 text-sm">
      Donald Trump
    </button>
    <button className="px-3 py-2 rounded-lg bg-gray-100 text-sm">
      USA
    </button>
    <button className="px-3 py-2 rounded-lg bg-gray-100 text-sm">
      Politics
    </button>
    <button className="px-3 py-2 rounded-lg border border-blue-500 text-blue-600 text-sm bg-blue-50">
      2020
    </button>
  </div>
  </section>
</section>
    </main>
  ); 
}