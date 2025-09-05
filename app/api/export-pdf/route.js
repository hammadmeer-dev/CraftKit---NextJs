// app/api/export-pdf/route.js
import puppeteer from "puppeteer";

export async function POST(req) {
  try {
    const { html } = await req.json();

    const browser = await puppeteer.launch({
      headless: true, // uses the bundled Chromium that Puppeteer downloads
    });

    const page = await browser.newPage();

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100">
          ${html}
        </body>
      </html>
    `;

    await page.setContent(fullHtml,{ waitUntil: "load" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (err) {
    console.error("❌ PDF generation error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
