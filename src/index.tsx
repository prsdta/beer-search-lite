import React from "react";
// @ts-ignore
import { unstable_createRoot as createRoot } from "react-dom";
import App from "./App";
import FelaProvider from "./fela.renderer";

import "./lib/css_reset.css";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FelaProvider>
			<App />
		</FelaProvider>
	</React.StrictMode>,
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
