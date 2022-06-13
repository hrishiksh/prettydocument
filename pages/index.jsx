import FlatBtn from "../components/flatBtn";

export default function Home() {
  return (
    <section className="pl-8">
      <FlatBtn text="Extract pages" path="extract" />
      <FlatBtn text="Add outline" path="outline" />
    </section>
  );
}
