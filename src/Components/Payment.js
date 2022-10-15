import axios from '../axios'


const loadScript = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }
        document.body.appendChild(script)
    })
}

const loadPayment = async (orderAmount, address) => {
    const res = await loadScript();

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }
    try {
        const result = await axios.post('payment/create-order', {
            amount: orderAmount * 100,
        })
        const { amount, id: order_id, currency } = result.data
        const {
            data: { key: razorpayKey }
        } = await axios.get('payment/get-rzrpay-key');

        const options = {
            key: razorpayKey,
            amount: amount.toString(),
            currency: currency,
            name: 'Fit At Home',
            description: "Your healthy food",
            order_id: order_id,
            handler: async function (res) {
                const result = await axios.post('payment/pay-order', {
                    amount: amount,
                    razorpayPaymentId: res.razorpay_payment_id,
                    razorpayOrderId: res.razorpay_order_id,
                    razorpaySignature: res.razorpay_signature,
                })
                alert(result.data)
            },
            image: 'https://fitathome-4a700.web.app/images/LogoInv.png',
            prefill: {
                name: 'Mohit',
                email: 'exam@gmail.com',
                contact: '+9189897845'
            },
            theme: {
                color: '#bf0404'
            },
            notes: {
                address: address
            },
            modal: {
                animation: true,
            }

        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

    } catch (error) {
        alert(error.message)

    }



}


export default loadPayment;
