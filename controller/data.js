exports.getData = async (req, res) => {
    try {
      res.send('hii-from-data-default')
    } catch (e) {
      return res.send(e);
    }
  };

exports.getStudent = async (req, res) => {
    try {
      res.send('hii-update')
    } catch (e) {
      return res.send(e);
    }
  };