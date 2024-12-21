import Image from "next/image";

export default async function Home() {

  const res =  await fetch("http://localhost:3000/api/hello");

  const data = await res.json();

  console.log(data);

  return (
    <></>
  );
}
