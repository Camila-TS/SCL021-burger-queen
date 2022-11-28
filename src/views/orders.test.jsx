import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";

import { Orders } from "./orders";

describe ("Orders", () => {
    it("Debería mostrar menú del resto del día al hacer click en el botón 'Día'", async () => {
        // ARRANGE
        render(
            <MemoryRouter>
                <Orders/>
            </MemoryRouter>
            );
                let btnDay = screen.getByRole("button", {name: "Día"})
                // ACT
                await userEvent.click(btnDay)
                
                let items = screen.getByTestId("menuItems")
                // EXPECT
                expect(items[0]).toHaveTextContent("Hamburguesa simple")
                expect(items[1]).toHaveTextContent("Hamburguesa doble")
                expect(items[2]).toHaveTextContent("Papas fritas")
                expect(items[3]).toHaveTextContent("Aros de cebolla")
                expect(items[4]).toHaveTextContent("Queso")
                expect(items[5]).toHaveTextContent("Huevo")
                expect(items[6]).toHaveTextContent("Jugo")
                expect(items[7]).toHaveTextContent("Bebida")
                
    })
    });

