
import useSWR from "swr";
import Song from "../components/Song"
import usePlaylist from "../hooks/usePlaylist"
import { useEffect } from "react";
import clienteAxios from "../../config/axios";


export default function Home() {

    

    const fetcher = () => clienteAxios("/tracks/top").then(data =>
       data.data
    );
    const {data, error, isLoading } = useSWR ("/tracks/top", fetcher);

   
    
      if(isLoading) return(
        <div className=" animate-pulse h-40 flex items-center text-center w-full container mx-auto">
            <p className="text-2xl font-bold text-center w-full italic">Cargando las <em className="text-cyan-500"> pistas...</em></p>
        </div>
      );
    
      


    

      const tracks = data;
    

    

  return (
    <div className="w-full my-2 container mx-auto bg-slate-100">
        <div className="w-full  px-2 py-2 grid md:grid-cols-2 gap-1 ">
            {tracks && tracks.length > 0 ? (
            tracks.map((track) => (
            <Song
                
                key={track.id}
                track={track}
                isPlayList={false}
                
            />
            ))
        ) : (
            <p>No hay pistas disponibles</p>
        )}

    </div>
        
        
       
       

   
    </div>
  )
}
