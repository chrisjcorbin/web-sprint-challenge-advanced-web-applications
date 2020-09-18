import React from "react";
import { render, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchAPI as mockFetchAPI } from '../utils/fetchAPI';

const mockData = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "rebeccapurple",
      code: {
        hex: "#663399"
      },
      id: 12
    }
  ]
}

jest.mock('../utils/fetchAPI');

test("Fetches data and renders the bubbles", async () => {
  mockFetchAPI.mockResolvedValueOnce(mockData);
  const { getByText, getAllByTestId } = render(<BubblePage />);
  await waitFor(() => {
    expect(getByText(/rebeccapurple/i)).toBeInTheDocument();
    expect(getAllByTestId(/color/i)).toHaveLength(3);
  })
});