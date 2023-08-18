import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";

// snack or booze api replaced with fetchitems
// import SnackOrBoozeApi from "./Api";

import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import { fetchItems, addItem as addItemApi } from "./Api";
import slugify from "slugify";
import AddForm from "./AddForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState({
    snacks: [],
    drinks: []
  });

  // load data from backend 

  useEffect(() => {
    async function getAllItems() {
      const snacks = await fetchItems("snacks");
      const drinks = await fetchItems("drinks");

      setMenu({ drinks, snacks });
      setIsLoading(false);
    }
    getAllItems();
  }, []);

  /** Call API to add item of type "snacks" or "drinks"; update state */

  async function addItem(type, { name, description, recipe, serve }) {
    let id = slugify(name, { lower: true });
    let objData = { id, name, description, recipe, serve };
    await addItemApi(type, objData);
    setMenu(m => ({
      ...m,
      [type]: [...m[type], objData]
    }));
  }

  // show app frame, navbar, and routes
  let { snacks, drinks } = menu;
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>

            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>

            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>

            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>

            <Route path="/add">
              <AddForm addItem={addItem} />
            </Route>

            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>

          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
