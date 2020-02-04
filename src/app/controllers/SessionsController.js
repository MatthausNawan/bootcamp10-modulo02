import User from '../models/User';

class SessionController {
  store(req, res) {
    return res.json({ messagE: 'ok' });
  }
}

export default new SessionController();
