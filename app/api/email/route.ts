export const runtime = 'edge';

import { google } from "googleapis";

type SheetForm = {
    email: string;
}

export async function POST(request: Request) {
    const body = await request.json() as SheetForm;

    try {
        console.log('POST accepted');
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.email]
                ]
            }
        });

        return new Response(JSON.stringify(response.data), {
            headers: { 'content-type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify(error), {
            headers: { 'content-type': 'application/json' },
        });
    }
}
  