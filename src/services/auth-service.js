import api from "../http-config";

const apiPath = "/Auth";
class AuthService {
  login({ username, password }) {
    return api.post(`${apiPath}`, {
      username: username,
      password: password,
    });
  }
}

export default new AuthService();
