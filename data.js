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
  preparedBy: "Prepared by: IT Legend",
  reportDate: "Report Date: 7 September 2026",
  company: "Mountain Torq Sdn. Bhd.",
  slides: [
    {
      type: "hero",
      label: "Cover",
      title: "IT Update & Progress",
      eyebrow: "Operations Support Report",
      subtitle: "A structured overview of current IT support matters, completed tasks, internet status, printer patrol, and active IT projects.",
      chips: ["Support", "Infrastructure", "Monitoring", "Progress Update"]
    },
    {
      type: "summary",
      hidden: true,
      label: "Overview",
      title: "Report Overview",
      subtitle: "Current IT support and project status based on the 7 September 2026 IT Meeting.",
      stats: [
        { value: "14", label: "Total Items", tone: "info" },
        { value: "8", label: "Completed", tone: "success" },
        { value: "5", label: "In Progress / Monitoring", tone: "warning" },
        { value: "1", label: "On Hold", tone: "neutral" },
        { value: "4", label: "Project Updates", tone: "purple" }
      ],
      highlights: [
        "The KK office internet connectivity issue was resolved after the IP conflict was addressed and network settings were corrected.",
        "The U Mobile backup connection at KP became stable and usable after the modem was relocated to improve signal strength.",
        "The CCTV installation project at PH has been placed on KIV / On Hold as advised by Mr. Wilfred.",
        "The Odoo trial started on 1 September 2026 for the Accounts, Operation, and Technical teams."
      ]
    },
    {
      type: "cards",
      label: "Pending",
      title: "Pending / Monitoring Support Tasks",
      subtitle: "Support items that still require monitoring or follow-up.",
      cards: [
        {
          title: "Karen’s Computer Hangs During Multitasking",
          status: "Monitoring",
          tone: "warning",
          details: [
            "The computer was suspected to be affected by insufficient RAM and OneDrive background syncing during multitasking.",
            "Both storage drives were checked and found healthy.",
            "An additional 8GB DDR5 RAM was temporarily installed, increasing total memory to 16GB.",
            "Continue monitoring system stability and review the cost of a permanent RAM upgrade."
          ]
        },
        {
          title: "Pody’s Laptop Boots Directly into BIOS",
          status: "Still In Progress",
          tone: "warning",
          details: [
            "The service centre confirmed that the standard warranty had expired.",
            "A RM180 diagnostic fee would be charged before inspection and repair quotation, so the service-centre inspection was not pursued.",
            "Proceed with further internal troubleshooting of the laptop."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Completed",
      title: "Completed Support Tasks",
      subtitle: "Support items completed or resolved during this reporting period.",
      cards: [
        {
          title: "Internet Connectivity Issue at KK Office",
          status: "Task Completed",
          tone: "success",
          details: [
            "An IP address conflict disrupted Ethernet and Wi-Fi access at the KK office.",
            "The router, switches, ports, and Ethernet cables were checked and no hardware fault was found.",
            "Static IP addresses were assigned to office computers, and the Deco Mesh was tested and reconnected to the TP-Link router.",
            "Network troubleshooting and configuration were completed successfully."
          ]
        },
        {
          title: "Set Up OBS Studio for Screen Capturing",
          status: "Task Completed",
          tone: "success",
          details: [
            "OBS Studio was installed and configured to record the screen, system audio, and microphone.",
            "Video and audio capture were tested successfully and the recording was verified using VLC Media Player.",
            "Sylvia was provided with a brief guide for recording meetings."
          ]
        },
        {
          title: "Door PIN and Wi-Fi Password Change",
          status: "Task Completed",
          tone: "success",
          details: [
            "The office door PIN and MT Wi-Fi password were changed to control access.",
            "KK staff were informed and assisted with reconnecting company devices.",
            "Door access and Wi-Fi connectivity were tested and confirmed to be working correctly."
          ]
        },
        {
          title: "Elen’s MacBook Return",
          status: "Task Completed",
          tone: "success",
          details: [
            "Elen’s MacBook was checked after her last working day on 14 August 2026.",
            "Related company account passwords were updated and the master file was updated.",
            "Relevant staff were informed and assisted with signing in again where required.",
            "The updated master file is to be emailed to Management for their records."
          ]
        },
        {
          title: "Phishing Email Alert",
          status: "Task Completed",
          tone: "success",
          details: [
            "Affected accounts were identified and recorded following the phishing awareness announcement.",
            "Coordination with IPServerOne continued, and staff were advised to ignore and delete the phishing email immediately.",
            "The awareness announcement and account review were completed."
          ]
        },
        {
          title: "KP Internet Access Issue",
          status: "Task Completed",
          tone: "success",
          details: [
            "TM/Unifi was down and the U Mobile backup connection was unstable.",
            "The U Mobile modem was moved from the router cabinet area to a location near the window behind Sipa’s area.",
            "Signal strength improved from approximately 1–3 bars to 3–4 bars.",
            "The U Mobile backup connection became stable and usable after relocation."
          ]
        },
        {
          title: "Dropbox Storage Issue — MT-KP-02",
          status: "Task Completed",
          tone: "success",
          details: [
            "Dropbox continued downloading files to the hard drive despite the Online Only setting.",
            "The working method was changed to Dropbox Web for online file access and uploads.",
            "Storage was checked and sufficient free space was confirmed.",
            "The issue was resolved and normal work could continue."
          ]
        },
        {
          title: "Sipa’s Laptop Printing Issue",
          status: "Task Completed",
          tone: "success",
          details: [
            "The printer IP address configured on Sipa’s laptop did not match the printer’s actual address, and the printer firmware also required an update.",
            "The printer driver IP setting was corrected and test printing was completed.",
            "The printer firmware was updated and printing was restored successfully."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Internet",
      title: "Internet Status Update",
      subtitle: "Current network condition based on the latest IT meeting updates.",
      cards: [
        {
          title: "KK Office Internet",
          status: "Resolved",
          tone: "success",
          details: [
            "The IP address conflict that disrupted Ethernet and Wi-Fi access was resolved.",
            "Network settings were corrected and the office connection was tested successfully."
          ]
        },
        {
          title: "KP Backup Internet — U Mobile",
          status: "Stable / Monitoring",
          tone: "info",
          details: [
            "The modem was relocated to improve signal strength after the backup connection became unstable.",
            "The U Mobile connection became stable and usable after relocation.",
            "Continue monitoring U Mobile for three months from 7 August 2026, with review due on 7 November 2026."
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
        ["Ricoh Aficio MP3004", "Black: Above 70% · Cyan: Above 90% · Yellow: Above 90% · Magenta: Above 90%. No replenishment since the last HOD meeting.", "No replenishment since last HOD meeting"],
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
        ["KP Office", "Canon MF643CDW", "Black: 30% · Yellow: 40% · Magenta: 50% · Cyan: 50%.", "Black: 25 July 2026 · Colour (C/Y/M): 28 July 2026"],
        ["KP Office", "Canon E470", "Black: Above 50% · Colour: 0%. Colour will be replenished only when needed.", "24 November 2025"],
        ["PH", "Canon MF4410", "No update since the last HOD meeting. Toner status remains unchanged.", "21 June 2026"]
      ]
    },
    {
      type: "timeline",
      label: "Projects",
      title: "Active IT Projects & Progress",
      subtitle: "Ongoing projects and current status from the 7 September 2026 IT Meeting.",
      items: [
        {
          title: "CCTV Installation at PH",
          tag: "On Hold / KIV",
          details: "During Mr. Wilfred’s recent visit to the KK office, he advised placing the project under KIV due to concerns about making another hole in the PH roof. The project remains on hold until further instruction."
        },
        {
          title: "KP Internet Solution",
          tag: "Monitoring",
          details: "U Mobile replaced Celcom as KP’s backup internet connection on 7 August 2026. The modem and required network access were configured, and remote CCTV and Anviz attendance access were verified through both Unifi and U Mobile. Average speeds recorded were Unifi: 4.91 Mbps download / 9.54 Mbps upload, and U Mobile: 5.01 Mbps download / 9.36 Mbps upload. Continue monitoring until 7 November 2026 before deciding whether U Mobile can replace Unifi."
        },
        {
          title: "Odoo Update",
          tag: "Still In Progress",
          details: "The Odoo trial started on 1 September 2026 for the Accounts, Operation, and Technical teams. Testing is ongoing to review features and identify concerns. Compile questions and limitations for the Odoo agent and arrange the expected follow-up meeting during 5–9 October 2026 before reviewing the subscription decision."
        },
        {
          title: "Inventory Updates",
          tag: "Still In Progress",
          details: "Continue updating the inventory at https://itlegend-co.github.io/. Exclude disposed and missing items. Offer the barcode scanner internally first; if no buyer is found, list it on Carousell or Facebook Marketplace. Adly will present the details to support Management’s decision."
        }
      ]
    },
    {
      type: "nextActions",
      label: "Next Actions",
      title: "Recommended Next Actions",
      subtitle: "Follow-up actions based on the latest IT meeting.",
      actions: [
        { title: "Continue monitoring Karen’s computer with the temporary 16GB RAM setup and review permanent upgrade pricing", owner: "Eizzat", due: "To be confirmed", status: "Monitoring" },
        { title: "Proceed with further internal troubleshooting of Pody’s laptop", owner: "Eizzat", due: "To be confirmed", status: "Still In Progress" },
        { title: "Keep the PH CCTV installation project on KIV until further instruction", owner: "Eizzat", due: "To be confirmed", status: "On Hold" },
        { title: "Continue monitoring KP U Mobile backup internet and evaluate whether it can replace Unifi", owner: "Adly", due: "7 November 2026", status: "Monitoring" },
        { title: "Compile Odoo questions and limitations and arrange the follow-up meeting with the Odoo agent", owner: "Adly", due: "5–9 October 2026", status: "Still In Progress" },
        { title: "Continue inventory updates and prepare the barcode scanner disposal / sale recommendation", owner: "IT", due: "To be confirmed", status: "Still In Progress" }
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
