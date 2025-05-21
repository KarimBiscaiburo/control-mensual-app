
export default async function Home() {
  // ! Eliminar la ruta alternativa ya que si o si va a venir como variable de entorno
  const backurl = process.env.BACKEND_URL;
  
  if (!backurl) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
  }

  const data = await fetch(backurl)
  const res = await data.json()

  console.log(res)

  return (
    <div>
      <p>ruta del back: {backurl}</p>
      <p>respuesta del back: {res.backendMessage}</p>
    </div>
  );
}
