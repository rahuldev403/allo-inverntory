import UploadForm from "@/components/UploadForm";
import React from "react";

const page = () => {
  return (
    <main className="wrapper container">
      <div className="mx-auto max-w-180 space-y-10">
        <section className="flex col gap-5">
          <h1 className="page-title-xl">Add new book</h1>
        </section>
        <UploadForm />
      </div>
    </main>
  );
};

export default page;
