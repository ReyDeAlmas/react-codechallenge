
export default function Song() {
  return (
    <div className="w-full  px-2 py-2 grid md:grid-cols-2 gap-1">
    <div className="w-full grid md:grid-cols-5">
      <div className="w-full py-2 bg-slate-200 md:col-span-2">

      </div>
      <div className="w-full py-2 md:col-span-3  px-3  flex gap-1 justify-between ">
          <div className="flex items-star flex-col">
            <h2 className=" text-2xl font-semibold">Nombre de la cancion</h2>
            <span>Nombre de la banda</span>
            <span className=" font-light">Genero:</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart-plus " width="32" height="32" viewBox="0 0 24 24"  stroke="red" fill="none" >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
        </svg>
    </div>

    </div>
</div>
  )
}
