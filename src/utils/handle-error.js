import { createBrowserHistory } from "history";

const handleError = (err) => {
  if (err.response.status === 401 || err.response.status === 403) {
    let history = createBrowserHistory();
    history.replace("/");
  }
};

export default handleError;
