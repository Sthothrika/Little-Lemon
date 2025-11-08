import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "../components/BookingForm";

test("renders booking form heading", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const label = screen.getByLabelText(/Date:/i);
  expect(label).toBeInTheDocument();
});

test("form submission works", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const dateInput = screen.getByLabelText(/Date:/i);
  fireEvent.change(dateInput, { target: { value: "2025-11-10" } });
  expect(dateInput.value).toBe("2025-11-10");
});
