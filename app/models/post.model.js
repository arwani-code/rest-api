module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: String,
      body: String,
      published: Boolean,
    },
    { timetamps: true }
  );

  schema.method("toJson", () => {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model("posts", schema);
  return Post;
};
