import {
  Link
} from "react-router-dom";
import React from 'react';

export default function Header() {
  return (
    <div>
      <nav class="navbar is-white" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <b>Ocean Protocol Pacific Stats</b>
          </a>
        </div>
      </nav>
    </div>
  );
}