import Form from "@/components/Form";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import HomePage from "./HomePage";

export default function Home() {
  
  
  return (
    <>
      <Head>
        <title>First-Task</title>
      </Head>

      <main>
      <Navbar/>
     <Form/> 
    {/* <HomePage/> */}
   
    
        </main>
    </>
  );
}
