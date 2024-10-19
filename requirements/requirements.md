# Project overview

This project is a news page which displays news articles in a presentable format.

# Feature requirements

- render a news article in a presentable format.
- render news from APIs.
- the high level look and feel should be like this:
  - A header bar which just has the name of the site - News Page
  - A category bar which has the categories of the news articles below the header bar
  - A card layout of the news articles which has the title, date, category for top news articles in all categories
  - When you select a category, the news articles for that category should be rendered in the card layout
  - When you select a news article, the news article should be rendered in a presentable format
  - The news article should have a recommended news articles section which has the top news articles in the same category that is returned by the API

# Technical requirements

- use nextjs framework
- use js in nextjs app
- use tailwind css for styling
- use shadcn/ui for the UI components
- use next-seo for the SEO
- use next-sitemap for the sitemap

# Relevant docs

- The news articles should be rendered from an API.
- GET localhost:4178/api/v1/articles will return the top news articles in all categories. - The response for the api will be like this:
  ```json
  {
    "articles": [
      {
        "id": "27Z8EJIBzu81kySv6PBu",
        "title": "\"Cloud's Dark Side: 67% of Businesses Ditching Public Cloud for Hybrid Hosting\"",
        "sentiment": "Negative, complex, expensive, regret, cloud, hybrid, on-premise, colocation, infrastructure, security, compliance, frustration, headache, challenges, migration, downtime, underperformance, control, reliance, obstacles.",
        "isoDate": "2024-09-20T16:39:06.000Z",
        "category": "Business"
      },
      {
        "id": "xrYOEJIBzu81kySvJfBd",
        "title": "\"Amazon's AI Sidekick: Meet Amelia, Your Personal Business Coach\"",
        "sentiment": "Positive, innovative, AI, personalized, business, advice, growth, productivity, empowerment, streamlined",
        "isoDate": "2024-09-20T15:28:00.000Z",
        "category": "Business"
      },
      {
        "id": "0LYQEJIBzu81kySvovAO",
        "title": "\"Streaming Smackdown: Marvel, DC, and More Go Head-to-Head This Weekend\"",
        "sentiment": "Happy, Marvel, TV, Movies, Streaming, Superheroes, Comic Book, Entertainment, Netflix, Prime Video, Max, Disney Plus, HBO, Horror, True Crime, Drama, Family, Relationships, Father, Death, Bittersweet, Emotional, Rollercoaster, Prince Andrew, Newsnight, Interview, Journalism, Michael Sheen, Ruth Wilson, Prince, Andrew, Royal Family, Scandal, Netflix, Amazon Prime, Deals, Discounts, Subscription, Service, Streaming Platform, TV Shows, Movies, New Releases, Recommendations, Streaming Services",
        "isoDate": "2024-09-20T14:00:30.000Z",
        "category": "Entertainment"
      },
      {
        "id": "jbazD5IBzu81kySvjfB2",
        "title": "\"Paralyzed with Fear: 'Don't Move' Trailer Unleashes a Heart-Pounding Thriller on Netflix\"",
        "sentiment": "Positive, intense, thrilling, suspenseful, fearful, deadly, desperate, personal, propulsive, terrifying",
        "isoDate": "2024-09-20T13:21:04.000Z",
        "category": "Entertainment"
      },
      {
        "id": "2LZ8EJIBzu81kySvD_Bu",
        "title": "\"Quest 3S Price Leak Hints at $299 Launch\"",
        "sentiment": "Neutral, Hopeful, Affordable, VR, Meta, Quest, Leaked, Rumors, Exciting, Accessibility",
        "isoDate": "2024-09-20T17:27:35.000Z",
        "category": "Technology"
      },
      {
        "id": "07ZFEJIBzu81kySvFPB9",
        "title": "\"Sony's Slaying the Noise: New Pink Headphones and Earbuds Arrive\"",
        "sentiment": "Fun, playful, cute, pink, headphones, earbuds, colorful, Sony, wireless.",
        "isoDate": "2024-09-20T16:22:02.000Z",
        "category": "Technology"
      },
      {
        "id": "2rZ8EJIBzu81kySvsfAV",
        "title": "\"Size Matters: Why the Apple Watch Series 10 is the Ultimate Wearable\"",
        "sentiment": "Positive, Exciting, Big, Light, Comfortable, Beautiful, Innovative, Impressive, Satisfying, Pleasurable",
        "isoDate": "2024-09-20T17:18:10.000Z",
        "category": "Fashion"
      },
      {
        "id": "s7a6D5IBzu81kySv5vAH",
        "title": "**Introducing Kino: Revolutionizing Mobile Filmmaking**",
        "sentiment": "Here are 10 key words that represent the sentiment of the article in a comma-separated list:\n\nExcitement, Innovation, Film-making, Cinematic, Powerful, User-friendly, Customizable, Advanced, Professional, Accessible",
        "isoDate": "2024-05-29T16:13:44.000Z",
        "category": "Movies"
      }
    ],
    "currentPage": 1,
    "totalPages": 1,
    "totalArticles": 80
  }
  ```
