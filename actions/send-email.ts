"use server"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "Nombre, email y mensaje son requeridos" }
  }

  // Check if API key is available
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set")
    return { success: false, error: "Configuración de email no disponible" }
  }

  try {
    console.log("Attempting to send email with data:", { name, email, company })

    // Using Resend email service
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Using Resend's test domain
        to: ["jdeibarreta@cifro.com.ar"],
        subject: `Nueva Consulta ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
              <h1>Nueva Consulta - CIFRO</h1>
            </div>
            <div style="padding: 20px; background-color: #f8fafc;">
              <h2 style="color: #1e40af;">Detalles del Contacto</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Empresa:</strong> ${company || "No proporcionado"}</p>
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
      console.error("Resend API Error:", response.status, errorData)
      throw new Error(`Error al enviar el email: ${response.status}`)
    }

    const result = await response.json()
    console.log("Email sent successfully:", result)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Error al enviar el mensaje. Por favor, intenta nuevamente." }
  }
}
