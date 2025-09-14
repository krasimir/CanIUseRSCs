const db = {
  notes: {
    async get(id) {
      await new Promise((r) => setTimeout(r, 1000));
      return { id, title: "Some note" };
    }
  },
  comments: {
    async get(id) {
      await new Promise((r) => setTimeout(r, 1000));
      return [
        { id: 1, noteId: id, content: "First comment" },
        { id: 2, noteId: id, content: "Second comment" }
      ];
    }
  }
}

export default db;