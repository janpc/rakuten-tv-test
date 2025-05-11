export async function fetchList(name) {
  try {
    const res = await fetch(`https://gizmo.rakuten.tv/v3/lists/${name}?classification_id=5&device_identifier=web&locale=es&market_code=es`);

    if (!res.ok) {
      return {
        error: true,
        content: `Something went wrong loading ${name}.`,
      };
    }

    const { data } = await res.json();

    return {
      ...data,
      movies: data.contents.data,
    };
  } catch (e) {
    return e;
  }
}

export async function fetchMovie(id) {
  try {
    const res = await fetch(`https://gizmo.rakuten.tv/v3/movies/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`);

    if (!res.ok) {
      return {
        error: true,
        content: `Something went wrong loading ${id}.`,
      };
    }

    const { data } = await res.json();

    return data;
  } catch (e) {
    return e;
  }
}
