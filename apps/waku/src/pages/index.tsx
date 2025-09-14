import { Link } from 'waku';

// <cases>
const cases = ["01","02","03","04","05","06","07","08","09","10","11","12"]
// </cases>

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">Can I Use RSCs 🤔 Waku</h1>
      <div className="mt-4 text-center">
        {cases.map((caseId) => (
          <Link to={`/case/${caseId}`} key={caseId} className="case">
            {caseId}
          </Link>
        ))}
      </div>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku'
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
