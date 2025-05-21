"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";


export default function Navbar() {

    return (
        <>  
            <Link className="text-slate-200 p-2 mr-2" href={"/"}>Home</Link>
            <Link className="text-slate-200 p-2 mr-2" href={"/dashboard"}>Dashboard</Link>
            <button className="bg-blue-600 p-2 rounded mr-2" onClick={() => signIn()}>Logearse</button>
            <button className="bg-red-600 p-2 rounded" onClick={ () => signOut()}>Cerrar sesion</button>
        </>
    )
}