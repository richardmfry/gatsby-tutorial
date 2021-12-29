import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"
import fetchData from "./examples/fetchData"
import { page, text } from "./examples/home.module.css"
export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="Hero"></header>
      </main>
      <h1>home page</h1>
    </Layout>
  )
}
