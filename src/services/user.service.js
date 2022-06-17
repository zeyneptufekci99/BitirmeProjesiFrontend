import api from "../http-config";

const apiPath = "/Users";

class UserService {
  getAll() {
    return api.get(`${apiPath}`);
  }
  getById(id) {
    return api.get(`${apiPath}/${id}`);
  }

  create(data) {
    data.roleId = 1;
    data.point = 0;
    return api.post(`${apiPath}`, data);
  }

  update(data) {
    return api.put(`${apiPath}`, data);
  }

  remove(id) {
    return api.delete(`${apiPath}/${id}`);
  }
}

export default new UserService();
