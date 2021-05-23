a = {
    "success": Boolean,
    "prices": {
        "crop_name": {
            "buyer_name": {
                "month": {
                    "Aprice": Number,//absolute price
                    "Rprice": Number,//relative price
                    "Collected": Number// Between 0 and 1, how much already collected
                },
                "month2":{...}
            },
            "buyer_name2":{...}
        },
        "crop_name2": { ...}
    }
}