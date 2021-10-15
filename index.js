import fetch from 'node-fetch';
import { readFileSync } from 'fs';

const { apiToken } = JSON.parse(readFileSync('./config.json'));

const uploadDocument = async (pathToFile) => {
    console.log('Uploading source document...');
    const response = await fetch(`https://app.ontask.io/api/v2/documents`, {
        body: readFileSync(pathToFile),
        headers: {
            Authorization: apiToken,
            'Content-Type': 'application/pdf'
        },
        method: 'POST'
    });
    const { documentId } = await response.json();
    console.log(`The source document has been uploaded (documentId: ${documentId}).`);
    return documentId;
}

const placeFieldsOnDocument = async (inputDocumentId) => {
    console.log('Placing fields on the document...');
    const response = await fetch(`https://app.ontask.io/api/v2/documents/${inputDocumentId}/fields`, {
        body: JSON.stringify({
            fields: [
                {
                    anchorString: '#checkbox#',
                    name: 'TestCheckbox',
                    removeAnchorString: true,
                    required: true,
                    type: 'checkbox'
                },
                {
                    anchorString: '#date#',
                    name: 'TestDate',
                    removeAnchorString: true,
                    required: true,
                    type: 'date'
                },
                {
                    anchorString: '#initials#',
                    name: 'TestInitials',
                    removeAnchorString: true,
                    required: true,
                    type: 'initials'
                },
                {
                    anchorString: '#signature#',
                    name: 'TestSignature',
                    removeAnchorString: true,
                    required: true,
                    type: 'signature'
                }
            ]
        }),
        headers: {
            Authorization: apiToken,
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    });

    const { documentId } = await response.json();
    console.log(`Fields placed successfully (documentId: ${documentId}).`);
    return documentId;
}

(async () => {
    if (apiToken === '<YOUR-API-TOKEN>' || !apiToken) {
        console.log('Error - Invalid token: Edit config.json and configure a valid API token.');
        process.exit(1);
    }
    const inputDocId = await uploadDocument('./documents/fields-doc.pdf');
    placeFieldsOnDocument(inputDocId);
})();
