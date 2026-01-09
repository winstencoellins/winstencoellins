import nodemailer from "nodemailer"

export async function POST(req: Request) {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.SK_GMAIL
        }
    })

    const mailOptions = {
        from: `${ data.email }`,
        to: process.env.EMAIL_ADDRESS,
        subject: `Hello from ${ data.name }`,
        text: `${ data.message }`,
        html: `<p>${ data.mesage }</p>`
    }

    try {
        const sendEmail = await transporter.sendEmail(mailOptions)

        return Response.json({
        success: true,
        data: {
            data
        },
        message: "Email sent successfully!"
    })
    } catch (err) {
        console.error(err)

        return Response.json({
            success: false,
            error: {
                code: "EMAIL_FAILED",
                message: "Failed to send message. Please try again."
            }
        })
    }
}