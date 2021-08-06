import React from "react";
import { shallow, mount, render } from "enzyme";
import { create } from "react-test-renderer";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPAge without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const test = wrapper.find("CardList")
  console.log(test)
  expect(wrapper).toEqual({})
})