import type { Route } from './+types/test';

interface TestObject {
  id: string;
  firstName: string;
  lastName: string;
}

export async function loader() {
  const data: TestObject = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/main`).then((res) => res.json());
  return data;
}

const DetailPage = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>
      <p>ID : {loaderData.id}</p>
      <p>USER NAME IS : {`${loaderData.firstName} ${loaderData.lastName}`}</p>
    </div>
  );
};

export default DetailPage;
