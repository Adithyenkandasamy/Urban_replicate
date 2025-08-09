import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 bg-neutral-50 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-4 gap-10 text-sm text-black/70">
        <div>
          <div className="mb-3">
            <Image src="/image.png" alt="Urban Replicate" width={36} height={36} className="rounded-md" />
          </div>
          <p className="leading-6">Services for your home: salon, cleaning, appliance repair, and more. Quality pros at your doorstep.</p>
        </div>
        <div>
          <h4 className="font-medium text-black mb-3">For customers</h4>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-black">Categories</a></li>
            <li><a href="#" className="hover:text-black">Cart</a></li>
            <li><a href="#" className="hover:text-black">Help</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-black mb-3">For professionals</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Become a partner</a></li>
            <li><a href="#" className="hover:text-black">Training</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-black mb-3">Social</h4>
          <div className="flex gap-3">
            <div className="size-8 rounded-full bg-black/10" />
            <div className="size-8 rounded-full bg-black/10" />
            <div className="size-8 rounded-full bg-black/10" />
          </div>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-black/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Urban Replicate</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
