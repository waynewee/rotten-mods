import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";

const ReduxApp: React.FC<AppProps> = ({ Component, pageProps }) => (<Component {...pageProps} />);

export default wrapper.withRedux(ReduxApp);
