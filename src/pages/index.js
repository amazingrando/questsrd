import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Quest Roleplaying Game</h1>
    <p>
      Quest is a retreat from your worries and obligations. It’s a chance to sit
      down with your friends and spend quality time with each other.
    </p>

    <p>
      Together, you’ll go on a thrilling journey in a fantastic world of your
      shared imagination. The rules of the game help you tell a story that’s
      totally unique — no two games are the same, and the possibilities are
      endless.
    </p>

    <p>
      The game is easy to learn, and you only need a few things to get started —
      some friends, a pen, some paper, a 20-sided die, and the Game Book.{" "}
    </p>

    <p>
      When you gather to play Quest, you’ll learn how to tell a story that you
      won’t forget. If you and your friends have a good time, you might even
      continue the story for years to come.
    </p>
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        src={`https://www.youtube.com/embed/_vYcuIWOWNc`}
        title="video"
      />
    </div>
  </Layout>
)

export default IndexPage
