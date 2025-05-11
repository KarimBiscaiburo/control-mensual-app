

export default async function Home() {
  const backurl = process.env.BACKEND_URL;
  
  if (!backurl) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
  }
  const data = await fetch(backurl)
  const res = await data.text()

  return (
    <div>
      <p>ruta del back: {backurl}</p>
      <p>respuesta del back: {res}</p>
    </div>
  );
}
