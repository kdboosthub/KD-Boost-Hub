document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!"); // Debugging step

    // Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (menuToggle && dropdownMenu) {
        menuToggle.addEventListener("click", function () {
            dropdownMenu.classList.toggle("active");
            console.log("Menu Toggled!"); // Debugging step
        });

        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("active");
                console.log("Menu Closed!"); // Debugging step
            }
        });
    } else {
        console.error("Menu elements not found!");
    }

    // Inject Google Analytics and Verification Meta Tags
    const head = document.head;

    // Google Analytics
    const googleAnalyticsScript = document.createElement("script");
    googleAnalyticsScript.async = true;
    googleAnalyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    head.appendChild(googleAnalyticsScript);

    const googleAnalyticsConfig = document.createElement("script");
    googleAnalyticsConfig.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    `;
    head.appendChild(googleAnalyticsConfig);

    // Google Verification
    const googleVerificationMeta = document.createElement("meta");
    googleVerificationMeta.name = "google-site-verification";
    googleVerificationMeta.content = "your-google-code";
    head.appendChild(googleVerificationMeta);

    // Bing Verification
    const bingVerificationMeta = document.createElement("meta");
    bingVerificationMeta.name = "msvalidate.01";
    bingVerificationMeta.content = "your-bing-code";
    head.appendChild(bingVerificationMeta);

    // Rest of your existing code
    const categoryContainer = document.getElementById("category-container");
    const servicesContainer = document.getElementById("services-container");
    const descriptionContainer = document.getElementById("description-container");
    const detailsContainer = document.getElementById("details-container");
    const placeOrderButton = document.getElementById("placeOrder");

    // Categories and Services Data
    const categories = [
        {
            name: "MTN",
            description: `
                <p>🚨🚨 <b>Read this before you order</b></p>
                <ol>
                    <li>Ensure your phone number is correct</li>
                    <li>Select the preferred package</li>
                </ol>
                <p>If you don't do this, no service will be delivered, and there will be no refill.</p>
            `,
            linkPlaceholder: "Enter your phone number",
            services: [
                {
                    name: "📲 MTN Data Bundle | 10GB | Ultra Fast | GHC 25.0",
                    averageTime: "1 hour 49 minutes",
                    quantity: "10GB",
                    price: 25
                },
                {
                    name: "📲 MTN Data Bundle | 5GB | Slow | GHC 20.0",
                    averageTime: "3 hours 30 minutes",
                    quantity: "5GB",
                    price: 20
                }
            ]
        },
        {
            name: "Telecel",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your phone number is correct</li>
                    <li>Select the preferred package</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter your phone number",
            services: [
                {
                    name: "❤️ Telecel Data Bundle | 1GB | Instant | GHC 15.0",
                    averageTime: "30 minutes to 1 hour",
                    quantity: "1GB",
                    price: 15
                }
            ]
        },
        {
            name: "AirtelTigo",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your phone number is correct</li>
                    <li>Select the preferred package</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter your phone number",
            services: [
                {
                    name: "❤️ AirtelTigo Data Bundle | 1GB | Instant | GHC 15.0",
                    averageTime: "30 minutes to 1 hour",
                    quantity: "1GB",
                    price: 15
                }
            ]
        },
        {
            name: "Youtube Watch Hours 🚀🆕(Real Source & Never Drops)",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube video link",
            services: [
                {
                    name: "📺 YouTube Watch Hours | 1000 Hours | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Instagram Followers 🤍🤍 ᴺᵉʷ ᵁᵖᵈᵃᵗᵉˢ 🆕",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "EMERGENCY FOLLOWERS🆕",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Emergency Followers | 1000 Followers | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Facebook Watch Hours📄",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook video link",
            services: [
                {
                    name: "📺 Facebook Watch Hours | 1000 Hours | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "BECE/WASSCE/ DITO DITO ✅ QUESTIONS AND ANSWERS🌴🆕(Secret)",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your exam details are correct</li>
                    <li>Select the preferred package</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter your exam details",
            services: [
                {
                    name: "📚 BECE/WASSCE Questions & Answers | Full Package | GHC 100.0",
                    averageTime: "1 hour",
                    quantity: "Full Package",
                    price: 100
                }
            ]
        },
        {
            name: "Facebook Africa 🇳🇬🇬🇭🇲🇦",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Africa Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram Africa 🇳🇬🇬🇭🇲🇦✅",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Africa Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram Comments Verified Accounts",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📝 Instagram Comments | 100 Comments | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Instagram Mentions (Exclusive)",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📝 Instagram Mentions | 100 Mentions | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Instagram Story Swipe Up",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram story link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram story link",
            services: [
                {
                    name: "📲 Instagram Story Swipe Up | 1000 Swipes | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram Italy Services",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Italy Followers | 1000 Followers | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Instagram THREADS",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Threads Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram 🇬🇭 Africa 🇳🇬 Likes and Comments 🇬🇭🇬🇭🇳🇬🇳🇬",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📝 Instagram Likes & Comments | 1000 Likes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Instagram Likes",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "❤️ Instagram Likes | 1000 Likes | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Instagram Likes Per Minute",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "❤️ Instagram Likes Per Minute | 1000 Likes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Instagram Views",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram video link",
            services: [
                {
                    name: "📺 Instagram Views | 1000 Views | GHC 15.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 15
                }
            ]
        },
        {
            name: "Instagram Comments",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📝 Instagram Comments | 100 Comments | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Instagram Live Video",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram live link",
            services: [
                {
                    name: "📺 Instagram Live Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram Story",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram story link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram story link",
            services: [
                {
                    name: "📲 Instagram Story Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Instagram Impressions",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📊 Instagram Impressions | 1000 Impressions | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Instagram Reach",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📊 Instagram Reach | 1000 Reach | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Instagram Engagement",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📊 Instagram Engagement | 1000 Engagement | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram Profile Visits / Highlights / Shares",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Profile Visits | 1000 Visits | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Instagram TURKEY - VERIFIED Services 🇹🇷",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Turkey Verified Followers | 1000 Followers | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Instagram Auto Custom Comments - 30 Days Subscription",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📝 Instagram Auto Comments | 100 Comments | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Instagram Followers [Turn Off Flag For Review]",
            description: `
                <p>🚨🚨 <b>Read this before you order</b></p>
                <ol>
                    <li>Go to Instagram settings</li>
                    <li>Look for Follow and invite friends</li>
                    <li>Turn off the flag for review before ordering</li>
                </ol>
                <p>If you don't do this, no followers will be delivered, and there will be no refill.</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Followers | Max 10K | Ultra Fast | GHC 25.0 per 1000",
                    averageTime: "1 hour 49 minutes",
                    minQuantity: 10,
                    maxQuantity: 10000,
                    pricePer1000: 25
                },
                {
                    name: "📲 Instagram Followers | Max 5K | Slow | GHC 20.0 per 1000",
                    averageTime: "3 hours 30 minutes",
                    minQuantity: 10,
                    maxQuantity: 5000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Instagram Followers [No Need To Turn Off Flag For Review]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Followers | Max 10K | Ultra Fast | GHC 30.0 per 1000",
                    averageTime: "1 hour 49 minutes",
                    minQuantity: 10,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram Real Followers [Nigeria]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram profile link",
            services: [
                {
                    name: "📲 Instagram Real Followers | Max 10K | Ultra Fast | GHC 35.0 per 1000",
                    averageTime: "1 hour 49 minutes",
                    minQuantity: 10,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Instagram shares",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📲 Instagram Shares | 1000 Shares | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Instagram Saves",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram post link",
            services: [
                {
                    name: "📲 Instagram Saves | 1000 Saves | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Instagram Channel Members",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Instagram channel link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Instagram channel link",
            services: [
                {
                    name: "📲 Instagram Channel Members | 1000 Members | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Facebook Page Likes and Followers",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook page link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook page link",
            services: [
                {
                    name: "📲 Facebook Page Likes | 1000 Likes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Facebook Post Likes Updated ✨☀️❄️🚀",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook post link",
            services: [
                {
                    name: "❤️ Facebook Post Likes | 1000 Likes | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Facebook Target USA 🇺🇸",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook USA Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Facebook Video Views Updated 🚀🚀❄️",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook video link",
            services: [
                {
                    name: "📺 Facebook Video Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Facebook Live Stream",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook live link",
            services: [
                {
                    name: "📺 Facebook Live Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Facebook Followers / Friends / Group Members / Rating / Shares",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Facebook Post Likes",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook post link",
            services: [
                {
                    name: "❤️ Facebook Post Likes | 1000 Likes | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Facebook Story",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook story link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook story link",
            services: [
                {
                    name: "📲 Facebook Story Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Facebook Comments",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook post link",
            services: [
                {
                    name: "📝 Facebook Comments | 100 Comments | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Facebook Comments Likes [USA 🇺🇸]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook post link",
            services: [
                {
                    name: "❤️ Facebook Comments Likes | 1000 Likes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Facebook Post Likes [EMOJI]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook post link",
            services: [
                {
                    name: "❤️ Facebook Post Likes [EMOJI] | 1000 Likes | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Facebook Live Stream [Cheap]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook live link",
            services: [
                {
                    name: "📺 Facebook Live Views [Cheap] | 1000 Views | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Facebook Services [UK 🇬🇧]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook UK Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Facebook Services [Australia 🇦🇺]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Australia Followers | 1000 Followers | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Facebook Services [Canada 🇨🇦]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Canada Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Facebook Services [Russia 🇷🇺]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Russia Followers | 1000 Followers | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Facebook Services [Kenya 🇰🇪]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Kenya Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Facebook Services [Nigeria 🇳🇬]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Nigeria Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Facebook Services [Ghana 🇬🇭]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Facebook profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Facebook profile link",
            services: [
                {
                    name: "📲 Facebook Ghana Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Youtube Subscribers |♻️|Non Drop| ᴺᵉʷ ᵁᵖᵈᵃᵗᵉˢ 📡❇️💎",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube channel link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube channel link",
            services: [
                {
                    name: "📲 YouTube Subscribers | 1000 Subscribers | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Youtube Views🏝️🌴|🔆🔆",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube video link",
            services: [
                {
                    name: "📺 YouTube Views | 1000 Views | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "YouTube Live Stream - Fast & Stable Server",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube live link",
            services: [
                {
                    name: "📺 YouTube Live Stream Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "YouTube Live Stream - Best Price",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube live link",
            services: [
                {
                    name: "📺 YouTube Live Stream Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "YouTube Live Stream - 𝐕𝐈𝐏 (Always Working)",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube live link",
            services: [
                {
                    name: "📺 YouTube Live Stream Views | 1000 Views | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Youtube Live Stream [EXCLUSIVE - BEST FOR RANKING]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube live link",
            services: [
                {
                    name: "📺 YouTube Live Stream Views | 1000 Views | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Youtube Shorts",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube Shorts link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube Shorts link",
            services: [
                {
                    name: "📺 YouTube Shorts Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Youtube Likes / Dislikes / Shares",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube video link",
            services: [
                {
                    name: "❤️ YouTube Likes | 1000 Likes | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Youtube Comments",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube video link",
            services: [
                {
                    name: "📝 YouTube Comments | 100 Comments | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Youtube Live Stream / Premiere",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube live link",
            services: [
                {
                    name: "📺 YouTube Live Stream Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Youtube Watchtime",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube video link",
            services: [
                {
                    name: "📺 YouTube Watchtime | 1000 Hours | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Youtube Views REAL VIEWS",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube video link",
            services: [
                {
                    name: "📺 YouTube Real Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Youtube Live Stream [Low-Priced] Best Working",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube live link",
            services: [
                {
                    name: "📺 YouTube Live Stream Views | 1000 Views | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Youtube Live Stream [CONCURRENT - CHEAPEST]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your YouTube live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter YouTube live link",
            services: [
                {
                    name: "📺 YouTube Live Stream Views | 1000 Views | GHC 15.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 15
                }
            ]
        },
        {
            name: "TikTok Followers Updated (Fastest)🚀",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok profile link",
            services: [
                {
                    name: "📲 TikTok Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "TikTok Likes Updated",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok video link",
            services: [
                {
                    name: "❤️ TikTok Likes | 1000 Likes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Tik tok Nigeria",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok profile link",
            services: [
                {
                    name: "📲 TikTok Nigeria Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "TikTok Views",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok video link",
            services: [
                {
                    name: "📺 TikTok Views | 1000 Views | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "TikTok Comments",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok video link",
            services: [
                {
                    name: "📝 TikTok Comments | 100 Comments | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "TikTok Live Stream Views - Africa 🇳🇬🇬🇭🇱🇾🇸🇳",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok live link",
            services: [
                {
                    name: "📺 TikTok Live Stream Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "TikTok Shares / Saves / Downloads",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok video link",
            services: [
                {
                    name: "📲 TikTok Shares | 1000 Shares | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "TikTok Live Views",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok live link",
            services: [
                {
                    name: "📺 TikTok Live Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "TikTok Live Likes / Shares / Comments",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TikTok live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TikTok live link",
            services: [
                {
                    name: "📝 TikTok Live Comments | 100 Comments | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "X - Twitter Space Listeners",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter Space link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter Space link",
            services: [
                {
                    name: "📲 Twitter Space Listeners | 1000 Listeners | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "X - Twitter Impressions / Bookmarks",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter post link",
            services: [
                {
                    name: "📊 Twitter Impressions | 1000 Impressions | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Twitter Likes",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter post link",
            services: [
                {
                    name: "❤️ Twitter Likes | 1000 Likes | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "X - Twitter Retweets",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter post link",
            services: [
                {
                    name: "📲 Twitter Retweets | 1000 Retweets | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Twitter Mentions",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter profile link",
            services: [
                {
                    name: "📝 Twitter Mentions | 100 Mentions | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "X - Twitter Mentions",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter profile link",
            services: [
                {
                    name: "📝 Twitter Mentions | 100 Mentions | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Twitter Auto Likes / Retweets",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter post link",
            services: [
                {
                    name: "📲 Twitter Auto Likes | 1000 Likes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "X - Twitter Followers Low Drop",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitter profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitter profile link",
            services: [
                {
                    name: "📲 Twitter Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Telegram Members",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram group link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram group link",
            services: [
                {
                    name: "📲 Telegram Members | 1000 Members | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Telegram Reactions",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram post link",
            services: [
                {
                    name: "📝 Telegram Reactions | 100 Reactions | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Telegram Views",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram post link",
            services: [
                {
                    name: "📺 Telegram Views | 1000 Views | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Telegram Auto Views",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram post link",
            services: [
                {
                    name: "📺 Telegram Auto Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Telegram Members [Cheap]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram group link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram group link",
            services: [
                {
                    name: "📲 Telegram Members | 1000 Members | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Telegram Members No Refill",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram group link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram group link",
            services: [
                {
                    name: "📲 Telegram Members | 1000 Members | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Telegram Members Guaranteed",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram group link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram group link",
            services: [
                {
                    name: "📲 Telegram Members | 1000 Members | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Telegram Comments",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram post link",
            services: [
                {
                    name: "📝 Telegram Comments | 100 Comments | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Telegram Shares/Votes",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram post link",
            services: [
                {
                    name: "📝 Telegram Shares | 100 Shares | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Telegram Channel Post Stars ⭐",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Telegram channel post link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Telegram channel post link",
            services: [
                {
                    name: "📝 Telegram Channel Post Stars | 100 Stars | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Whatsapp [All Services]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your WhatsApp number is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter WhatsApp number",
            services: [
                {
                    name: "📲 WhatsApp Services | 1000 Services | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Whatsapp Channel Members [Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your WhatsApp channel link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter WhatsApp channel link",
            services: [
                {
                    name: "📲 WhatsApp Channel Members | 1000 Members | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Whatsapp Poll Votes",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your WhatsApp poll link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter WhatsApp poll link",
            services: [
                {
                    name: "📝 WhatsApp Poll Votes | 1000 Votes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "LinkedIn🇺🇸",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your LinkedIn profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter LinkedIn profile link",
            services: [
                {
                    name: "📲 LinkedIn Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "LinkedIn USA",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your LinkedIn profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter LinkedIn profile link",
            services: [
                {
                    name: "📲 LinkedIn USA Followers | 1000 Followers | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Linkedin All Services",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your LinkedIn profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter LinkedIn profile link",
            services: [
                {
                    name: "📲 LinkedIn All Services | 1000 Services | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Snapchat Followers [ARAB]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Snapchat profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Snapchat profile link",
            services: [
                {
                    name: "📲 Snapchat Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Snapchat Spotlight 💸",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Snapchat Spotlight link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Snapchat Spotlight link",
            services: [
                {
                    name: "📺 Snapchat Spotlight Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Snapchat Views [ARAB]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Snapchat video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Snapchat video link",
            services: [
                {
                    name: "📺 Snapchat Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Snapchat Followers [EUROPE + USA]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Snapchat profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Snapchat profile link",
            services: [
                {
                    name: "📲 Snapchat Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Snapchat Views [EUROPE + USA]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Snapchat video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Snapchat video link",
            services: [
                {
                    name: "📺 Snapchat Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Snapchat Followers And Likes",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Snapchat profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Snapchat profile link",
            services: [
                {
                    name: "📲 Snapchat Followers & Likes | 1000 Followers | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Audiomack",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Audiomack track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Audiomack track link",
            services: [
                {
                    name: "📺 Audiomack Plays | 1000 Plays | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Audiomack All Services",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Audiomack profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Audiomack profile link",
            services: [
                {
                    name: "📲 Audiomack All Services | 1000 Services | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Boomplay",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Boomplay track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Boomplay track link",
            services: [
                {
                    name: "📺 Boomplay Plays | 1000 Plays | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Apple Music",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Apple Music track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Apple Music track link",
            services: [
                {
                    name: "📺 Apple Music Plays | 1000 Plays | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Spotify Ghana & Nigeria Followers",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify profile link",
            services: [
                {
                    name: "📲 Spotify Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Spotify Free Plays",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Free Plays | 1000 Plays | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Spotify Premium Plays",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Premium Plays | 1000 Plays | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Spotify Algorithmic Plays",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Algorithmic Plays | 1000 Plays | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Spotify Chart Plays",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Chart Plays | 1000 Plays | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Spotify Editorial Plays",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Editorial Plays | 1000 Plays | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Spotify Plays [From Ads]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Plays [From Ads] | 1000 Plays | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Spotify Plays [Device Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Plays [Device Targeted] | 1000 Plays | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Spotify - USA",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify profile link",
            services: [
                {
                    name: "📲 Spotify USA Followers | 1000 Followers | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Spotify Followers",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify profile link",
            services: [
                {
                    name: "📲 Spotify Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Spotify Search Plays",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Search Plays | 1000 Plays | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Spotify Podcast",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify podcast link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify podcast link",
            services: [
                {
                    name: "📺 Spotify Podcast Plays | 1000 Plays | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Spotify Monthly Listeners",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify profile link",
            services: [
                {
                    name: "📲 Spotify Monthly Listeners | 1000 Listeners | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Spotify Monthly Listeners [Country Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify profile link",
            services: [
                {
                    name: "📲 Spotify Monthly Listeners [Country Targeted] | 1000 Listeners | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Spotify Saves",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Saves | 1000 Saves | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Spotify Packages",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify profile link",
            services: [
                {
                    name: "📲 Spotify Packages | 1000 Packages | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Spotify Promotion [ADS]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Promotion [ADS] | 1000 Plays | GHC 35.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 35
                }
            ]
        },
        {
            name: "Spotify [Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify [Targeted] | 1000 Plays | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Spotify Fast Plays [Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Fast Plays [Targeted] | 1000 Plays | GHC 45.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 45
                }
            ]
        },
        {
            name: "Spotify Plays Monthly Listeners [Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Plays Monthly Listeners [Targeted] | 1000 Plays | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Spotify - Unique Plays [Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify track link",
            services: [
                {
                    name: "📺 Spotify Unique Plays [Targeted] | 1000 Plays | GHC 55.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 55
                }
            ]
        },
        {
            name: "Spotify - Followers [Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Spotify profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Spotify profile link",
            services: [
                {
                    name: "📲 Spotify Followers [Targeted] | 1000 Followers | GHC 60.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 60
                }
            ]
        },
        {
            name: "Twitch",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitch channel link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitch channel link",
            services: [
                {
                    name: "📺 Twitch Views | 1000 Views | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Twitch Live Views",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Twitch live link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Twitch live link",
            services: [
                {
                    name: "📺 Twitch Live Views | 1000 Views | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Backlink [SEO]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📝 Backlink [SEO] | 100 Backlinks | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Clubhouse",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Clubhouse profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Clubhouse profile link",
            services: [
                {
                    name: "📲 Clubhouse Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Crypto Services [OpenSea, CoinMarketCap, Rarible, CoinGecko, and More]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your crypto profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter crypto profile link",
            services: [
                {
                    name: "📲 Crypto Services | 1000 Services | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Dailymotion",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Dailymotion video link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Dailymotion video link",
            services: [
                {
                    name: "📺 Dailymotion Views | 1000 Views | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Datpiff",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Datpiff track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Datpiff track link",
            services: [
                {
                    name: "📺 Datpiff Plays | 1000 Plays | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Deezer Plays",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Deezer track link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Deezer track link",
            services: [
                {
                    name: "📺 Deezer Plays | 1000 Plays | GHC 20.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 20
                }
            ]
        },
        {
            name: "Discord",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Discord server link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Discord server link",
            services: [
                {
                    name: "📲 Discord Members | 1000 Members | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Discord Direct Message",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Discord profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Discord profile link",
            services: [
                {
                    name: "📝 Discord Direct Messages | 1000 Messages | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Discord Boost",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Discord server link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Discord server link",
            services: [
                {
                    name: "📲 Discord Boosts | 1000 Boosts | GHC 40.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 40
                }
            ]
        },
        {
            name: "Discord Community [JAP EXCLUSIVE] [🔥🔥🔥 GREAT FOR NFT MARKETING]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Discord community link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Discord community link",
            services: [
                {
                    name: "📲 Discord Community Members | 1000 Members | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Discord Community [EXCLUSIVE] [ GREAT FOR NFT MARKETING]🔥🔥",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Discord community link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Discord community link",
            services: [
                {
                    name: "📲 Discord Community Members | 1000 Members | GHC 60.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 60
                }
            ]
        },
        {
            name: "Dribble",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Dribble profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Dribble profile link",
            services: [
                {
                    name: "📲 Dribble Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Fansly",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Fansly profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Fansly profile link",
            services: [
                {
                    name: "📲 Fansly Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Google Reviews",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Google business link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Google business link",
            services: [
                {
                    name: "📝 Google Reviews | 100 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Google Maps Citations",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Google Maps business link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Google Maps business link",
            services: [
                {
                    name: "📝 Google Maps Citations | 100 Citations | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Google Real Visitors",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Google Real Visitors | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "IMDB Votes",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your IMDB profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter IMDB profile link",
            services: [
                {
                    name: "📝 IMDB Votes | 1000 Votes | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "IMDB Reviews",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your IMDB profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter IMDB profile link",
            services: [
                {
                    name: "📝 IMDB Reviews | 100 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 10,
                    maxQuantity: 1000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "IPTV Premium Subscription",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your IPTV subscription link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter IPTV subscription link",
            services: [
                {
                    name: "📺 IPTV Premium Subscription | 1 Month | GHC 100.0",
                    averageTime: "1 hour",
                    quantity: "1 Month",
                    price: 100
                }
            ]
        },
        {
            name: "Kick.com",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Kick.com profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Kick.com profile link",
            services: [
                {
                    name: "📲 Kick.com Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Kick Chat Bots",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Kick.com chat link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Kick.com chat link",
            services: [
                {
                    name: "📝 Kick Chat Bots | 1000 Bots | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Kwai",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Kwai profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Kwai profile link",
            services: [
                {
                    name: "📲 Kwai Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Likee",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Likee profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Likee profile link",
            services: [
                {
                    name: "📲 Likee Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Line",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Line profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Line profile link",
            services: [
                {
                    name: "📲 Line Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Line Voom",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Line Voom profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Line Voom profile link",
            services: [
                {
                    name: "📲 Line Voom Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Medium",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Medium profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Medium profile link",
            services: [
                {
                    name: "📲 Medium Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Mentimeter / Menti",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Menti link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Menti link",
            services: [
                {
                    name: "📝 Menti Votes | 1000 Votes | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Mixcloud",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Mixcloud profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Mixcloud profile link",
            services: [
                {
                    name: "📲 Mixcloud Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Mobile App Installs",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your mobile app link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter mobile app link",
            services: [
                {
                    name: "📲 Mobile App Installs | 1000 Installs | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Mobile App Ratings & Reviews",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your mobile app link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter mobile app link",
            services: [
                {
                    name: "📝 Mobile App Ratings & Reviews | 1000 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Ok.ru",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Ok.ru profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Ok.ru profile link",
            services: [
                {
                    name: "📲 Ok.ru Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "OnlyFans",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your OnlyFans profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter OnlyFans profile link",
            services: [
                {
                    name: "📲 OnlyFans Followers | 1000 Followers | GHC 30.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 30
                }
            ]
        },
        {
            name: "Other Reviews",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your review link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter review link",
            services: [
                {
                    name: "📝 Other Reviews | 1000 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Pinterest",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Pinterest profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Pinterest profile link",
            services: [
                {
                    name: "📲 Pinterest Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Podcast [iTunes Store]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your podcast link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter podcast link",
            services: [
                {
                    name: "📝 Podcast Reviews | 1000 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Podcast Reviews [iTunes Store]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your podcast link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter podcast link",
            services: [
                {
                    name: "📝 Podcast Reviews | 1000 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Quora",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Quora profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Quora profile link",
            services: [
                {
                    name: "📲 Quora Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Reddit",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Reddit profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Reddit profile link",
            services: [
                {
                    name: "📲 Reddit Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Reverbenation",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Reverbenation profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Reverbenation profile link",
            services: [
                {
                    name: "📲 Reverbenation Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Rutube.ru",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Rutube profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Rutube profile link",
            services: [
                {
                    name: "📲 Rutube Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Rumble.com",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Rumble profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Rumble profile link",
            services: [
                {
                    name: "📲 Rumble Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Shazam",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Shazam profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Shazam profile link",
            services: [
                {
                    name: "📲 Shazam Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Shopee",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Shopee profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Shopee profile link",
            services: [
                {
                    name: "📲 Shopee Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "SoundCloud",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your SoundCloud profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter SoundCloud profile link",
            services: [
                {
                    name: "📲 SoundCloud Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Tidal",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Tidal profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Tidal profile link",
            services: [
                {
                    name: "📲 Tidal Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Trovo",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Trovo profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Trovo profile link",
            services: [
                {
                    name: "📲 Trovo Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "TrustPilot Reviews",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TrustPilot profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TrustPilot profile link",
            services: [
                {
                    name: "📝 TrustPilot Reviews | 1000 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "TripAdvisor Custom Reviews",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your TripAdvisor profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter TripAdvisor profile link",
            services: [
                {
                    name: "📝 TripAdvisor Custom Reviews | 1000 Reviews | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Tumblr",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Tumblr profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Tumblr profile link",
            services: [
                {
                    name: "📲 Tumblr Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "VK.com",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your VK.com profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter VK.com profile link",
            services: [
                {
                    name: "📲 VK.com Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Vkontakte",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Vkontakte profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Vkontakte profile link",
            services: [
                {
                    name: "📲 Vkontakte Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Vimeo",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Vimeo profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Vimeo profile link",
            services: [
                {
                    name: "📲 Vimeo Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Yandex",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your Yandex profile link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter Yandex profile link",
            services: [
                {
                    name: "📲 Yandex Followers | 1000 Followers | GHC 25.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 25
                }
            ]
        },
        {
            name: "Website Traffic [+Referrer]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic [+Referrer] | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic [Iphone 14] [RST™ - Real Social Traffic]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic [Iphone 14] | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic - SEO FRIENDLY- [Targeted]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic - SEO FRIENDLY- [Targeted] | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic [+Referrer]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic [+Referrer] | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic [Iphone 14] [RST™ - Real Social Traffic]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic [Iphone 14] | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic - SEO FRIENDLY- [Targeted]🇬🇧",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic - SEO FRIENDLY- [Targeted]🇬🇧 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from UK [+ Choose Referrer]🇺🇸",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from UK [+ Choose Referrer]🇺🇸 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from USA [+ Choose Referrer]🇰🇷",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from USA [+ Choose Referrer]🇰🇷 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from South Korea [+ Choose Referrer]🇮🇳",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from South Korea [+ Choose Referrer]🇮🇳 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from India [+ Choose Referrer]🇧🇷",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from India [+ Choose Referrer]🇧🇷 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Brazil [+ Choose Referrer]🇮🇩",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Brazil [+ Choose Referrer]🇮🇩 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Indonesia [+ Choose Referrer]🇩🇪",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Indonesia [+ Choose Referrer]🇩🇪 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Germany [+ Choose Referrer]🇫🇷",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Germany [+ Choose Referrer]🇫🇷 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from France [+ Choose Referrer]🇨🇦",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from France [+ Choose Referrer]🇨🇦 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Canada [+ Choose Referrer]🇷🇺",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Canada [+ Choose Referrer]🇷🇺 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Russia [+ Choose Referrer]🇺🇦",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Russia [+ Choose Referrer]🇺🇦 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Ukraine [+ Choose Referrer]🇲🇽",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Ukraine [+ Choose Referrer]🇲🇽 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Mexico [+ Choose Referrer]🇻🇳",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Mexico [+ Choose Referrer]🇻🇳 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Vietnam [+ Choose Referrer]🇨🇿",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Vietnam [+ Choose Referrer]🇨🇿 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Czech [+ Choose Referrer]🇮🇹",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Czech [+ Choose Referrer]🇮🇹 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Italy [+ Choose Referrer]🇳🇱",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Italy [+ Choose Referrer]🇳🇱 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Netherlands [+ Choose Referrer]🇵🇱",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Netherlands [+ Choose Referrer]🇵🇱 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Poland [+ Choose Referrer]🇪🇸",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Poland [+ Choose Referrer]🇪🇸 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Spain [+ Choose Referrer]🇹🇷",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Spain [+ Choose Referrer]🇹🇷 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Turkey [+ Choose Referrer]🇨🇳",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Turkey [+ Choose Referrer]🇨🇳 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from China [+ Choose Referrer]🇸🇬",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from China [+ Choose Referrer]🇸🇬 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Singapore [+ Choose Referrer]🇹🇼",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Singapore [+ Choose Referrer]🇹🇼 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Taiwan [+ Choose Referrer]🇹🇭",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Taiwan [+ Choose Referrer]🇹🇭 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Thailand [+ Choose Referrer]🇯🇵",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Thailand [+ Choose Referrer]🇯🇵 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Japan [+ Choose Referrer]🇵🇰",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Japan [+ Choose Referrer]🇵🇰 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Pakistan [+ Choose Referrer]🇪🇬",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Pakistan [+ Choose Referrer]🇪🇬 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Egypt [+ Choose Referrer]🇵🇹",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Egypt [+ Choose Referrer]🇵🇹 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Portugal [+ Choose Referrer]🇷🇴",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Portugal [+ Choose Referrer]🇷🇴 | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        },
        {
            name: "Website Traffic from Romania [+ Choose Referrer]",
            description: `
                <p>💖 <b>Important Instructions</b></p>
                <ul>
                    <li>Ensure your website link is correct</li>
                    <li>Select the preferred quantity</li>
                </ul>
                <p>⏳ Delivery time: 1-2 hours</p>
            `,
            linkPlaceholder: "Enter website link",
            services: [
                {
                    name: "📊 Website Traffic from Romania [+ Choose Referrer] | 1000 Visitors | GHC 50.0",
                    averageTime: "1 hour",
                    minQuantity: 100,
                    maxQuantity: 10000,
                    pricePer1000: 50
                }
            ]
        }
    ];

// Inject Category
const categoryDropdown = document.getElementById("category");

// Clear existing options (if any)
categoryDropdown.innerHTML = '<option value="">Choose a Category</option>';

// Inject categories into dropdown
categories.forEach(cat => {
    let option = document.createElement("option");
    option.textContent = cat.name;
    option.value = cat.name;
    categoryDropdown.appendChild(option);
});

// Inject Services Dropdown
const servicesDropdown = document.getElementById("services");

// Clear existing options (if any)
servicesDropdown.innerHTML = '<option value="">Choose a Service</option>';

// Function to update services & description based on selected category
function updateCategoryDetails() {
    let selectedCategory = categories.find(cat => cat.name === categoryDropdown.value);
    
    // Clear existing services
    servicesDropdown.innerHTML = '<option value="">Choose a Service</option>';

    // Update description (Only category-based)
    descriptionContainer.className = "description"; // Ensure styling is applied
    descriptionContainer.innerHTML = selectedCategory.description;

    // Populate services dropdown
    selectedCategory.services.forEach(service => {
        let option = document.createElement("option");
        option.textContent = service.name;
        option.value = service.name;
        servicesDropdown.appendChild(option);
    });

    // Auto-select the first service
    servicesDropdown.selectedIndex = 0;
    updateServiceDetails();
}

// Function to update UI based on selected service
function updateServiceDetails() {
    let selectedCategory = categories.find(cat => cat.name === categoryDropdown.value);
    let selectedService = selectedCategory.services.find(service => service.name === servicesDropdown.value);

    if (selectedService) {
        // Inject dynamic fields
        detailsContainer.innerHTML = `
            <label>${selectedCategory.name.includes("MTN") || selectedCategory.name.includes("Telecel") || selectedCategory.name.includes("AirtelTigo") ? "Phone Number" : "Link"}</label>
            <input type="text" id="link" placeholder="${selectedCategory.linkPlaceholder}">

            <label>Quantity</label>
            ${selectedCategory.name.includes("MTN") || selectedCategory.name.includes("Telecel") || selectedCategory.name.includes("AirtelTigo") ? `
            <input type="text" id="quantity" value="${selectedService.quantity}" disabled>
            ` : `
            <input type="number" id="quantity" min="${selectedService.minQuantity}" max="${selectedService.maxQuantity}" placeholder="Min: ${selectedService.minQuantity} - Max: ${selectedService.maxQuantity}" data-price="${selectedService.pricePer1000}">
            `}

            <label>Average Time</label>
            <input type="text" id="averageTime" value="${selectedService.averageTime}" disabled>

            <label>Charge</label>
            <input type="text" id="charge" value="GHC ${selectedCategory.name.includes("MTN") || selectedCategory.name.includes("Telecel") || selectedCategory.name.includes("AirtelTigo") ? selectedService.price : "0"}" disabled>
        `;

        placeOrderButton.style.display = "block"; // Show Order Button

        // Attach event listener to quantity input if editable
        if (!selectedCategory.name.includes("MTN") && !selectedCategory.name.includes("Telecel") && !selectedCategory.name.includes("AirtelTigo")) {
            document.getElementById("quantity").addEventListener("input", updateCharge);
        }
    }
}

// New charge calculation logic
function updateCharge() {
    let quantityInput = document.getElementById("quantity");
    let chargeInput = document.getElementById("charge");

    let quantity = parseInt(quantityInput.value) || 0;
    let pricePer1000 = parseFloat(quantityInput.dataset.price) || 0;

    if (quantity >= parseInt(quantityInput.min) && quantity <= parseInt(quantityInput.max)) {
        let totalPrice = (quantity / 1000) * pricePer1000;
        chargeInput.value = `GHC ${totalPrice.toFixed(2)}`;
    } else {
        chargeInput.value = "GHC 0";
    }
}

// Listen for category and service selection changes
categoryDropdown.addEventListener("change", updateCategoryDetails);
servicesDropdown.addEventListener("change", updateServiceDetails);

// Load first category and service by default
updateCategoryDetails();

    // Event Delegation for FAQ Toggle
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("faq")) {
            event.target.classList.toggle("active");
            console.log("FAQ Clicked:", event.target);
        }
    });
});

/* Testimonial */
function initTestimonialSlider() {
    document.addEventListener("DOMContentLoaded", function () {
        const testimonials = document.querySelectorAll(".testimonial");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        if (!testimonials.length || !prevBtn || !nextBtn) {
            console.warn("Success Stories elements not found.");
            return;
        }

        let currentIndex = 0;
        let interval;

        function updateTestimonials(index) {
            testimonials.forEach((item, i) => {
                item.classList.remove("active");
                if (i === index) {
                    item.classList.add("active");
                }
            });
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonials(currentIndex);
        }

        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonials(currentIndex);
        }

        function startAutoSlide() {
            interval = setInterval(nextTestimonial, 4000);
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        prevBtn.addEventListener("click", () => {
            prevTestimonial();
            stopAutoSlide();
            startAutoSlide();
        });

        nextBtn.addEventListener("click", () => {
            nextTestimonial();
            stopAutoSlide();
            startAutoSlide();
        });

        updateTestimonials(currentIndex);
        startAutoSlide();
    });
}

// Get references to the pop-up elements
const emailPopup = document.getElementById("emailPopup");
const placeOrderButton = document.getElementById("placeOrder");
const proceedButton = document.getElementById("proceedButton");
const cancelLink = document.getElementById("cancelLink");

// Order Detail Fields in the Pop-up
const popupService = document.getElementById("popupService");
const popupCategory = document.getElementById("popupCategory");
const popupQuantity = document.getElementById("popupQuantity");
const popupCharge = document.getElementById("popupCharge");

// Form Fields in the Main Content
const serviceDropdown = document.getElementById("services");
const categoryDropdown = document.getElementById("category");
const quantityInput = document.getElementById("quantity");
const chargeInput = document.getElementById("charge");

// Payment Fields
const paymentMethod = document.getElementById("paymentMethod");
const paymentDetails = document.getElementById("paymentDetails");

// Place Order Button Click
document.addEventListener("DOMContentLoaded", function () {
    const placeOrderButton = document.getElementById("placeOrder");
    const emailPopup = document.getElementById("emailPopup");
    const cancelLink = document.getElementById("cancelLink");

    placeOrderButton.addEventListener("click", function () {
        // Fetching values from the main form
        let category = document.getElementById("category").value;
        let service = document.getElementById("services").value;
        let link = document.getElementById("link").value;
        let quantity = document.getElementById("quantity").value;
        let charge = document.getElementById("charge").value;

        console.log("Quantity:", quantity, "Charge:", charge); // Debugging

        // Validate that fields are not empty before opening the pop-up
        if (!category || !service || !quantity || !charge) {
            alert("Please complete all fields before proceeding.");
            return;
        }

        // Fill the pop-up fields with selected values
        document.getElementById("popupCategory").value = category;
        document.getElementById("popupService").value = service;
        document.getElementById("popupLink").value = link;
        document.getElementById("popupQuantity").value = quantity;
        document.getElementById("popupCharge").value = charge;

        // Show the pop-up
        emailPopup.style.display = "flex";
    });

    // Close pop-up when cancel is clicked
    cancelLink.addEventListener("click", function (e) {
        e.preventDefault();
        emailPopup.style.display = "none";
    });

    // Update Pop-up Quantity and Charge in Real-Time
    document.getElementById("quantity").addEventListener("input", function () {
        document.getElementById("popupQuantity").value = this.value;
    });

    document.getElementById("charge").addEventListener("input", function () {
        document.getElementById("popupCharge").value = this.value;
    });
});

// Update Payment Details Based on Selection
paymentMethod.addEventListener("change", function () {
    switch (paymentMethod.value) {
        case "momo":
            paymentDetails.value = "Mobile Money: 024XXXXXXX";
            break;
        case "bank":
            paymentDetails.value = "Bank Transfer: XYZ Bank, Acc No: 1234567890";
            break;
        case "crypto":
            paymentDetails.value = "Crypto Wallet: 0xABCDEF123456789";
            break;
        default:
            paymentDetails.value = "";
    }
});

// Proceed to Checkout
document.addEventListener("DOMContentLoaded", function () {
    const proceedButton = document.getElementById("proceedButton");
    const notificationPopup = document.getElementById("notificationPopup");
    const closePopupButton = document.getElementById("closePopupp");
    const closeBtnn = document.querySelector(".close-btnn");

    proceedButton.addEventListener("click", function () {
        let userName = document.getElementById("fullName").value;
        let userEmail = document.getElementById("userEmail").value;
        let service = document.getElementById("popupService").value;
        let category = document.getElementById("popupCategory").value;
        let link = document.getElementById("popupLink").value;
        let quantity = document.getElementById("popupQuantity").value;
        let charge = document.getElementById("popupCharge").value;
        let paymentMethod = document.getElementById("paymentMethod").value;
        let proofOfPayment = document.getElementById("proofOfPayment").files[0];

        if (!userName || !userEmail || !service || !category || !quantity || !charge || !paymentMethod || !proofOfPayment) {
            alert("Please fill in all required fields and upload a payment proof.");
            return;
        }

        let formData = new FormData();
        formData.append("userName", userName);
        formData.append("userEmail", userEmail);
        formData.append("service", service);
        formData.append("category", category);
        formData.append("link", link);
        formData.append("quantity", quantity);
        formData.append("charge", charge);
        formData.append("paymentMethod", paymentMethod);
        formData.append("proofOfPayment", proofOfPayment); // Attach the image

        fetch("/api/sendEmail", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                // **Show the notification pop-up only after success**
                notificationPopup.style.display = "flex";
                
                // **Close the order pop-up after submission**
                document.getElementById("emailPopup").style.display = "none";
            } else {
                alert("Failed to send order details.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong!");
        });
    });

    // Close the notification pop-up when the "Close" button is clicked
    closePopupButton.addEventListener("click", function () {
        notificationPopup.style.display = "none";
    });

    // Close the notification pop-up when the close (X) button is clicked
    closeBtnn.addEventListener("click", function () {
        notificationPopup.style.display = "none";
    });

    // Close the notification pop-up if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (event.target === notificationPopup) {
            notificationPopup.style.display = "none";
        }
    });
});

/* Stats */
document.addEventListener("DOMContentLoaded", function () {
    const stats = {
        accountsBoosted: 25986,
        happyClients: 24564,
        reviews: 20758,
        countriesServed: 195, // Fixed, doesn't change daily
    };

    function updateStats() {
        // Retrieve stored values or use defaults
        let lastUpdate = localStorage.getItem("lastUpdate");
        let today = new Date().toDateString();

        // If stats were already updated today, load them
        if (lastUpdate === today) {
            stats.accountsBoosted = parseInt(localStorage.getItem("accountsBoosted")) || stats.accountsBoosted;
            stats.happyClients = parseInt(localStorage.getItem("happyClients")) || stats.happyClients;
            stats.reviews = parseInt(localStorage.getItem("reviews")) || stats.reviews;
        } else {
            // Increase numbers randomly (1 to 10)
            stats.accountsBoosted += Math.floor(Math.random() * 10) + 1;
            stats.happyClients += Math.floor(Math.random() * 10) + 1;
            stats.reviews += Math.floor(Math.random() * 10) + 1;

            // Save new stats and date in localStorage
            localStorage.setItem("accountsBoosted", stats.accountsBoosted);
            localStorage.setItem("happyClients", stats.happyClients);
            localStorage.setItem("reviews", stats.reviews);
            localStorage.setItem("lastUpdate", today);
        }

        // Update stats in HTML
        document.getElementById("accountsBoosted").textContent = stats.accountsBoosted;
        document.getElementById("happyClients").textContent = stats.happyClients;
        document.getElementById("reviews").textContent = stats.reviews;
        document.getElementById("countriesServed").textContent = stats.countriesServed; // Remains the same
    }

    // Call function to update stats on page load
    updateStats();
});

document.addEventListener("DOMContentLoaded", function () {
    const openCloseStatus = document.getElementById("open-close-status");

    function updateBusinessHours() {
        const openingHour = 7;  // 7:00 AM
        const closingHour = 21; // 9:00 PM

        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentSecond = now.getSeconds();

        if (currentHour >= openingHour && currentHour < closingHour) {
            openCloseStatus.textContent = `Open Now - ${currentHour}:${currentMinute}:${currentSecond}`;
            openCloseStatus.classList.add("open");
            openCloseStatus.classList.remove("closed");
        } else {
            openCloseStatus.textContent = `Will Open at 7AM - ${currentHour}:${currentMinute}:${currentSecond}`;
            openCloseStatus.classList.add("closed");
            openCloseStatus.classList.remove("open");
        }
    }

    // Update every second (real-time update)
    updateBusinessHours(); // Run immediately on page load
    setInterval(updateBusinessHours, 1000); // Update every second
});

initTestimonialSlider();