import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../SearchForm";
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Site development</td>
              <td>
                <PriceHighLight variant="income">$ 12,000.00</PriceHighLight>
              </td>
              <td>Sell</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">-$ 59.00</PriceHighLight>
              </td>
              <td>Food</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width="50%">Rent</td>
              <td>
                <PriceHighLight variant="outcome">-$ 1,000.00</PriceHighLight>
              </td>
              <td>Home</td>
              <td>04/15/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}