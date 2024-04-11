import Image from "next/image";
import Form from "./components/elements/form_components/Form";

export default function Home() {
  return (
    <div className="text-center">
      <h1>日程調整</h1>
      <Form />
    </div>
  );
}
