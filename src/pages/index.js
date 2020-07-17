import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Rules</h1>
    <p>Quest works best with 4-6 players.</p>
    <p>
      First, choose one player to be the guide. The Guide plays as the story’s
      narrator.
    </p>
    <p>
      Everyone else will create one of the story’s main characters, and then
      play as the character they created. These player characters are allies in
      an adventuring group called the party.
    </p>
    <p>
      The Guide plays the part of the world around the party, like the director
      of a movie. They imagine the people, places, and things the party
      encounters. Then, they help everyone imagine the world of the game by
      describing it.
    </p>
    <p>
      The Guide also plays the part of all of the characters in the story, like
      towns- people and monsters. We call them non-player characters, or npcs.
    </p>
    <p>
      Finally, the Guide is responsible for creating consequences for the
      party’s actions. That means imagining what happens next when a player
      springs a trap or makes an NPC angry.
    </p>
    <p>
      The Guide and the party have different responsibilities, but they are
      equals — partners in storytelling.
    </p>
  </Layout>
)

export default IndexPage
