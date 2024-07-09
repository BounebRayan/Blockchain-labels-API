export function filterFields(data) {
    return data.map(({ _id, timestamp, ...rest }) => rest);
  }