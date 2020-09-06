import React from "react"
import { ReactQueryConfigProvider } from "react-query";

// Configure for all queries
const queryConfig = {
	shared: {
		suspense: true,
	},
};

const ReactQueryProvider = (props: { children: React.ReactNode }) => (
	<ReactQueryConfigProvider config={queryConfig}>
		{props.children}
	</ReactQueryConfigProvider>
);

export default ReactQueryProvider;
