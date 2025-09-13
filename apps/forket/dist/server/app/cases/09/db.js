const db = {
  notes: {
    async get(id) {
      await new Promise((r) => setTimeout(r, 1e3));
      return {
        id,
        title: "Some note"
      };
    }
  },
  comments: {
    async get(id) {
      await new Promise((r) => setTimeout(r, 1e3));
      return [
        {
          id: 1,
          noteId: id,
          content: "First comment"
        },
        {
          id: 2,
          noteId: id,
          content: "Second comment"
        }
      ];
    }
  }
};
var db_default = db;
export {
  db_default as default
};
