import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { user_name, user_email, message } = await req.json();

    // Vérification des champs
    if (!user_name || !user_email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Définir les options de l'email
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, 
      subject: `Nouveau message de ${user_name}`,
      text: `Nom: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Nom:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Votre message a bien été envoyé !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
