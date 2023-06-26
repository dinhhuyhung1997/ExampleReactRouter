import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
          <br/>
            <td class="issuekey">
              <a class="issue-link" data-issue-key="HMCCCIC-90285" href="/issue/browse/HMCCCIC-90285">HMCCCIC-90285</a>
            </td>

          <br/>
            <td class="issuekey">
              <a class="issue-link" data-issue-key="HMCCCIC-90286" href="/issue/browse/HMCCCIC-90285">HMCCCICEX-90286</a>
            </td>
          <br/>
            <td class="issuekey">
              <a class="issue-link" data-issue-key="HMCCCIC-90286" href="/issue/browse/HMCCCIC-90285">HMCCCIC-90286</a>
            </td>
          <br/>
            <td class="issuekey">
              <a class="issue-link" data-issue-key="HMCCCIC-90287" href="/issue/browse/HMCCCIC-90285">HMCCCIC-90287</a>
            </td>
          <br/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/HMCCCIC-90285">HMCCCIC-90285</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/HMCCCIC-90285">
            <HMCCCIC90285 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function HMCCCIC90285() {
  return (
    <div>
      <span class="shorten" id="versions-field" resolved="">
        <span title="JW.KOR.ccIC.001.014.230621 ">JW.KOR.ccIC.001.014.230621</span>
      </span>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home </h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
