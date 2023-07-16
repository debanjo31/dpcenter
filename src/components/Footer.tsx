import React from "react";

function Footer() {
  return (
    <div className="text-center bg-black p-8 text-white">
      <div className="flex justify-center gap-2 font-bold pt-12">
        <p>About</p>
        <p>Contact</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
      <p className="pb-12">&copy; DPCenter 2023.</p>
    </div>
  );
}

export default Footer;
