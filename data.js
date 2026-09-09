/*
  HOW TO EDIT FUTURE REPORTS
  1. Change the title/date/preparedBy below.
  2. Update the slides array.
  3. Save the file and refresh index.html in your browser.

  Common slide types:
  - hero
  - summary
  - cards
  - table
  - timeline
  - nextActions
*/

const deckData = {
  title: "IT Update & Progress",
  subtitle: "Support update, completed tasks, internet status, printer patrol, and active IT projects.",
  preparedBy: "Prepared by: IT Department",
  reportDate: "Report Date: 9 September 2026",
  company: "Mountain Torq Sdn. Bhd.",
  slides: [
    {
      type: "hero",
      label: "Cover",
      title: "IT Update & Progress",
      eyebrow: "Head of Department Update",
      subtitle: "A concise overview of current IT support matters, completed work, internet status, printer patrol, and projects requiring monitoring or management attention.",
      chips: ["Support", "Infrastructure", "Monitoring", "Management Update"]
    },
    {
      type: "summary",
      hidden: false,
      label: "Overview",
      title: "Executive Overview",
      subtitle: "Current IT support and project status for the HOD Meeting, based on the 7 September 2026 IT Meeting.",
      stats: [
        { value: "14", label: "Total Items", tone: "info" },
        { value: "8", label: "Completed", tone: "success" },
        { value: "5", label: "In Progress / Monitoring", tone: "warning" },
        { value: "1", label: "On Hold", tone: "neutral" },
        { value: "4", label: "Project Updates", tone: "purple" }
      ],
      highlights: [
        "Eight support items were completed or resolved during the reporting period.",
        "KP’s U Mobile backup connection is stable and remains under monitoring until 7 November 2026 before the next connectivity decision.",
        "The PH CCTV installation project remains KIV / On Hold due to concerns about making another hole in the PH roof.",
        "The Odoo trial is in progress for the Accounts, Operation, and Technical teams, with follow-up planned for 5–9 October 2026."
      ]
    },
    {
      type: "cards",
      label: "Pending",
      title: "Pending / Monitoring Support Tasks",
      subtitle: "Support matters that still require monitoring or follow-up.",
      cards: [
        {
          title: "Karen’s Computer Hangs During Multitasking",
          status: "Monitoring",
          tone: "warning",
          details: [
            "A temporary additional 8GB DDR5 RAM was installed, increasing total memory to 16GB.",
            "The storage drives were checked and found healthy.",
            "Continue monitoring stability before recommending a permanent RAM purchase and final upgrade cost."
          ]
        },
        {
          title: "Pody’s Laptop Boots Directly into BIOS",
          status: "Still In Progress",
          tone: "warning",
          details: [
            "The standard warranty has expired, and the service centre requires a RM180 diagnostic fee before inspection.",
            "The paid inspection was not pursued at this stage.",
            "Further internal troubleshooting is continuing before any external repair recommendation is made."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Completed",
      title: "Completed Support Tasks",
      subtitle: "Key support matters completed or resolved during this reporting period.",
      cards: [
        {
          title: "Internet Connectivity Issue at KK Office",
          status: "Task Completed",
          tone: "success",
          details: [
            "An IP address conflict was identified as the cause of the Ethernet and Wi-Fi disruption.",
            "Network settings were corrected and the KK office connection was restored successfully."
          ]
        },
        {
          title: "Set Up OBS Studio for Screen Capturing",
          status: "Task Completed",
          tone: "success",
          details: [
            "OBS Studio was installed and configured for screen, system audio, and microphone recording.",
            "Recording was tested successfully and Sylvia was given a brief usage guide."
          ]
        },
        {
          title: "Door PIN and Wi-Fi Password Change",
          status: "Task Completed",
          tone: "success",
          details: [
            "The office door PIN and MT Wi-Fi password were changed to improve access control.",
            "Staff devices were reconnected and both door access and Wi-Fi were tested successfully."
          ]
        },
        {
          title: "Elen’s MacBook Return",
          status: "Task Completed",
          tone: "success",
          details: [
            "The returned MacBook was checked and related company account passwords were updated.",
            "The master file was updated and relevant staff were assisted with signing in again where required."
          ]
        },
        {
          title: "Phishing Email Alert",
          status: "Task Completed",
          tone: "success",
          details: [
            "Affected accounts were identified and recorded after the phishing awareness announcement.",
            "Staff were advised to delete the phishing email and coordination with IPServerOne continued."
          ]
        },
        {
          title: "KP Internet Access Issue",
          status: "Task Completed",
          tone: "success",
          details: [
            "The U Mobile backup connection was unstable while TM/Unifi was down.",
            "The modem was relocated near the window, improving signal strength and restoring a stable usable backup connection."
          ]
        },
        {
          title: "Dropbox Storage Issue — MT-KP-02",
          status: "Task Completed",
          tone: "success",
          details: [
            "Dropbox continued storing files locally despite the Online Only setting.",
            "The working method was changed to Dropbox Web, resolving the storage issue and allowing normal work to continue."
          ]
        },
        {
          title: "Sipa’s Laptop Printing Issue",
          status: "Task Completed",
          tone: "success",
          details: [
            "Incorrect printer configuration and outdated firmware were identified.",
            "The printer settings and firmware were corrected, and printing was restored successfully."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Internet",
      title: "Internet Status Update",
      subtitle: "Current network condition by operational location.",
      cards: [
        {
          title: "KK Office Internet",
          status: "Stable",
          tone: "success",
          details: [
            "The recent IP conflict has been resolved and the office connection is operating normally."
          ]
        },
        {
          title: "KP Internet — Unifi Primary / U Mobile Backup",
          status: "Stable / Monitoring",
          tone: "info",
          details: [
            "U Mobile is operating as the backup connection and became stable after the modem was relocated for stronger signal.",
            "Continue monitoring until 7 November 2026 before deciding whether U Mobile can replace Unifi."
          ]
        },
        {
          title: "Starlink PH",
          status: "Stable",
          tone: "success",
          details: [
            "No major internet disturbance has been reported since the last HOD meeting."
          ]
        }
      ]
    },
    {
      type: "table",
      label: "KK Printers",
      title: "Printer Patrol — KK Office",
      subtitle: "Toner and consumable status for KK Office printers.",
      columns: ["Printer", "Current Status", "Last Replaced / Replenished"],
      rows: [
        ["Ricoh Aficio MP3004", "Black >70% · C/Y/M >90% · No replenishment since last HOD meeting.", "No replenishment since last HOD meeting"],
        ["Fuji Xerox S2520", "No level indicator. Toner has not shown replacement warning.", "4 August 2026"],
        ["Canon MF232w", "No toner level indicator. Toner is still usable.", "25 November 2025"],
        ["Canon MF3010", "No level indicator. Toner has not shown replacement warning.", "15 August 2024"],
        ["Brother QL-570", "Sticker labels are still thick. No replenishment needed for now.", "24 November 2025"]
      ]
    },
    {
      type: "table",
      label: "KP / PH Printers",
      title: "Printer Patrol — KP Office & PH",
      subtitle: "Toner and consumable status for KP Office and PH printers.",
      columns: ["Location", "Printer", "Current Status", "Last Replaced / Replenished"],
      rows: [
        ["KP Office", "Canon MF643CDW", "B 30% · Y 40% · M 50% · C 50%", "Black: 25 Jul 2026 · C/Y/M: 28 Jul 2026"],
        ["KP Office", "Canon E470", "Black: Above 50% · Colour: 0%. Colour will be replenished only when needed.", "24 November 2025"],
        ["PH", "Canon MF4410", "No update since the last HOD meeting. Toner status remains unchanged.", "21 June 2026"]
      ]
    },
    {
      type: "timeline",
      label: "Projects",
      title: "Active IT Projects & Progress",
      subtitle: "Current project status and the next important milestone.",
      items: [
        {
          title: "CCTV Installation at PH",
          tag: "On Hold / KIV",
          details: "Mr. Wilfred advised placing the project under KIV due to concerns about making another hole in the PH roof. Await further instruction before proceeding."
        },
        {
          title: "KP Internet Solution",
          tag: "Monitoring",
          details: "U Mobile was installed on 7 August 2026 as KP’s backup internet connection. Remote CCTV and Anviz access were verified through both Unifi and U Mobile. Continue monitoring until 7 November 2026 before deciding whether U Mobile can replace Unifi."
        },
        {
          title: "Odoo Update",
          tag: "Still In Progress",
          details: "The Odoo trial started on 1 September 2026 for the Accounts, Operation, and Technical teams. Continue testing, compile questions and limitations, and arrange the follow-up with the Odoo agent during 5–9 October 2026 before deciding on the subscription option."
        },
        {
          title: "Inventory Updates",
          tag: "Still In Progress",
          details: "Continue updating the inventory and exclude disposed and missing items. Offer the barcode scanner internally first; if no buyer is found, list it on Carousell or Facebook Marketplace and prepare the details for Management’s decision."
        }
      ]
    },
    {
      type: "nextActions",
      label: "Management Attention",
      title: "Management Attention & Next Actions",
      subtitle: "Items requiring continued monitoring, follow-up, or a later management decision.",
      actions: [
        { title: "Monitor Karen’s computer and review whether a permanent RAM upgrade should be purchased", owner: "Eizzat", due: "To be confirmed", status: "Monitoring" },
        { title: "Continue internal troubleshooting of Pody’s laptop before proposing any paid external repair", owner: "Eizzat", due: "To be confirmed", status: "Pending" },
        { title: "Keep the PH CCTV installation on KIV until further direction is given", owner: "Eizzat", due: "To be confirmed", status: "Pending" },
        { title: "Continue KP U Mobile monitoring and review whether Unifi should be retained", owner: "Adly", due: "7 November 2026", status: "Monitoring" },
        { title: "Complete Odoo evaluation and prepare the subscription recommendation after the agent follow-up", owner: "Adly", due: "5–9 October 2026", status: "Pending" },
        { title: "Prepare the barcode scanner sale / disposal recommendation for Management", owner: "IT", due: "To be confirmed", status: "Pending" }
      ]
    },
    {
      type: "closing",
      label: "Closing",
      title: "End of Report",
      subtitle: "Thank you.",
      notes: [
        "Completed items will remain under observation where necessary.",
        "Pending, monitoring, and in-progress items will be followed up according to the assigned person in charge and target timeline."
      ]
    }
  ]
};
