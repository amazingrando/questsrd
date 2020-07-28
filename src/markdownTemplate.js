import React from "react"
import { graphql } from "gatsby"

import Layout from "./components/layout"
import SEO from "./components/seo"

import "./stylesheets/main.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, headings } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <ul className="toc">
        {headings.map(heading => (
          <li>{heading.value}</li>
        ))}
      </ul>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
      headings(depth: h1) {
        value
      }
    }
  }
`
