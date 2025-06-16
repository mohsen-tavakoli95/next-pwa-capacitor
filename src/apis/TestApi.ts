export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];
}
