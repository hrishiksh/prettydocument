import Thumbnail from "./thumbnail";

export default function Layout(props) {
  return (
    <>
      <header className="mt-4 mb-20">
        <img
          src="/Logo.svg"
          alt="Pretty document logo"
          className="m-auto w-40"
        />
      </header>
      <main className="flex w-full justify-center">
        <Thumbnail />
        {props.children}
      </main>
    </>
  );
}
