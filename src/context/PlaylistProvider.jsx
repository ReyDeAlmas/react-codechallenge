import { createContext } from "react"

const PlaylistContext = createContext();

const PlaylistProvider = ({children}) => {

    const [categories, setCategories] = useState([]);

    return(
        <PlaylistContext.Provider
        value={{
            hola
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