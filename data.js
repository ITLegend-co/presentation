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
  reportDate: "Report Date: 5 August 2026",
  company: "Mountain Torq Sdn. Bhd.",
  slides: [
    {
      type: "hero",
      label: "Cover",
      title: "IT Update & Progress",
      eyebrow: "Operations Support Report",
      subtitle: "A structured overview of pending support items, completed tasks, internet status, printer patrol, and active IT-side projects.",
      chips: ["Support", "Infrastructure", "Monitoring", "Progress Update"]
    },
    {
      type: "summary",
      hidden: true,
      label: "Overview",
      title: "Report Overview",
      subtitle: "Current IT support status based on the latest update.",
      stats: [
        { value: "1", label: "Pending Support Task", tone: "warning" },
        { value: "10", label: "Completed Support Tasks", tone: "success" },
        { value: "3", label: "Internet Updates", tone: "info" },
        { value: "8", label: "Printers Checked", tone: "neutral" },
        { value: "5", label: "Active IT Projects", tone: "purple" }
      ],
      highlights: [
        "The faulty CCTV behind Vince’s desk was replaced on 1 August 2026, and the flickering issue was resolved.",
        "The new email signature setup has been completed for all MT staff.",
        "The U Mobile SIM card and WiFi 6 modem were received and tested at KK; KP installation scheduling is still being finalised.",
        "KP Unifi service has been restored, while the new fibre cable installation and rebate follow-up remain in progress."
      ]
    },
    {
      type: "cards",
      label: "Pending",
      title: "Pending Support Tasks",
      subtitle: "Items that require follow-up action.",
      cards: [
        {
          title: "Monitor Request & Recommendation – Fae",
          status: "Price Checking In Progress",
          tone: "warning",
          details: [
            "Ros confirmed that Fae’s planned trip to KK has been cancelled.",
            "AirAsia permits two cabin-baggage pieces with a combined maximum weight of 7kg. The main cabin bag must not exceed 56cm × 36cm × 23cm, and the smaller personal item must not exceed 40cm × 30cm × 10cm. The packed monitor can only be carried in the cabin if it meets these limits.",
            "If the packed monitor does not meet AirAsia’s cabin limits, checked baggage must be purchased. The actual checked-baggage price depends on the route, travel date, booking stage, and availability, so the final price must be checked using the actual booking details.",
            "AirAsia’s domestic Travel Comfort protection covers loss or damage to checked baggage and personal effects up to RM1,000, subject to a maximum of RM200 per item.",
            "Malaysia Airlines permits one Economy Class cabin bag weighing up to 7kg. The packed monitor can only be carried in the cabin if it meets the airline’s size and safety requirements.",
            "For Malaysia Airlines domestic travel, excess baggage beyond the complimentary allowance is published at USD15 per kg. Purchasing extra baggage online through Manage My Booking or the call centre may receive a 20% discount when completed at least 24 hours before departure.",
            "MHinsure provides domestic luggage and personal-effects coverage of up to RM3,000. The final comparison still requires the departure city, destination, travel date, packed monitor dimensions, and the passenger’s existing baggage allowance."
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
          title: "CCTV at KK Office Showing Flickering Footage",
          status: "Task Completed / Billing Pending",
          tone: "success",
          details: [
            "On 1 August 2026, the technician found that the coaxial and power cables had been stretched, placing excessive strain on the connections. Over time, the cables gradually deteriorated and caused the CCTV footage to flicker.",
            "The technician re-stripped and reconnected the existing power and coaxial cables inside the conduit, but the footage continued to flicker.",
            "The faulty CCTV unit was replaced with a brand-new unit. The cables were extended and reconnected to prevent further strain and reduce the risk of damage.",
            "The CCTV angle was adjusted to match its previous position behind Vince’s desk.",
            "The new CCTV unit is functioning properly with no flickering footage. The technician advised that the bill will be issued next week."
          ]
        },
        {
          title: "New Signature for Every MT Staff",
          status: "Task Completed",
          tone: "success",
          details: [
            "The new email signature setup has been completed.",
            "All MT staff email signatures have now been updated."
          ]
        },
        {
          title: "Faulty UPS Replacement",
          status: "Task Completed",
          tone: "success",
          details: [
            "Theresia reported that her UPS was beeping continuously.",
            "Troubleshooting identified a faulty transformer inside the UPS.",
            "The original battery was installed in a spare UPS and tested successfully.",
            "The replacement UPS and reused battery were confirmed to be functioning normally."
          ]
        },
        {
          title: "Faulty UPS Battery at KP",
          status: "Resolved / Installed",
          tone: "success",
          details: [
            "The battery retained a 12V charge but could not be switched on normally.",
            "The push button was confirmed faulty, and bypass testing allowed the battery to turn on.",
            "A used light switch was installed as a replacement and the wiring was soldered securely.",
            "The unit was reassembled, tested, delivered to KP, and installed without further issues."
          ]
        },
        {
          title: "Formatting of Ros’s MYOB Computer",
          status: "Task Completed",
          tone: "success",
          details: [
            "The computer formatting process was completed successfully.",
            "Previous data was checked and confirmed to be removed from the computer.",
            "The computer was unplugged and stored in the Level 2 storeroom.",
            "Its accessories were stored in the IT cabinet."
          ]
        },
        {
          title: "Canon ImageCLASS MF3010 Printer Setup",
          status: "Task Completed",
          tone: "success",
          details: [
            "The Single USB2.0 Port MFP and Storage Server was set up for the printer.",
            "The required MFP and printer drivers were installed on Ros’s and Aron’s laptops.",
            "The printer connection was configured on both laptops.",
            "Printing was tested successfully from both laptops."
          ]
        },
        {
          title: "Computer Upgrade for Ferdinand",
          status: "Completed / Handed Over",
          tone: "success",
          details: [
            "The old Intel Pentium platform was replaced using available spare hardware: Intel Core i5-7400, H110M-D motherboard, 8GB DDR4 RAM, and a 600W power supply.",
            "The original SSD and HDD were reused after the required data transfer.",
            "Windows 10 Home and the necessary software were installed.",
            "A stress test was completed with a recorded peak temperature of 76°C and no premature shutdown. The computer was handed over to Ferdinand."
          ]
        },
        {
          title: "Fuji Xerox DocuCentre S2520 Servicing",
          status: "Completed / Monitoring",
          tone: "success",
          details: [
            "The printer displayed a drum end-of-life warning and produced lines or toner spots on printed pages.",
            "Capital’s technician cleaned the toner compartment and performed a test print.",
            "The drum cartridge was replaced after the marks remained visible.",
            "The lines and toner spots were significantly reduced. Several additional print cycles were advised for the remaining marks to clear."
          ]
        },
        {
          title: "Samsung SCX-4251F Printer Disposal",
          status: "Approved for Disposal",
          tone: "success",
          details: [
            "Approval was requested to dispose of the obsolete Samsung SCX-4251F printer.",
            "The original toner cartridge is no longer produced or officially supported.",
            "The printer had remained unused at the KK office for a long period.",
            "Mr. Wilfred approved the printer for disposal."
          ]
        },
        {
          title: "Laminator Machine Producing Smoke",
          status: "Completed / Monitor During Use",
          tone: "success",
          details: [
            "Further inspection found burned plastic residue on the heated rod.",
            "The residue was cleaned from the heated area.",
            "The laminator was tested for approximately three minutes without further smoke.",
            "The task was completed, with continued monitoring recommended during use."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Internet",
      title: "Internet Status Update",
      subtitle: "Current internet condition by location.",
      cards: [
        {
          title: "Unifi KK Office",
          status: "Stable",
          tone: "success",
          details: [
            "No major internet interference has been reported since the last HOD meeting."
          ]
        },
        {
          title: "Unifi KP Office",
          status: "Restored / Follow-Up In Progress",
          tone: "warning",
          details: [
            "The KP office confirmed on 27 July 2026 that the internet connection had been restored.",
            "The existing fibre cable from the distribution box was repaired and is currently in use.",
            "Installation of the new fibre cable from J Residence is still in progress.",
            "Occasional intermittent disruptions may still occur, and TM rebate follow-up remains outstanding."
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
        ["Ricoh Aficio MP3004", "Colour: 90% · Black: 80%", "-"],
        ["Fuji Xerox S2520", "No level indicator. Toner has not shown replacement warning.", "10 April 2026"],
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
        ["KP Office", "Canon MF643CDW", "Black: 30% · Colour: 0%. Colour will be replenished only when needed.", "24 May 2026"],
        ["KP Office", "Canon E470", "Black: Above 50% · Colour: 0%. Colour will be replenished only when needed.", "24 November 2025"],
        ["PH", "Canon MF4410", "No indicator. Toner has not shown replacement warning.", "21 June 2026"]
      ]
    },
    {
      type: "timeline",
      label: "Projects",
      title: "Active IT Projects & Progress",
      subtitle: "Ongoing projects and current status.",
      items: [
        {
          title: "KP Internet Solution",
          tag: "Testing Completed / Installation Pending",
          details: "The U Mobile SIM card and WiFi 6 modem arrived on 31 July 2026. At KK, the one-device average test recorded 26.16 Mbps download and 40.66 Mbps upload on 4G, and 291.33 Mbps download and 31.93 Mbps upload on 5G. A simulated KP environment using multiple devices on 4G recorded 12.58 Mbps download and 24.2 Mbps upload. Installation at KP was proposed for Friday, 7 August 2026, while Mdm I-Gek asked whether it could be carried out on Saturday. The final installation schedule is pending confirmation."
        },
        {
          title: "MOTOTRBO IT Side Update",
          tag: "Waiting for U Mobile Deployment",
          details: "The next MOTOTRBO network setup step will proceed after the U Mobile connection has been installed and fully tested at KP. The intended work includes dispatcher connectivity, port forwarding, network switching, and backup internet procedures."
        },
        {
          title: "Microsoft 365 / OneDrive Update",
          tag: "Monitoring",
          details: "Management access to staff OneDrive accounts has been enabled. No complaints have been received regarding access to the shared OneDrive links. The setup remains under monitoring."
        },
        {
          title: "Odoo Update",
          tag: "Trial Scheduled",
          details: "Accounts plans to begin testing the full Odoo trial on 1 September 2026 and use the one-month period to evaluate the system before the next discussion with the Odoo agent."
        },
        {
          title: "CCTV Installation for PH",
          tag: "Still In Progress",
          details: "The testing data from 2 to 16 July is being reviewed. Storage, recording, battery, solar-charging performance, recommended camera configuration, CCTV placement, and solar-panel placement must be finalised before the end of August."
        }
      ]
    },
    {
      type: "nextActions",
      label: "Next Actions",
      title: "Recommended Next Actions",
      subtitle: "Follow-up actions for items that are pending, under monitoring, or require decision-making.",
      actions: [
        { title: "Confirm the U Mobile installation date and proceed with KP network setup", owner: "Adly", due: "Before end of August", status: "Pending Confirmation" },
        { title: "Follow up and obtain the bill for the completed KK CCTV replacement", owner: "Eizzat", due: "Next week", status: "Pending Billing" },
        { title: "Follow up with TM on the new KP fibre cable and rebate", owner: "Eizzat", due: "Immediate", status: "In Progress" },
        { title: "Confirm Fae’s route, travel date, packed monitor dimensions, baggage allowance, and insurance option before obtaining final AirAsia and Malaysia Airlines quotations", owner: "Adly", due: "Before end of September", status: "Price Checking" },
        { title: "Finalise the CCTV and solar-panel recommendations for PH", owner: "Eizzat", due: "Before end of August", status: "In Progress" },
        { title: "Prepare the Odoo trial with the Accounts team", owner: "Accounts / IT", due: "1 September 2026", status: "Scheduled" },
        { title: "Dispose of the approved Samsung SCX-4251F and update the asset record", owner: "IT Support", due: "Next disposal arrangement", status: "Approved" }
      ]
    },
    {
      type: "closing",
      label: "Closing",
      title: "End of Report",
      subtitle: "Thank you.",
      notes: [
        "Pending items will continue to be followed up and updated in the next support progress report.",
        "Completed items will remain under observation where necessary."
      ]
    }
  ]
};
