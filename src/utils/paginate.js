const paginate = (data, page, limit) => {
  const stratIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < data.length) {
    results.next = page + 1;
  }

  if (stratIndex > 0) {
    results.previous = page - 1;
  }

  results.result = data.slice(stratIndex, endIndex);

  return results;
};

export default paginate;
