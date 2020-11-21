import * as React from "react";
import * as Constants from "~/common/constants";
import * as System from "~/components";
import * as Player from "~/components/player";
import Typist from "react-typist";
import Link from "next/link";

import data from "~/common/songlist.json";

import Head from "next/head";

import { css } from "@emotion/react";

const STYLES_LAYOUT_LEFT = css`
  height: 100vh;
  width: 100%;
  font-size: 2rem;
  color: ${Constants.colors.grey};

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;

const STYLES_LAYOUT_RIGHT = css`
  width: 100%;
  height: 100vh;
  top: 0;
  font-size: 2rem;
  color: ${Constants.colors.grey};
  background-position: left;
  background-repeat: no-repeat;
  background-size: auto 100vh;
  text-align: center;
  a:hover {
    color: ${Constants.colors.green_secondary};
    cursor: pointer;
  }
`;

const STYLES_LAYOUT_FIRST = css`
  top: 0;
`;

const STYLES_LINK = css`
  color: ${Constants.colors.white};
  text-decoration: none;

  :hover: {
    color: ${Constants.colors.green_secondary};
    cursor: pointer;
  }
`;

const STYLES_CENTER = css`
  vertical-align: middle;
  horizontal-align: middle;
`;

const STYLES_TEXT = css`
  vertical-align: middle;
  horizontal-align: middle;
  text-align: left;
  padding: 72px 80px 80px 80px;
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const STYLES_MENU_ITEM_CENTER = css`
  width: 25%;
  display: inline-block;
  text-align: center;

  a {
    color: ${Constants.colors.green_secondary};
  }
  a:hover {
    color: ${Constants.colors.grey};
  }
`;

const STYLES_MENU_ITEM_RIGHT = css`
  width: 25%;
  display: inline-block;
  text-align: LEFT;

  a {
    color: ${Constants.colors.green_secondary};
  }
  a:hover {
    color: ${Constants.colors.grey};
  }
`;

const STYLES_MENU = css`
  width: 100%;
  text-align: left;
`;

const STYLES_MENU_ITEM = css`
  display: inline-block;
  padding-right: 112px;
  font-size: 40px;
  a {
    color: ${Constants.colors.green_secondary};
  }
  a:hover {
    color: ${Constants.colors.grey};
  }
`;

const STYLES_MENU_ITEM_ACTIVE = css`
  display: inline-block;
  padding-right: 112px;
  font-size: 40px;
  a {
    color: ${Constants.colors.grey};
  }
  a:hover {
    color: ${Constants.colors.grey};
  }
`;

const STYLES_TABLE = css`
  border-collapse: collapse;
  border: 0px;
  width: 100%;
  text-align: left;

  th,
  td {
    padding-bottom: 88px;
  }
`;

const STYLES_GREEN = css`
  color: ${Constants.colors.green_secondary};
`;

const STYLES_GOLD = css`
  color: ${Constants.colors.red};
`;

const STYLES_HR = css`
  border: 1px solid ${Constants.colors.green_secondary};
`;

const STYLES_OVERLAY = css`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: auto 4px;
  min-height: 100%;
  overflow: hidden;
`;

export default class IndexPage extends React.Component {
  render() {
    const title = "next-express-emotion";
    const description =
      "minimal example for a full client server web application with next, express, and emotion.";
    const url = "https://github.com/jimmylee/next-express-emotion";

    const featured = data.filter((song) => song.featured != null);

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/static/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/static/social.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>

        <div css={STYLES_OVERLAY}></div>

        <div css={STYLES_LAYOUT_RIGHT}>
          <div css={STYLES_TEXT}>
            <img height="192px" src="/static/weird.gif" />
            <br />
            <br />
            <div css={STYLES_MENU}>
              <div css={STYLES_MENU_ITEM_ACTIVE}>
                <Link href="/">
                  <a> > UNDERPLAYS </a>
                </Link>
              </div>

              <div css={STYLES_MENU_ITEM}>
                <Link href="/">
                  <a> > DISCOVER </a>
                </Link>
              </div>

              <div css={STYLES_MENU_ITEM}>
                <Link href="/">
                  <a> > STREAMS </a>
                </Link>
              </div>

              <div css={STYLES_MENU_ITEM}>
                <Link href="/">
                  <a> > ABOUT </a>
                </Link>
              </div>
            </div>

            <hr css={STYLES_HR} />
            <br />
            <br />
            <table css={STYLES_TABLE}>
              {featured
                .sort((a, b) => a.featured - b.featured)
                .map((song) => {
                  return (
                    <tr>
                      <th width="8%">
                        <h2>{song.featured}.</h2>
                      </th>
                      <th width="92%">
                        <Link
                          href="/track/[song.slug]"
                          as={`/track/${song.slug}`}
                        >
                          <a>
                            <h2>
                              {song.name} - {song.artist} ({song.year})
                            </h2>
                          </a>
                        </Link>
                        <br />
                        <Link
                          href="/stream/[song.slug]"
                          as={`/stream/${song.slug}`}
                        >
                          <a>>> START STREAM</a>
                        </Link>
                        <br />
                        <br />
                        <div>
                          <span>
                            55
                            <img
                              width="32px"
                              src="https://media0.giphy.com/media/lp8JndnFvTMndTWYWs/source.gif"
                            />
                          </span>
                        </div>
                      </th>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
