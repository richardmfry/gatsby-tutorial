import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import AllRecipes from "../components/AllRecipes"
import { page, text } from "./examples/home.module.css"
export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="Hero"></header>
      </main>
      <h1>home page</h1>
      <AllRecipes />
    </Layout>
  )
}
