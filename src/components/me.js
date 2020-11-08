import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-grid-system"

const Hey = styled.section`
  h1 {
    margin: 0;
    font-size: 3rem;
    text-align: center;
    margin-left: 0;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      text-align: left;
      margin-left: 32px;
      margin-bottom: 0;
    }
  }
`

const Button = styled.a`
  background-color: ${props => props.bg};
  margin: 16px 0;
  margin-right: 4px;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  transition: all 300ms ease;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.6;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: #333;
  transition: all 300ms ease;
  font-weight: 600;

  &:hover {
    opacity: 0.6;
  }
`

const Subtitle = styled.section`
  font-size: 2rem;
  font-weight: 600;
  margin: 16px 0px;
`

const About = styled.section`
  font-size: 1.5rem;
  margin: 24px 0px;
  line-height: 1.4em;

  a {
    color: #333;
  }

  article {
    margin: 16px;
    font-size: 1.2rem;
  }
`

const Work = styled.section`
  font-size: 1.5rem;
  margin-top: 48px;

  a {
    color: #333;
  }

  article {
    margin: 16px;
    font-size: 1.2rem;
    line-height: 1.4em;

    sub {
      line-height: 0;
    }
  }
`

const Grid = styled.div`
  margin: 16px 0px;
`

const Image = styled(Img)`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  border-radius: 50%;
  align-self: center;

  @media only screen and (max-width: 600px) {
    margin-bottom: 16px;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Me = ({ trimmed }) => {
  const picture = useStaticQuery(graphql`
    query MeQuery {
      avatar: file(absolutePath: { regex: "/me2.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [currentSong, setCurrentSong] = useState([])
  const [query, setQuery] = useState(false)

  useEffect(() => {
    if (!query) {
      fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=samaysham&api_key=8203b31435c3c55fa3e2d59f73a6453a&format=json"
      )
        .then(res => res.json())
        .then(
          result => {
            setCurrentSong(result.recenttracks.track[0])
            setQuery(true)
          },
          error => {
            console.log("Error fetching recent track.")
          }
        )
    }
  })

  return (
    <div id="me">
      <Flex>
        <Image fixed={picture.avatar.childImageSharp.fixed} />
        <Hey>
          <h1 className="font-bold">Samay Shamdasani</h1>
        </Hey>
      </Flex>

      <Subtitle>I'm an always-learning developer and creator.</Subtitle>

      <About>
        Currently, I'm working on{" "}
        <Link href="https://enlight.nyc">Enlight</Link>, an educational platform
        to teach anyone to code by building projects. I also{" "}
        <Link href="#writing">write</Link>,{" "}
        <Link href="https://training.shamdasani.org">run</Link>, and make{" "}
        <Link href="https://www.youtube.com/channel/UCgAp2iSxEwtZ13hWwLDfksA">
          videos
        </Link>
        .
      </About>

      <Button bg="#357edd" href="https://twitter.com/samaysham">
        Twitter
      </Button>

      <Button bg="#ffb700" href="https://github.com/shamdasani">
        GitHub
      </Button>
      <Button
        bg="#ff4136"
        href="https://www.youtube.com/channel/UCgAp2iSxEwtZ13hWwLDfksA"
      >
        YouTube
      </Button>
      <Button bg="#777777" href="https://shamdasani.org/resume.pdf">
        Resume
      </Button>
      <Button bg="#ff41b4" href="mailto:samay@shamdasani.org">
        samay@shamdasani.org
      </Button>

      {!trimmed && (
        <div>
          <About>
            <Subtitle>
              Now
            </Subtitle>

            <article>📚 CS @ University of Michigan, Ann Arbor.</article>

            {/* <article>
              📖 Reading{" "}
              <b>
                <Link href="http://www.metaphysicspirit.com/books/The%204-Hour%20Workweek.pdf">
                  The Four Hour Workweek
                </Link>
              </b>{" "}
              by Tim Feriss
            </article> */}

            <article>
              🎵 Listening to{" "}
              <Link href={currentSong.url}>{currentSong.name}</Link> by{" "}
              <b>{currentSong.artist ? currentSong.artist["#text"] : ""}</b>
            </article>

            <article>
              🏃 <Link href="https://training.shamdasani.org">Running</Link>{" "}
              <b>~20 miles</b>/week
            </article>

            <article>
              📹 Videos on{" "}
              <b>
                {" "}
                <Link href="https://www.youtube.com/channel/UCgAp2iSxEwtZ13hWwLDfksA">
                  YouTube
                </Link>{" "}
              </b>
            </article>

            <article>
              💻 Building{" "}
              <b>
                {" "}
                <Link href="https://enlight.nyc">Enlight</Link>{" "}
              </b>
            </article>
          </About>
          <Work>
            <Subtitle>
             Featured work
            </Subtitle>
            <Grid>
              <Row>
                <Col sm={12} md={4}>
                  <article>
                    <Link href="https://enlight.nyc">
                      Enlight
                      <br />
                      <sub> Learn to code by building projects.</sub>
                    </Link>
                  </article>
                </Col>
                <Col sm={12} md={4}>
                  <article>
                    <Link href="https://makespp.com">
                      MakeSPP
                      <br />
                      <sub>
                        {" "}
                        Director of the largest HS hackathon in the Greater NYC
                        Area
                      </sub>
                    </Link>
                  </article>
                </Col>
                <Col sm={12} md={4}>
                  <article>
                    <Link href="https://blink.care">
                      Blink
                      <br />
                      <sub>
                        {" "}
                        Affordable and accurate communication for locked-in
                        patients
                      </sub>
                    </Link>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={4}>
                  <article>
                    <Link href="https://ticktockinc.com">
                      Tick Tock Inc.
                      <br />
                      <sub>
                        Client e-commerce site. 1000+ products, generated from a
                        spreadsheet.
                      </sub>
                    </Link>
                  </article>
                </Col>
                <Col sm={12} md={4}>
                  <article>
                    <Link href="https://vidyapith-act.netlify.com/">
                      Food Drive Counter
                      <br />
                      <sub> Food counter for local nonprofit.</sub>
                    </Link>
                  </article>
                </Col>

                <Col sm={12} md={4}>
                  <article>
                    <Link href="https://github.com/shamdasani/SwiftFrameworks">
                      Swift Frameworks
                      <br />
                      <sub> Accepted WWDC18 Swift Playground Submission</sub>
                    </Link>
                  </article>
                </Col>
              </Row>
            </Grid>
          </Work>
        </div>
      )}

      {/* <About>
          <b>What's next</b>

          <article> The 10 Year Project </article>
          <article> Training Visualizations </article>
          <article> Reading List + Notes/Quotes </article>
          <article> Travel List </article>

        </About> */}
    </div>
  )
}

export default Me
