import Link from "next/link";

export default function Footer({ children }) {
  return (
    <div className="container">
      {children}
      <div className={"footer--container"}>
        <div className={"footer--email"}>
          버그제보&피드백 : dev.sunghoon@gmail.com
        </div>
        <Link href="https://developers.neople.co.kr">
          <a target="_blank">
            <div className={"footer--neople"}>
              <span>Powered by </span>
              <span>Neople </span>
              <span>OpenAPI</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
