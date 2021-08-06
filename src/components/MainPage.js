import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./MainPage.css";
import ErrorBoundry from "./ErrorBoundry";
import CounterButton from "./CounterButton";

import Header from "./Header";

const MainPage = (props) => {
  const { searchField, onSearchChange, robots, isPending } = props;

  useEffect(() => {
    props.onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <CounterButton />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default MainPage;
