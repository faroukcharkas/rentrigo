"use client";

export default function Listing({}: {}) {
  return (
    <div className="min-w-80">
      <div className="h-28 w-full bg-gradient-to-br from-light-gray to-gray rounded-[30px] mb-1"></div>
      <div className="flex justify-between mb-1">
        <h5 className="leading-none text-black">$5,320/mo</h5>
        <div className="flex">
          <p className="mr-2 leading-none text-blue-gray">5 bed</p>
          <p className="leading-none text-blue-gray">5 bath</p>
        </div>
      </div>
      <div>
        <p className="leading-none text-blue-gray mb-0.5">$1,915,200</p>
        <p className="leading-none text-accent">3859 Somewhere Street</p>
      </div>
    </div>
  );
}
