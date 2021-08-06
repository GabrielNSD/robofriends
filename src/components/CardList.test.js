import React from "react";
import { shallow, mount, render } from "enzyme";
import { create } from "react-test-renderer";
import CardList from "./CardList";

//const testCardList = create(<CardList />);

it("expect to render Card Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "AAA",
      username: "aaa",
      email: "aaa@mail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});

it("expect to render Card Component react test render", () => {
    const mockRobots = [
      {
        id: 1,
        name: "AAA",
        username: "aaa",
        email: "aaa@mail.com",
      },
    ];
    expect(create(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
  
