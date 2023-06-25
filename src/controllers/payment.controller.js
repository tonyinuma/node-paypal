import { HOST, PAYPAL_API } from "../common.js";
import { authTokenPaypal } from "../utils/paypal.js";
import axios from "axios";

export const createOrder = async (req, res) => {

    const order = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "120.00"
                }
            }
        ],
        application_context: {
            brand_name: "ID Store",
            landing_page: "NO_PREFERENCE",
            user_action: "PAY_NOW",
            return_url: `${HOST}/capture-order`,
            cancel_url: `${HOST}/cancel-order`
        }
    }

    const token = await authTokenPaypal()

    const { data: { links } } = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const { href } = links.find(link => link.rel === 'approve');

    return res.redirect(href);
}

export const captureOrder = (req, res) => {
    res.send('order captured!');
}

export const cancelOrder = (req, res) => {
    res.send('order canceled!');
}
