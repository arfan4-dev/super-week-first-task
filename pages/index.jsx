import Form from "@/components/FormOne";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import HomePage from "./HomePage";
import Link from "next/link";

export default function Home() {
  
  
  return (
    <>
      <Head>
        <title>First-Task</title>
      </Head>

      <main>
      <HomePage/>
      </main>
    </>
  );
}
