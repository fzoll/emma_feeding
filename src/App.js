import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listStocks } from "./graphql/queries";
import {
  createStock as createStockMutation,
  deleteStock as deleteStockMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  async function fetchStocks() {
    const apiData = await API.graphql({ query: listStocks });
    const stocksFromAPI = apiData.data.listStocks.items;
    setStocks(stocksFromAPI);
  }

  async function createStock(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      madeAt: form.get("madeAt"),
      remaining: parseInt(form.get("remaining"))
    };
    await API.graphql({
      query: createStockMutation,
      variables: { input: data },
    });
    fetchStocks();
    event.target.reset();
  }

  async function deleteStock({ id }) {
    const newStocks = stocks.filter((stock) => stock.id !== id);
    setStocks(newStocks);
    await API.graphql({
      query: deleteStockMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Stocks App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createStock}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Stock Name"
            label="Stock Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="madeAt"
            placeholder="Stock created"
            label="Stock created"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="remaining"
            placeholder="Stock size"
            label="Stock size"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Stock
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Stocks</Heading>
      <View margin="3rem 0">
        {stocks.map((stock) => (
          <Flex
            key={stock.id || stock.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {stock.name}
            </Text>
            <Text as="span">{stock.madeAt}</Text>
            <Text as="span">{stock.remaining}</Text>
            <Text as="span">{stock.comment}</Text>
            <Button variation="link" onClick={() => deleteStock(stock)}>
              Delete stock
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);