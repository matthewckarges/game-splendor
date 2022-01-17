
const CARDS = {
    "TierOne": [
        {
            "Image": "/card_imgs/Tier1_1B_1B+3G+1R.png",
            "Price": {
                "Blue": 1,
                "Green": 3,
                "Red": 1
            },
            "Value": {
                "Gem": "Blue",
                "Points": 1
            }
        },
        {
            "Image": "/card_imgs/Tier1_1B_1W+1G+1R+1Bk.png",
            "Price": {
                "White": 1,
                "Green": 1,
                "Red": 1,
                "Black": 1
            },
            "Value": {
                "Gem": "Blue",
                "Points": 1
            }
        },
        {
            "Image": "/card_imgs/Tier1_1Bk_2G+1R.png",
            "Price": {
                "Green": 2,
                "Red": 1
            },
            "Value": {
                "Gem": "Black",
                "Points": 1
            }
        },
        {
            "Image": "/card_imgs/Tier1_1R_2W+1B+1G+1Bk.png",
            "Price": {
                "White": 2,
                "Blue": 1,
                "Green": 1,
                "Black": 1
            },
            "Value": {
                "Gem": "Red",
                "Points": 1
            }
        }
    ],
    "TierTwo": [
        {
            "Image": "/card_imgs/Tier2_1Bk_3W+2B+2G.png",
            "Price": {
                "White": 3,
                "Blue": 2,
                "Green": 2
            },
            "Value": {
                "Gem": "Black",
                "Points": 1
            }
        },
        {
            "Image": "/card_imgs/Tier2_2R_1W+4B+2G.png",
            "Price": {
                "White": 1,
                "Blue": 4,
                "Green": 2
            },
            "Value": {
                "Gem": "Red",
                "Points": 2
            }
        },
        {
            "Image": "/card_imgs/Tier2_2W_5R.png",
            "Price": {
                "Red": 5
            },
            "Value": {
                "Gem": "White",
                "Points": 2
            }
        },
        {
            "Image": "/card_imgs/Tier2_3R_6R.png",
            "Price": {
                "Red": 6
            },
            "Value": {
                "Gem": "Red",
                "Points": 3
            }
        }
    ],
    "TierThree": [
        {
            "Image": "/card_imgs/Tier3_3R_3W+5B+3G+3Bk.png",
            "Price": {
                "White": 3,
                "Blue": 5,
                "Green": 3,
                "Black": 3
            },
            "Value": {
                "Gem": "Red",
                "Points": 3
            }
        },
        {
            "Image": "/card_imgs/Tier3_4W_7Bk.png",
            "Price": {
                "Black": 7
            },
            "Value": {
                "Gem": "White",
                "Points": 4
            }
        },
        {
            "Image": "/card_imgs/Tier3_5G_7B+3G.png",
            "Price": {
                "Blue": 7,
                "Green": 3
            },
            "Value": {
                "Gem": "Green",
                "Points": 5
            }
        },
        {
            "Image": "/card_imgs/Tier3_5W_3W+7Bk.png",
            "Price": {
                "White": 3,
                "Black": 7
            },
            "Value": {
                "Points": 5,
                "Gem": "White"
            }
        }
    ]
}

const TILES = [
    {
        "Image": "/tile_imgs/Tile_3_3Bk+3R+3W.png",
        "Price": {
            "Red": 3,
            "White": 3,
            "Black": 3
        },
        "Value": {
            "Points": 3
        },
        "Available": true
    },
    {
        "Image": "/tile_imgs/Tile_3_3G+3B+3R.png",
        "Price": {
            "Green": 3,
            "Blue": 3,
            "Red": 3
        },
        "Value": {
            "Points": 3
        },
        "Available": true
    },
    {
        "Image": "/tile_imgs/Tile_3_4B+4G.png",
        "Price": {
            "Blue": 4,
            "Green": 4
        },
        "Value": {
            "Points": 3
        },
        "Available": true
    },
    {
        "Image": "/tile_imgs/Tile_3_4B+4W.png",
        "Price": {
            "Blue": 4,
            "White": 4
        },
        "Value": {
            "Points": 3
        },
        "Available": true
    },
    {
        "Image": "/tile_imgs/Tile_3_4Bk+4W.png",
        "Price": {
            "White": 4,
            "Black": 4
        },
        "Value": {
            "Points": 3
        },
        "Available": true
    }
]

export {CARDS, TILES}