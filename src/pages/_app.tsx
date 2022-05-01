import React from "react";
import App, { AppContext } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../styles";
import { Provider } from "mobx-react";
import { fetchInitialStoreState, DataStore } from "../stores/DataStore";

const theme = extendTheme({ colors });

// https://medium.com/@borisdedejski/next-js-mobx-and-typescript-boilerplate-for-beginners-9e28ac190f7d
class MyApp extends App {
  state = {
    dataStore: new DataStore(),
  };

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState,
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props: any, state: any) {
    state.dataStore.hydrate(props.initialStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ChakraProvider theme={theme}>
        <Provider dataStore={this.state.dataStore}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    );
  }
}

export default MyApp;
