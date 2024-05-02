import Task from "@app/models/tasks";
import { connectToDB } from "@app/utils/database";

import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { tasks } = await request.json();

  try {
    await connectToDB();
    const newTask = new Task({ tasks });

    await newTask.save();
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to create new task", { status: 500 });
  }
};
