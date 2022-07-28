exports.getData = async (req, res) => {
    try {
      res.json({msg:'hello from getData'})
    } catch (e) {
      return res.send(e);
    }
  };

exports.getStudent = async (req, res) => {
    try {
      res.json({
        count:10,
        msg:'hello from students'
      })
    } catch (e) {
      return res.send(e);
    }
  };