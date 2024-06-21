"use server";

async function sendVerificationEmail(formData: FormData) {
  const baseUrl = process.env.URL_BACKEND;

  try {
    const response = await fetch(`${baseUrl}/api/auth/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return response.json();
  } catch (error: any) {
    return error;
  }
}

export { sendVerificationEmail };
