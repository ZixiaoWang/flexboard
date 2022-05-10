/// <reference path="../custom.d.ts" />

import { h } from "preact";
import QRImage from "../icons/flexboard-qr-code.png";

export const QRCode = () => (
    <div className="qr">
        <img src={QRImage} alt="Flexboard QR Code" />
        <div className="is-text-center has-padding-vertical-8 is-text-bold white">
            <span>The site is optimized for Mobile views</span> <br />
            <span>Please scan QR Code to continue.</span>
        </div>
    </div>
)