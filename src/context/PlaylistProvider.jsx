
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../../config/axios';
import { toast } from 'react-toastify';

const PlaylistContext = createContext();


const PlaylistProvider = ({children}) => {

    const [modal, setModal] = useState(false);
    const [playList, setPlayList] = useState([]);
    

    const addTrack = (track, like) => {

        const existingTrackIndex = playList.findIndex((existingTrack) => existingTrack.id === track.id);

        if (existingTrackIndex === -1) {
            
            setPlayList([...playList, track]);

            clienteAxios.post('/playlist/tracks/create', { valorX })
            .then(response => {
                console.log('Respuesta de Laravel:', response.data);
            })
            .catch(error => {
                
                console.error('Error al enviar solicitud a Laravel:', error);
            });

             toast.success('Añadido a tu play list');



        } else {
           
            const updatedPlayList = [...playList];
            updatedPlayList.splice(existingTrackIndex, 1);
            setPlayList(updatedPlayList);
            toast.warn('Eliminado de tu playlist');

        }
 
        
    }

    const handleClickModal = () =>{
        setModal(!modal)
    }

    
    

    
    

    return(
        <PlaylistContext.Provider
        value={{
            modal,
            handleClickModal,
            addTrack,
            playList,
           
        }}
        >
        {children}
        </PlaylistContext.Provider>
    )
}

export  {
    PlaylistProvider
}

export default PlaylistContext