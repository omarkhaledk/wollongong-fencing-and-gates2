export const formattedQuoteRequest = (values) => {
    return {
        "personalizations": [
            {
                "to": [
                    {
                        "email": "mkhaled1010@gmail.com",
                        "name": "Mohamad Khaled"
                    }
                ]
            },
            {
                "to": [
                    {
                        "email": "mkhaled1010@gmail.com",
                        "name": "Mohamad Khaled"
                    }
                ]
            }
        ],
        "from": {
            "email": "omarkhaled.1011@gmail.com",
            "name": "Omar Khaled"
        },
        "reply_to": {
            "email": "omarkhaled.1011@gmail.com",
            "name": "Customer Service Team"
        },
        "subject": "A Client's Quote",
        "content": [
            {
                "type": "text/html",
                "value": `<p>Service: ${values.service}</p>
                <p>Time: ${values.when}</p>
                <p>Location: ${values.serviceLocation}</p>
                <p>Mobile Number: ${values.mobileNumber}</p>
                <p>Details: ${values.details}</p>`
            }
        ],
        "mail_settings": {
            "bypass_list_management": {
                "enable": false
            },
            "footer": {
                "enable": false
            },
            "sandbox_mode": {
                "enable": false
            }
        },
        "tracking_settings": {
            "click_tracking": {
                "enable": true,
                "enable_text": false
            },
            "open_tracking": {
                "enable": true,
                "substitution_tag": "%open-track%"
            },
            "subscription_tracking": {
                "enable": false
            }
        }
    };
}