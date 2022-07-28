exports.getData = async (req, res) => {
    try {
      res.json({msg:'hello from getData'})
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