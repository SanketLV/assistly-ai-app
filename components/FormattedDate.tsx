"use client";

import React, { useEffect, useState } from "react";

const FormattedDate = ({ date }: { date: string }) => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    setFormattedDate(new Date(date).toLocaleString());
  }, [date]);

  return <>{formattedDate}</>;
};

export default FormattedDate;
