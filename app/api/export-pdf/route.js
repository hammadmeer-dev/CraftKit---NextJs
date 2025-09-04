// app/api/export-pdf/route.js
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export async function POST(req) {
  try {
    const { html } = await req.json();

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath:
        process.env.NODE_ENV === "production"
          ? await chromium.executablePath()
          : process.platform === "win32"
          ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" // Windows local Chrome
          : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // Mac local Chrome
      headless: true,
    });

    const page = await browser.newPage();

    // ⚡ Inject Tailwind via CDN for now (simpler than loading _next CSS)
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

    await page.setContent(fullHtml, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (err) {
    console.error("❌ PDF generation error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
