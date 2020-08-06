import {
  Link
} from "react-router-dom";
import React from 'react';

export default function Header() {
  return (
    <div>
      <nav class="navbar is-white" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <h1 class="navbar-item title">
            Ocean Protocol Pacific Stats
          </h1>
        </div>
      </nav>
    </div>
  );
}