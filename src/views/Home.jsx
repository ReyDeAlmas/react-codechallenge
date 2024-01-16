
import Song from "../components/Song"
import usePlaylist from "../hooks/usePlaylist"

export default function Home() {
   
  const { hola } = usePlaylist()
  console.log(hola)

  return (
    <div className="w-full my-2 container mx-auto">
       <div className="w-full my-2 grid md:grid-cols-6 gap-3">
            <button type='button' className=" hover:bg-green-200 active:scale-95 border-2 border-transparent hover:border-slate-200 transition-all duration-100 rounded-md shadow-md bg-gradient-to-b from-green-400 via-green-400 to-green-300 px-4 py-2 text-green-800 font-semibold flex flex-col items-center justify-center"> 
                Top Tendencias
            </button>
            <button type='button' className=" hover:bg-green-200 active:scale-95 border-2 border-transparent hover:border-slate-200 transition-all duration-100 rounded-md shadow-md bg-gradient-to-b from-green-400 via-green-400 to-green-300 px-4 py-2 text-green-800 font-semibold flex flex-col items-center justify-center"> 
                Top Rock
            </button>
            <button type='button' className=" hover:bg-green-200 active:scale-95 border-2 border-transparent hover:border-slate-200 transition-all duration-100 rounded-md shadow-md bg-gradient-to-b from-green-400 via-green-400 to-green-300 px-4 py-2 text-green-800 font-semibold flex flex-col items-center justify-center"> 
                Top Pop
            </button>
            <button type='button' className=" hover:bg-green-200 active:scale-95 border-2 border-transparent hover:border-slate-200 transition-all duration-100 rounded-md shadow-md bg-gradient-to-b from-green-400 via-green-400 to-green-300 px-4 py-2 text-green-800 font-semibold flex flex-col items-center justify-center"> 
                Top Regge
            </button>
            <button type='button' className=" hover:bg-green-200 active:scale-95 border-2 border-transparent hover:border-slate-200 transition-all duration-100 rounded-md shadow-md bg-gradient-to-b from-green-400 via-green-400 to-green-300 px-4 py-2 text-green-800 font-semibold flex flex-col items-center justify-center"> 
                Top Cumbia
            </button>
            <button type='button' className=" hover:bg-green-200 active:scale-95 border-2 border-transparent hover:border-slate-200 transition-all duration-100 rounded-md shadow-md bg-gradient-to-b from-green-400 via-green-400 to-green-300 px-4 py-2 text-green-800 font-semibold flex flex-col items-center justify-center"> 
                Top Mexico
            </button>
        </div>

        <Song />

   
    </div>
  )
}
