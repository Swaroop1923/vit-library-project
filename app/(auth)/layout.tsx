import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src="/icons/logo.png" alt="logo" width={180} height={200} />
            {/* <h1 className="text-2xl font-semibold text-white">VIT Library</h1> */}
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image src="/icons/side.jpg"
        alt="auth illustration"
        height={1000}
        width={1000}
        className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default layout;
