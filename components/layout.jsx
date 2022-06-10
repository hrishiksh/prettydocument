import Thumbnail from "./thumbnail";

export default function Layout(props) {
  return (
    <>
      <header className="mt-8 mb-20">
        <img src="/Logo.svg" alt="Pretty document logo" className="m-auto" />
      </header>
      <main className="flex w-full justify-center">
        <Thumbnail />
        {props.children}
      </main>
    </>
  );
}
