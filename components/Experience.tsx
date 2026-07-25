"use client";

import Floor from "./Floor";
import Table from "./Table";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <Floor />
      <Table />
    </>
  );
}
