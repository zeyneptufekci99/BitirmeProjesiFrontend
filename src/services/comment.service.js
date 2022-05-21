import api from "../http-config";

const apiPath = "/Comments";

class CommentService {
  getAll() {
    return api.get(`${apiPath}`);
  }
  getById(id) {
    return api.get(`${apiPath}/${id}`);
  }

  create(data) {
    return api.post(`${apiPath}`, data);
  }

  update(data) {
    return api.put(`${apiPath}`, data);
  }

  remove(id) {
    return api.delete(`${apiPath}/${id}`);
  }
}

export default new CommentService();
