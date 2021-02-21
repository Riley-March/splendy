import React from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route } from 'react-router-dom';
import { Notifications } from 'react-push-notification';

import './App.css';

import { TicketPage } from './pages/TicketPage/TicketPage'
import { StatsPage } from './pages/StatsPage/StatsPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { Navbar } from './components/Navbar/Navbar'

function App() {
    const link = createHttpLink({
        uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    });

	const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: link,
	});

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Notifications />
                <Navbar title="Splendy" />
                <Route exact path="/" component={TicketPage} />
                <Route exact path="/stats" component={StatsPage} />
                <Route exact path="/about" component={AboutPage} />
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
