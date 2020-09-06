import React from "react"
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { createWebPreset } from "fela-preset-web";

const config = {
	devMode: process.env.NODE_ENV !== "production",
	plugins: [
		...createWebPreset({
			unit: [
				"px",
				{
					margin: "em",
					fontSize: "pt",
				},
			],
		}),
	],
};

const renderer = createRenderer(config);

const FelaProvider: React.FC<{}> = (props) => (
	<RendererProvider renderer={renderer}>{props.children}</RendererProvider>
);

export default FelaProvider;
