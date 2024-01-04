import Form from "@/components/FormOne";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import HomePage from "./HomePage";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function Home() {

  
  return (
    <>
      <Head>
        <title>First-Task</title>
      </Head>

      <main>

      <HomePage/>
      {/* <Sidebar/> */}

      
      </main>
    </>
  );
}
