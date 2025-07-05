"use server"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "Todos los campos son requeridos" }
  }

  try {
    // Using Resend email service
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY || "re_jpQcnxHs_41c6UBMPEAx5ocrsU2pAeGoi"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Using Resend's test domain
        to: ["jdeibarreta@cifro.com.ar"],
        subject: `Nueva consulta de ${name} - CIFRO`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
              <h1>Nueva Consulta - CIFRO</h1>
            </div>
            <div style="padding: 20px; background-color: #f8fafc;">
              <h2 style="color: #1e40af;">Detalles del Contacto</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <h3 style="color: #1e40af;">Mensaje:</h3>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">
                ${message.replace(/\n/g, "<br>")}
              </div>
              <hr style="margin: 20px 0;">
              <p style="color: #64748b; font-size: 14px;">
                Este mensaje fue enviado desde el formulario de contacto del sitio web de CIFRO.
              </p>
            </div>
          </div>
        `,
        reply_to: email, // Allow replying directly to the sender
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Resend API Error:", errorData)
      throw new Error("Error al enviar el email")
    }

    const result = await response.json()
    console.log("Email sent successfully:", result)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Error al enviar el mensaje. Por favor, intenta nuevamente." }
  }
}
