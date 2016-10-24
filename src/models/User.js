module.exports = () =>
  class User {
    static async deserialize(id) {
      if (id !== 1) {
        return null;
      }
      const user = new User();
      user.id = 1;
      user.username = 'Sharaal';
      user.password = 'Sharaal';
      user.nickname = 'Sharaal';
      user.email = 'developer@dragonprojects.de';
      return user;
    }

    static async login(username, password) {
      if (username !== 'Sharaal' || password !== 'Sharaal') {
        return null;
      }
      const user = new User();
      user.id = 1;
      user.username = 'Sharaal';
      user.password = 'Sharaal';
      user.nickname = 'Sharaal';
      user.email = 'developer@dragonprojects.de';
      return user;
    }

    async serialize() {
      return this.id;
    }
  };
