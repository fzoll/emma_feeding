import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listStocks, listFeeds } from "./graphql/queries";
import {
  createFeed as createFeedMutation,
  createStock as createStockMutation,
  updateStock as updateStockMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [stocks, setStocks] = useState([]);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetchStocks();
    fetchFeeds();
  }, []);

  async function fetchStocks() {
    const apiData = await API.graphql(graphqlOperation(listStocks, { filter: {remaining: {ne: 0}} }));
    const stocksFromAPI = apiData.data.listStocks.items;
    setStocks(stocksFromAPI);
  }

  async function fetchFeeds() {
    const apiData = await API.graphql({ query: listFeeds });
    const feedsFromAPI = apiData.data.listFeeds.items;
    setFeeds(feedsFromAPI);
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

  async function decreaseStock(stock) {
    const date = new Date();
    stock.remaining -= 1;
    const stockData = {
      id: stock.id,
      remaining: stock.remaining,
    };
    const feedData = {
      feedAt: date.toLocaleDateString('hu-HU'),
      name: stock.name,
    };

    let newStocks;
    if(stock.remaining === 0) {
      newStocks = stocks.filter((stck) => stck.id !== stock.id);
    } else {
      newStocks = [...stocks];
    }
    setStocks(newStocks);

    let newFeeds = [...feeds];
    newFeeds.push(feedData);
    setFeeds(newFeeds);
    await API.graphql({
      query: updateStockMutation,
      variables: { input: stockData },
    });
    await API.graphql({
      query: createFeedMutation,
      variables: { input: feedData },
    });
}

  return (
    <View className="App">
      <Heading level={1}>My Stocks App</Heading>
      <Button onClick={signOut}>Sign Out</Button>
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
            type="date"
            name="madeAt"
            placeholder="Stock created"
            label="Stock created"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            type="number"
            name="remaining"
            placeholder="Stock size"
            label="Stock size"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            type="text"
            name="comment"
            placeholder="Comment"
            label="Comment"
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
            <Button variation="link" onClick={() => decreaseStock(stock)}>
              Use
            </Button>
          </Flex>
        ))}
      </View>
      <Heading level={2}>Feeds</Heading>
      <View margin="3rem 0">
        {feeds.map((feed) => (
          <Flex
            key={feed.id}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {feed.feedAt}
            </Text>
            <Text as="span">{feed.name}</Text>
            <Text as="span">{feed.comment}</Text>
          </Flex>
        ))}
      </View>
    </View>
  );
};

export default withAuthenticator(App, {hideSignUp:true});