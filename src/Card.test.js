import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it('should render', () => {
    render(<Card src="https://static1.squarespace.com/static/55f009c8e4b079158f302bab/55f00a13e4b031210ec8b811/5649c0cae4b02d8d6e27efae/1455290053315/?format=1500w" caption="test caption"/>)
  });

  it('should match snapshot', () => {
    const {asFragment} =render(<Card src="https://static1.squarespace.com/static/55f009c8e4b079158f302bab/55f00a13e4b031210ec8b811/5649c0cae4b02d8d6e27efae/1455290053315/?format=1500w" caption="test caption"/>)
    expect(asFragment()).toMatchSnapshot()
});