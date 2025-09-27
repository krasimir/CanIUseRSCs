import { Link } from "@lazarv/react-server/navigation";

import "./styles.css";

// <cases>
const cases = ["01","02","03","04","05","06","07","08","09","10","11","12"]
// </cases>

export default function App() {
  return (
    <main>
      <h1>Can I Use RSCs 🤔 Twofold</h1>
      <div>
        {cases.map((caseId) => (
          <Link to={`/case/${caseId}`} key={caseId} className="case">
            {caseId}
          </Link>
        ))}
      </div>
    </main>
  );
}
