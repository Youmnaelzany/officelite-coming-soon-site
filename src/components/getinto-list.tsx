"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function GetIntoList() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "basic",
    phone: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({ ...prev, plan: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        plan: "basic",
        phone: "",
        company: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="shadow-[0px_50px_50px_-25px_rgba(75, 92, 154, 0.25)] flex h-[29.0625rem] w-[20.4375rem] items-center justify-center rounded-[0.8125rem] bg-white sm:h-[31.75rem] sm:w-[27.8125rem]">
        <div className="p-6 text-center">
          <h3 className="mb-4 text-xl font-bold text-[#333950]">Thank You!</h3>
          <p className="text-[#747B95]">Your submission has been received.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="shadow-[0px_50px_50px_-25px_rgba(75, 92, 154, 0.25)] h-[29.0625rem] w-[20.4375rem] rounded-[0.8125rem] bg-white sm:h-[31.75rem] sm:w-[27.8125rem]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 p-6">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-none bg-transparent text-base leading-7 font-normal text-[#333950] outline-none placeholder:text-[#747B95]/50"
          />
          <Separator />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-none bg-transparent text-base leading-7 font-normal text-[#333950] outline-none placeholder:text-[#747B95]/50"
          />
          <Separator />
          <Select
            value={formData.plan}
            onValueChange={handlePlanChange}
            required
          >
            <SelectTrigger className="border-none bg-transparent text-base leading-7 font-normal outline-none">
              <SelectValue
                placeholder="Basic Pack Free"
                className="text-base leading-7 font-bold text-[#333950]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="basic"
                className="text-base leading-7 font-bold text-[#333950]"
              >
                Basic Pack <span className="opacity-40">Free</span>
              </SelectItem>
              <Separator />
              <SelectItem
                value="pro"
                className="text-base leading-7 font-bold text-[#333950]"
              >
                Pro Pack <span className="opacity-40">$9.99</span>
              </SelectItem>
              <Separator />
              <SelectItem
                value="ultimate"
                className="text-base leading-7 font-bold text-[#333950]"
              >
                Ultimate Pack <span className="opacity-40">$19.99</span>
              </SelectItem>
            </SelectContent>
          </Select>
          <Separator />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-none bg-transparent text-base leading-7 font-normal text-[#333950] outline-none placeholder:text-[#747B95]/50"
          />
          <Separator />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border-none bg-transparent text-base leading-7 font-normal text-[#333950] outline-none placeholder:text-[#747B95]/50"
          />
          <Separator />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="mt-10 self-center">
            <Button
              type="submit"
              className="bg-[#5175FF] text-white hover:bg-[#829CFF]"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get Started"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
