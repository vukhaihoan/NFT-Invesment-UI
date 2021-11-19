import { BrowserRouter as Router } from "react-router-dom";
import history from "routerHistory"; // maybe don't need this
import store from "store";
import { Provider } from "react-redux";
import { ThemeProvider } from "contexts/ThemeContext";
function Providers({ children }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    </ThemeProvider>
  );
}

export default Providers;