- GET localhost:4178/api/v1/articles?category=[category] will return the top news articles in a specific category. - The response for the api will be like this:

  ```json
  {
    "articles": [
      {
        "id": "27Z8EJIBzu81kySv6PBu",
        "title": "\"Cloud's Dark Side: 67% of Businesses Ditching Public Cloud for Hybrid Hosting\"",
        "sentiment": "Negative, complex, expensive, regret, cloud, hybrid, on-premise, colocation, infrastructure, security, compliance, frustration, headache, challenges, migration, downtime, underperformance, control, reliance, obstacles.",
        "isoDate": "2024-09-20T16:39:06.000Z",
        "category": "Business"
      },
      {
        "id": "xrYOEJIBzu81kySvJfBd",
        "title": "\"Amazon's AI Sidekick: Meet Amelia, Your Personal Business Coach\"",
        "sentiment": "Positive, innovative, AI, personalized, business, advice, growth, productivity, empowerment, streamlined",
        "isoDate": "2024-09-20T15:28:00.000Z",
        "category": "Business"
      },
      {
        "id": "zrYPEJIBzu81kySvtPDV",
        "title": "\"Nimble Unleashes Email Sequence Automation: Revolutionizing CRM for Cross-Organizational Growth\"",
        "sentiment": "Positive, innovative, growth, automation, CRM, customer, journey, scalable, productivity, collaboration",
        "isoDate": "2024-09-20T14:13:41.000Z",
        "category": "Business"
      },
      {
        "id": "o7a2D5IBzu81kySvufCU",
        "title": "\"PS6 Price Tag to Break the $600 Barrier as Console Wars Heat Up\"",
        "sentiment": "Negative, Expensive, Pricey, Unaffordable, Controversial, Increasing, High, Disappointing, Unappealing, Unaffordable",
        "isoDate": "2024-09-20T11:22:40.000Z",
        "category": "Business"
      },
      {
        "id": "p7a3D5IBzu81kySvRfBy",
        "title": "\"CrowdStrike Outage Sparks Vendor Exodus: 1 in 10 Businesses Ditch Security Provider\"",
        "sentiment": "Negative, Disappointed, Frustrated, Inconvenient, Downtime, Revenue, Affected, Unreliable, Vulnerable, Resilience.",
        "isoDate": "2024-09-20T11:00:00.000Z",
        "category": "Business"
      },
      {
        "id": "qLa3D5IBzu81kySvTvC3",
        "title": "CrowdStrike Outage Leaves Businesses Shaken: 1 in 10 Switching Vendors Amidst Downtime and Disruption",
        "sentiment": "negative,outage,disruption,switch,security,vendor,incident,response,precaution,resilience",
        "isoDate": "2024-09-20T11:00:00.000Z",
        "category": "Business"
      }
    ],
    "currentPage": 1,
    "totalPages": 1,
    "totalArticles": 6
  }
  ```

