<h1 align="center">
    <a href="#">
        <img src="./src/signa_frontend/public/SignaLogo.svg" style="margin-top:10px;margin-bottom:10px;width:150px;" alt="Signa Logo" width="400">
    </a>
</h1>

# Signa - The 1st Web3.0 eSign Platform in ICP Ecosystem
**Welcome to Signa, your trusted, decentralized, and easy to use document signing on the Blockchain. This project utilizes Internet Computer (ICP) as the main platform.**

(Click The Product Trailer Below)

[![Video Thumbnail](https://img.youtube.com/vi/kjK_8_tSr7E/0.jpg)](https://www.youtube.com/watch?v=kjK_8_tSr7E)


•	**The 1st eSign Platform in ICP Ecosytem**: eSigna is utilizing the Internet Computer Protocol (ICP) platform and aims to enrich the ICP ecosystem by providing users with a more diverse selection of applications, ultimately achieving a highly affordable platform for all

•	**Real Time Secured Web3.0 Enabled eSign**: By leveraging ICP architecture, Signa utilized a low-latency decentralized layer to develop a Web 2.0-friendly digital signing platform. This approach employs cloudless technology, resulting in a more cost-effective solution.

•	**Multiple Usage Internet Identity**: By incorporating ICP Internet Identities for platform usage, the interaction between the document sender (Identity 1) and the receiver (Identity 2) facilitates increased adoption of Internet Identities, promoting greater user engagement and integration within the system.

•	**Scannable QR Codes For URL Fetch**: To combat forgery, eSigna utilizes a unique code generated for each signature, which can be tracked through the document ID, ensuring enhanced security and traceability throughout the document verification process.

<h1 align="center">
    <img src="./src/signa_frontend/public/SignaProductPage.jpeg" style="margin-top:10px;margin-bottom:10px" alt="Signa Product Page" width="750"></a>
</h1>

## Signa Main Features
•	**Seamless User Profile:** By utilizing ICP Internet Identity, the sign-up process is simplified, eliminating the need for a password. 

•	**Send document:** Send and receive documents via email by uploading or dragging and dropping them, all while seamlessly integrating with ICP Internet Identity. Goodbye to Manual Print.

•	**Receive document:** Seamlessly receive documents from other ICP Internet Identity users or via email and proceed to e-sign with just one lightning-fast click.

•	**Unique eSign QR Code:** eSign generates a secure, unique QR code for every signature, making it extremely difficult to commit fraud. Reduce every risks in a possible ways.

•	**Dashboard:** Effortlessly track the progress of your documents and access detailed information on a comprehensive dashboard, ensuring you never lose track of important paperwork again.

## Get Started

Before starting exploring this project, please try to understand how Internet Computer (ICP) works by reading this documents

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)

You might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

## Running the project locally

For running the project locally, please follow these commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available on your localhost and DFX will returns the accessible address which looks like this `http://127.0.0.1:4943?canisterId={asset_canister_id}`.

## Developing

This project by default adopted monorepo paradigm where all projects centralized under 1 repo. If you take a look in the folder structure, under `/src` you will see `/signa_frontend` and `/signa_backend` which contains both frontend and backend code.

Tech stack that we used for this project
- Frontend
--- React
--- Vite

- Backend
--- Node v20
--- Typescript

### Making changes on Backend

Once you have done making changes on backend, you can redeploy your code by stopping current deployment and do `dfx deploy`. For now, no hot-reload configured.

### Making changes on Frontend

Frontend part is a bit unique, it doesn't need to be deployed through `dfx` to run. You can basically run the React project by calling

```bash
npm run dev
```

Which will start a server at `http://localhost:5173`, by default it will proxying API requests to the canister replica that runs at localhost port 4943.

## Testing Integration Between Frontend <> Backend

If you want to develop locally and want to test the integration between Frontend and Backend, what you need to do is run `dfx start` and then `dfx deploy`. Then dfx will provide the localhost url for Backend, Frontend and Internet Identity canister that you can access and test.
