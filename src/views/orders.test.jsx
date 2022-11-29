import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";
import Orders from "./orders";



describe ("Orders", () => {
    it("Debería mostrar item 'Hamburguesa simple' del menú del resto del día al hacer click en el botón 'Día', antes no", async () => {
        // ARRANGE
        render(
            <MemoryRouter>
                <Orders />
            </MemoryRouter>
            );
                let btnDay = screen.getByText(/Día/)

                let element = screen.queryByText('Hamburguesa simple')
                // EXPECT
                expect(element).not.toBeInTheDocument()

                // ACT
                await userEvent.click(btnDay)
                
                let item = screen.getByText(/Hamburguesa simple/)
                // EXPECT
                expect(item).toBeInTheDocument()
    })
    });

