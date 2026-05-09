"use client";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[rgba(200,232,53,0.15)] mx-6 lg:mx-12">
      <div className="py-8 text-center border-r-0 lg:border-r border-b lg:border-b-0 border-[rgba(200,232,53,0.15)] relative">
        <div className="font-heading text-[52px] text-lime leading-none">10+</div>
        <div className="text-[12px] text-muted tracking-[1.5px] uppercase mt-1 font-medium">Years Legacy</div>
      </div>
      <div className="py-8 text-center border-b lg:border-b-0 border-[rgba(200,232,53,0.15)] relative">
        <div className="font-heading text-[52px] text-lime leading-none">500+</div>
        <div className="text-[12px] text-muted tracking-[1.5px] uppercase mt-1 font-medium">Players Trained</div>
      </div>
      <div className="py-8 text-center border-r-0 lg:border-r border-[rgba(200,232,53,0.15)] relative">
        <div className="font-heading text-[52px] text-lime leading-none">3</div>
        <div className="text-[12px] text-muted tracking-[1.5px] uppercase mt-1 font-medium">Sports Offered</div>
      </div>
      <div className="py-8 text-center relative">
        <div className="font-heading text-[52px] text-lime leading-none">7</div>
        <div className="text-[12px] text-muted tracking-[1.5px] uppercase mt-1 font-medium">Days Coaching</div>
      </div>
    </div>
  );
}
