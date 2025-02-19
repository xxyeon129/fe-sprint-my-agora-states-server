const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    if (id) {
      const filteredId = discussionsData.filter((el) => {
        return el.id === Number(id);
      });
      if (filteredId.length === 0) {
        res.status(404).send("404 error");
      }
      res.status(200).send(filteredId[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
