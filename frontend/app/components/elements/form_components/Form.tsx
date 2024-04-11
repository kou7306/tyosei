"use client";
import React from "react";
import { FormEvent } from "react";
import Input from "./Input";
import Calendar from "./Calendar";
import SubmitButton from "../button/SubmitButton";

const Form = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = "some-id"; // ここで適切な ID を設定してください
    const response = await fetch("/api/user/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>イベント名</h1>
      <Input type="text" name="name" value="John Doe" />

      <h1>日時</h1>
      <Calendar />

      <h1>メモ</h1>
      <Input type="text" name="memo" value="Hello, World!" />
      <SubmitButton />
    </form>
  );
};

export default Form;