- GET localhost:4178/api/v1/articles/[articleid] will return the news article with the given articleid along with the recommended articles.
  - The response for the api will be like this:
  ```json
  {
    "id": "27Z8EJIBzu81kySv6PBu",
    "title": "\"Cloud's Dark Side: 67% of Businesses Ditching Public Cloud for Hybrid Hosting\"",
    "path": "/Users/chethankumar/Documents/projects/news/news-engine/articles/business/1726853474390-_cloud_s_dark_side__67__of_businesses_ditching_public_cloud_for_hybrid_hosting_.json",
    "isoDate": "2024-09-20T16:39:06.000Z",
    "category": "Business",
    "originalLink": "https://www.techradar.com/pro/website-hosting/hybrid-hosting-is-the-new-perferrered-solution-for-it-leaders",
    "sentiment": "Negative, complex, expensive, regret, cloud, hybrid, on-premise, colocation, infrastructure, security, compliance, frustration, headache, challenges, migration, downtime, underperformance, control, reliance, obstacles.",
    "content": "Pro\n\nWebsite Hosting\n\nHybrid hosting is the new preferred solution for IT leaders\n\n67% of IT decision makers now favour a hybrid hosting infrastructure \n\nThe future is looking cloudy for cloud hosting providers, according to a new survey from colocation datacenter provider Asanti of 100 senior IT decision-makers in the UK. The report found that 67% of those surveyed are turning to a hybrid hosting model that includes both on-site resources and cloud services.\n\nA hybrid approach is a marked shift from the purely cloud-based strategy that has marked many business plans in recent years. Almost all of the decision-makers regret the exclusive use of public cloud services. Only 6% said they wouldn't change their cloud-first strategy were they able to go back in time. The other 94% cite aggravating obstacles during and after switching to the cloud that made it not worth the headache.\n\n\"With such a high percentage of organizations bringing applications back to on-premise or colocation datacenters, you have to wonder – what exactly were cloud providers promising when they sold these packages? It’s clear now that defaulting to a cloud-first strategy may not be the best approach,” Asanti CEO Stewart Laing explained. “We strongly encourage IT decision makers and business leaders to adopt a business-centric view, focusing on current and future needs to determine the most appropriate hosting model, rather than starting with a predefined solution and attempting to fit the business around it.”\n\nPrioritizing public cloud services for IT needs makes sense at first glance. Cloud computing offers amazing flexibility, and it can scale to match almost any business needs. But, organizing a business around the cloud-first model is a deceptively complex maneuver. Complexity often means an uptick in price, something no business wants to face. Nonetheless, unexpected costs plagued 77% of respondents to the survey.\n\nIT comes home\n\nIn fact, 63% claimed the move was even more expensive than their original IT systems and brought up awkward questions of whether the move was worthwhile at all. The IT leaders often had plenty of time to consider their regrets, too, as 98% of the businesses in the survey had issues migrating to the cloud, and 57% said it overran their schedule, another source of higher prices.\n\nCloud infrastructure is also complex enough to cause problems after the migration. The survey found that 44% of respondents had to upskill their staff to handle cloud environments, and 31% struggled with integrating their existing IT systems with the cloud.\n\nThat's before even considering issues like compliance and security after switching to the cloud. Hitting regulatory standards was challenging for 62% of those surveyed. Security concerns and needing to match or exceed legal standards has led many businesses to rethink the public cloud as a home for their operations.\n\nFacing these challenges, more than a few businesses are now moving their applications back from the public cloud to be on-site or at colocation data centers. Ninety-one percent of the surveyed organizations are moving some or all of their applications in that direction. Whether a company wants more control over infrastructure and performance, has faced too much downtime and underperformance, or just needs to reduce reliance on public cloud providers, the desire to migrate away from public cloud services is nearly universal.",
    "imagePrompt": "A group of 100 senior IT decision-makers in the UK sit at a conference table, surrounded by screens displaying data and diagrams of hybrid hosting models, with a large whiteboard in the background showing a graph illustrating the 67% of IT decision makers favoring a hybrid hosting infrastructure. In the foreground, a CEO stands at a podium, speaking to the group with a concerned expression on his face, while a few attendees take notes on their laptops or look on with thoughtful expressions. The room is filled with a sense of tension and uncertainty, reflecting the challenges and regrets of transitioning to cloud hosting services.",
    "recommendations": ["xrYOEJIBzu81kySvJfBd", "zrYPEJIBzu81kySvtPDV", "p7a3D5IBzu81kySvRfBy", "qLa3D5IBzu81kySvTvC3", "o7a3D5IBzu81kySvufCU"],
    "recommendedArticles": [
      {
        "id": "xrYOEJIBzu81kySvJfBd",
        "title": "\"Amazon's AI Sidekick: Meet Amelia, Your Personal Business Coach\"",
        "sentiment": "Positive, innovative, AI, personalized, business, advice, growth, productivity, empowerment, streamlined",
        "category": "Business",
        "isoDate": "2024-09-20T15:28:00.000Z"
      },
      {
        "id": "zrYPEJIBzu81kySvtPDV",
        "title": "\"Nimble Unleashes Email Sequence Automation: Revolutionizing CRM for Cross-Organizational Growth\"",
        "sentiment": "Positive, innovative, growth, automation, CRM, customer, journey, scalable, productivity, collaboration",
        "category": "Business",
        "isoDate": "2024-09-20T14:13:41.000Z"
      },
      {
        "id": "p7a3D5IBzu81kySvRfBy",
        "title": "\"CrowdStrike Outage Sparks Vendor Exodus: 1 in 10 Businesses Ditch Security Provider\"",
        "sentiment": "Negative, Disappointed, Frustrated, Inconvenient, Downtime, Revenue, Affected, Unreliable, Vulnerable, Resilience.",
        "category": "Business",
        "isoDate": "2024-09-20T11:00:00.000Z"
      },
      {
        "id": "qLa3D5IBzu81kySvTvC3",
        "title": "CrowdStrike Outage Leaves Businesses Shaken: 1 in 10 Switching Vendors Amidst Downtime and Disruption",
        "sentiment": "negative,outage,disruption,switch,security,vendor,incident,response,precaution,resilience",
        "category": "Business",
        "isoDate": "2024-09-20T11:00:00.000Z"
      }
    ]
  }
  ```

# Current file structure

NEWS-PAGE
└── app
├── fonts
├── favicon.ico
├── globals.css
├── layout.js
├── page.js
├── components
│ ├── other
│ └── ui (shadcn components)
├── hooks
│ └── use-toast.js
└── lib
└── utils.js
├── node_modules
├── requirements
│ └── requirements.md
├── .eslintrc.json
├── .gitignore
├── components.json
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
