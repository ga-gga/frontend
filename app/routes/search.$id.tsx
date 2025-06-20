import type { Route } from './+types/search.$id';

interface TestResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function loader({ params }: Route.LoaderArgs) {
  const data: TestResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res) =>
    res.json(),
  );
  return data;
}

const SearchDetail = async ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <h1>Search Detail Page</h1>
      <h3>{`${loaderData.id} ${loaderData.title}`}</h3>
      <p>{loaderData.body}</p>
    </div>
  );
};

export default SearchDetail;
