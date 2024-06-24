const base_url= "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json?=title=rake";

export const get_api = async(endpoint: string) => {
  const response = await(fetch(base_url));
  const data = await response.json();

  //NOTE: Simulate the "filtering" from the API as required
  return data?.entries
  .filter((item: any) => item.programType === endpoint && item.releaseYear >= 2010)
  .sort((a: any, b: any) => a.title.localeCompare(b.title));
}

export const getMovies = async () => {
  return get_api('movie');
}

export const getSeries = async () => {
  return get_api('series')
}