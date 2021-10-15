# OnTask API Fields Demo with Node.js

## Summary

Using the OnTask API, fields can be placed on a document's placeholders which can be used in a fill & sign task. This allows you to programmatically create signature, date, checkbox, initial, and text fields that your users interact with during the workflow runtime.

## API Documentation

Specifics about the OnTask API can be found in the official documentation at [docs.ontask.io](https://docs.ontask.io).

The specific endpoints used in this sample are:

- [Upload a Document](https://docs.ontask.io/?javascript#upload)
- [Set Document Fields](https://docs.ontask.io/?javascript#fields)

## Preparation

- An API key is generated for the group with at least the `Upload documents` and `Set document fields` permissions.

## Usage

### Set your API token in `config.json`

```json
{
    "apiToken": "<YOUR-API-TOKEN>"
}
```

### Install dependencies

```shell
npm install
```

### Run the demo

```shell
npm start
```
