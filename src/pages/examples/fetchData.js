import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          author
          description
          simpleData
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
      siteBuildMetadata {
        id
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName
