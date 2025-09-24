"use server";

import db from './db';

export async function updateUsername(currentState, formData) {
  if (!formData.get("name")) {
    return { error: "Name is required" };
  }
  return await db.users.updateName(formData.get("name"));
}
