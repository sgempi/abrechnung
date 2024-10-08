# abrechnung 🧾

[![Production Build](https://github.com/david-loe/abrechnung/actions/workflows/production-build.yml/badge.svg)](https://github.com/david-loe/abrechnung/actions/workflows/production-build.yml)
[![Backend Test](https://github.com/david-loe/abrechnung/actions/workflows/backend-test.yml/badge.svg)](https://github.com/david-loe/abrechnung/actions/workflows/backend-test.yml)

**abrechnung 🧾** ist eine Web App die:

- Reisekosten- (inkl. automatischer Pauschalen Berechnung auch für internationale Reisen),
- Auslagen- und
- Krankenkosten-Abrechnungen

digital und einfach möglich macht.

https://github.com/david-loe/abrechnung/assets/56305409/8b31b6a1-e6c4-4bd9-bb76-3871e046a201

## Pauschalbeträge

[pauschbetrag-api](https://github.com/david-loe/pauschbetrag-api)

## Wechselkurse

[InforEuro](https://commission.europa.eu/funding-tenders/procedures-guidelines-tenders/information-contractors-and-beneficiaries/exchange-rate-inforeuro_en)

Dieser statische Währungsrechner zeigt den offiziellen monatlichen Buchungskurs der Europäischen Kommission für den Euro und die durch den Rechnungsführer im Einklang mit Artikel 19 der Haushaltsordnung festgelegten Umrechnungskurse an.

## API

[API Documentation](https://david-loe.github.io/abrechnung/)

## Deploy

Using prebuilt docker images:

https://github.com/david-loe/abrechnung/blob/822f3e5402e978e7a4364e64897ac386868d0273/deploy-compose.yml#L1-L34

ℹ Don't forget to specify [environment variables](.env.example) in a `.env` file or directly in the compose.yml.

## Run

### Gitpod

Click below to launch a ready-to-use Gitpod workspace in your browser.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/david-loe/abrechnung)

### Local

1. Install [Docker & Docker Compose](https://docs.docker.com/engine/install/)
2. Copy `.env.example` to `.env` and adapt if needed
3. Run `docker compose up`
4. Open `http://localhost:5000` and login with `professor:professor`

> ℹ You can change ports and URLs in the `.env` file

#### TLS in development

To use TLS in development (self signed certificate)

1. set the `TLS_CERT_CN` in `.env` to your host name.
2. set `VITE_FRONTEND_URL` to `https://your-hostname`
3. and `VITE_BACKEND_URL` to `https://your-hostname/backend`

## Schema

![Schema](schema.png)
