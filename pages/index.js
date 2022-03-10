import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = React.useState(null);

  React.useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      ?.find((row) => row.startsWith("language="))
      ?.split("=")[1];

    setCurrentLanguage(cookieValue);
  }, []);

  const handleChange = (event) => {
    document.cookie = `language=${event.target.value}; SameSite=None; Secure`;
    setCurrentLanguage(event.target.value);
  };

  const clearCookie = (event) => {
    document.cookie =
      "language=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
    setCurrentLanguage(null);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div style={{ margin: "1rem" }}>
          <h2>Select Language</h2>
          <p>Current Language: {currentLanguage ?? "null"}</p>
          <select value={currentLanguage ?? ""} onChange={handleChange}>
            {!currentLanguage ? <option>Select</option> : ""}
            <option value="TR">Turkish</option>
            <option value="EN">English</option>
            <option value="ES">Spanish</option>
          </select>

          <div style={{ marginTop: "1rem" }}>
            <button onClick={clearCookie}>Clear Language Cookie</button>
            <br />
            <small style={{ fontSize: "12px" }}>
            &quot;With Rewrite&quot; pages will return 404 when the language cookie does not exist.
            </small>
          </div>
        </div>
        <ul>
          <li>
            <Link href="/without-rewrite">Without Rewrite</Link>
          </li>
          <li>
            <Link href="/with-rewrite">With Rewrite</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
