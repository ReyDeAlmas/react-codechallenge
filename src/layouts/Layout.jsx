import { Outlet } from "react-router-dom"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import usePlaylist from "../hooks/usePlaylist";
import Song from "../components/Song";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default function Layout() {

  const {modal, handleClickModal,playList} =  usePlaylist(); 

  return (
    <div id="layout_id">
       
        <div className=" w-full  min-h-72 gradient-animation flex justify-center items-center flex-col">
              <div className="w-full flex gap-1 justify-center">
              <h1 className="text-center text-4xl md:text-8xl font-lilita font-light text-lime-200"> <span className="  tracking-wide  ">Melody</span>Craft</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vinyl overflow-visible" width="44" height="44" viewBox="0 0 24 24" stroke="#D9F99D" fill="none" >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 3.937a9 9 0 1 0 5 8.063" />
                <path className=" animate-pulse" d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path className=" animacion" d="M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path className=" animacion"  d="M20 4l-3.5 10l-2.5 2" />
              </svg>
                            </div>
              <span className=" text-lg md:text-xl">Construye tu playlist a tu manera</span>
              <button onClick={()=>{
                handleClickModal()
               
              }} 
              className="px-12   my-2 py-4 bg-lime-400 shadow-md rounded-md hover:bg-cyan-400 active:scale-95">
                  Mi playlist
              </button>
        </div>

     

        <Outlet></Outlet>

        <ToastContainer/>

        {modal && (
          <Modal  isOpen={modal} style={customStyles} appElement={document.getElementById('layout_id')}>
            <div className=" w-full max-w-2xl min-w-[60vw]  py-2 relative">
              <div className=" w-full my-1 flex justify-end border-b-2 border-slate-400">
                  <button
                  type="button"
                  onClick={()=>{
                    handleClickModal()
                   
                  }} 
                  className=" text-lime-400 font-bold cursor-pointer hover:underline active:scale-95">Cerrar (X)</button>
              </div>
            </div>
            <div className="w-full my-2 container mx-auto bg-slate-100 grid md:grid-cols-2 px-2 gap-2 py-3">
            {playList && playList.length > 0 ? (
                  playList.map((track) => (
                  <Song
                      
                      key={track.id}
                      track={track}
                      isPlayList={true}
                      
                  />
                  ))
              ) : (
                  <p>No hay pistas disponibles</p>
              )}
            </div>
          </Modal>
        )}
       
        

    </div>
  )
}
