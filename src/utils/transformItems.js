export default function transformItems(items) {
  return items.reduce((agg, item) => {
    if (!agg[item.id]) {
      agg[item.id] = {};
    }

    agg[item.id] = {
      name: item.name,
      dietaries: item.dietaries
    }

    return agg;
  }, {});
}