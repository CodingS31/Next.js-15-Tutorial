"use client";
import { serverSideFunction } from "@/utils/server-utils";
import React from "react";

const ClientRoutePage = () => {
  const result = serverSideFunction();
  return <div>client page {result}</div>;
};

export default ClientRoutePage;
