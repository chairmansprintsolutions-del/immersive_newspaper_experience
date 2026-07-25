"use client";

import Floor from "./Floor";
import Table from "./Table";
import NewspaperScene from "./NewspaperScene";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <Floor />
      <Table />
      <NewspaperScene />
    </>
  );
}
