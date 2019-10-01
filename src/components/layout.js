/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { Global } from '@emotion/core';
import Honk from '../images/honk.svg';
import Honker from './honker';

const Layout = ({ children }) => (
  <>
    <Global
      styles={theme => ({
        body: {
          backgroundColor: theme.colors.background,
          color: theme.colors.text,
          fontFamily: theme.fonts.body,
          fontSize: 18,
          margin: 0,
          padding: 0,
        },
      })}
    />
    <header sx={{ variant: 'header' }}>
      <Link to="/">
        <img src={Honk} alt="Honk." />
      </Link>
      <Link to="/">Honkify.js</Link>
      <Honker />
    </header>
    <main sx={{ variant: 'content' }}>{children}</main>
    <footer sx={{ variant: 'footer' }}>
      <a href="https://goose.game">Untitled Goose Game</a> ·{' '}
      <a href="https://twitter.com/jlengstorf">Created by Jason Lengstorf</a>
    </footer>
  </>
);

export default Layout;
