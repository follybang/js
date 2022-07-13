const favoritesArray = ['id-6', 'id-17'];

const treeObject = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-17',
      name: 'Vehicles',
      nodes: [],
    },
  ],
};

const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

const result = markFavorites(treeObject, favoritesArray);

console.log(result);
