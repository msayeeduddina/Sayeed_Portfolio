"use client";
import { GlareCard } from "../ui/glare-card";

export function GlareCardDemo() {
  return (
    <div className="h-full md:h-full w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-6">
      <GlareCard className="flex flex-col items-start justify-center">
        <div className="flex flex-col items-start text-start gap-8">
          <div className=" p-6 rounded-lg text-start max-w-sm ">
            <h3 className="text-lg font-bold text-gray-400">For Basic Use</h3>
            <h2 className="text-4xl font-bold mt-2">Basic Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1">
              $50 <span className="text-lg">/project</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Custom Solidity Smart Contract</li>
              <li>Basic Token Creation (ERC20 or BEP20)</li>
              <li>Gas Optimization for Small Contracts</li>
              <li>Single Contract Deployment</li>
              <li>2 Days Delivery</li>
            </ul>
          </div>
        </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-center bg-slate-950">
        <div className="flex flex-col items-start text-start gap-8">
          <div className=" p-6 rounded-lg text-start max-w-sm ">
            <h3 className="text-lg font-bold text-gray-400">Most Popular</h3>
            <h2 className="text-4xl font-bold mt-2">Standard Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1">
              $100 <span className="text-lg">/project</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Custom Smart Contract Development</li>
              <li>Token with Advanced Features (e.g., Tax, Burn, Mint)</li>
              <li>Integration with Frontend (React + Web3.js)</li>
              <li>Audit-Ready Code with Security Checks</li>
              <li>6 Days Delivery</li>
            </ul>
          </div>
        </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-center bg-slate-950">
        <div className="flex flex-col items-start text-start gap-8">
          <div className=" p-6 rounded-lg text-start max-w-sm ">
            <h3 className="text-lg font-bold text-gray-400">
              For Professionals
            </h3>
            <h2 className="text-4xl font-bold mt-2">Premium Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1">
              Custom<span className="text-lg"></span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Complex Smart Contract Development and Deployment</li>
              <li>
                End-to-End DApp Integration (Frontend + Backend + Blockchain)
              </li>
              <li>Advanced Debugging and Security Patching</li>
              <li>Personalized Consultation via Zoom</li>
              <li>Unlimited Revisions to Ensure Satisfaction</li>
            </ul>
          </div>
        </div>
      </GlareCard>
    </div>
  );
}
