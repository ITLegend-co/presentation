/*
  HOD IT UPDATE PRESENTATION
  Reporting window: 10 September 2026 - 30 September 2026
  HOD meeting: 1 October 2026, 10:00 AM

  Main file for future updates.
*/

const deckData = {
  title: "IT Update & Progress",
  subtitle: "IT support, infrastructure, systems, subscriptions, security, and project updates since the previous HOD meeting.",
  preparedBy: "Prepared by: IT Department",
  reportDate: "HOD Meeting: 1 October 2026 · 10:00 AM",
  company: "Mountain Torq Sdn. Bhd.",
  slides: [
    {
      type: "hero",
      label: "Cover",
      title: "IT Update & Progress",
      eyebrow: "Head of Department Update",
      subtitle: "Reporting period: 10–30 September 2026. Key changes, completed work, current risks, and actions requiring follow-up before the next HOD review.",
      chips: ["Support", "Infrastructure", "Systems", "Security", "Management Update"]
    },
    {
      type: "summary",
      hidden: false,
      label: "Overview",
      title: "Executive Overview",
      subtitle: "Main IT changes since the previous HOD update on 9 September 2026.",
      stats: [
        { value: "5", label: "Completed / Resolved", tone: "success" },
        { value: "6", label: "Active Follow-Ups", tone: "warning" },
        { value: "3", label: "Systems Under Review", tone: "purple" },
        { value: "1", label: "Project On Hold", tone: "neutral" },
        { value: "1", label: "Renewal Due Soon", tone: "info" }
      ],
      highlights: [
        "ABSS Premier Connect was upgraded from version 2.2.1 to 2.3.1, and Accounts confirmed normal use with no missing data or errors.",
        "Karen’s computer and Pody’s laptop issues are resolved after the RAM and SSD maintenance actions.",
        "KP U Mobile is now being used as the primary connection, with Unifi as backup, and remains stable under monitoring until 7 November 2026.",
        "Spam email volume has increased for several users and continues to be followed up with IPServerOne.",
        "Preventive maintenance planning has expanded to cover KK Office, KP Office and Pendant Hut.",
        "New internal system requests will now require a proper scope of work and Management review before development begins."
      ]
    },
    {
      type: "cards",
      label: "Completed",
      title: "Completed / Resolved Since Last HOD",
      subtitle: "Items closed or operationally resolved during the reporting period.",
      cards: [
        {
          title: "ABSS Premier Connect Upgrade",
          status: "Completed",
          tone: "success",
          details: [
            "Accounts requested an upgrade from version 2.2.1 to version 2.3.1.",
            "Data files and templates were backed up before the upgrade and the existing data was converted to the new version.",
            "Accounts confirmed there are no missing data or errors during normal use."
          ]
        },
        {
          title: "Karen’s Computer Performance",
          status: "Completed",
          tone: "success",
          details: [
            "The additional RAM installation has stabilized the computer and no further hanging issue has been reported.",
            "The additional RAM will remain permanently installed.",
            "A replacement RAM unit will be considered later as backup stock when pricing becomes more favourable."
          ]
        },
        {
          title: "Pody’s Laptop SSD Issue",
          status: "Completed",
          tone: "success",
          details: [
            "The SSD contacts were cleaned and the SSD was reseated.",
            "The laptop is now functioning normally with no recurrence during monitoring."
          ]
        },
        {
          title: "Printer Toner Replenishment",
          status: "Completed",
          tone: "success",
          details: [
            "Ros approved the toner purchase.",
            "Current inventory now has 3 black toner units and 2 units for each colour.",
            "IT will continue recording consumption so Purchasing can replenish stock and future requests can be evaluated using actual usage."
          ]
        },
        {
          title: "Alarm System Subscription",
          status: "Renewed",
          tone: "success",
          details: [
            "The Alarm System subscription has been renewed.",
            "The updated renewal information will remain recorded in the subscription register."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Support & Security",
      title: "Support, Email & Security Follow-Up",
      subtitle: "Current support matters that still require monitoring or follow-up.",
      cards: [
        {
          title: "Madam I-Gek Email Issue",
          status: "Resolved for Now / Monitoring",
          tone: "warning",
          details: [
            "Email sending and receiving became intermittent on the laptop while other devices continued receiving mail.",
            "IPServerOne assisted with mail-server and Outlook configuration troubleshooting.",
            "The email worked again after the computer was restarted; IT will follow up with mail support if the issue returns."
          ]
        },
        {
          title: "Increase in Spam Emails",
          status: "In Progress",
          tone: "warning",
          details: [
            "Spam email reports were received from Mr. Wilfred, Ros and the Accounts team.",
            "The volume reported by Mr. Wilfred has increased significantly and is difficult to manage manually.",
            "IT will continue following up with IPServerOne and reinforce staff awareness on suspicious email handling."
          ]
        },
        {
          title: "Trend Micro / Antivirus",
          status: "Monitoring",
          tone: "info",
          details: [
            "No major security warning has been reported by Trend Micro.",
            "Antivirus protection on checked computers is functioning normally.",
            "Continue weekly monitoring and scheduled security checks."
          ]
        },
        {
          title: "Outlook Assigned Display Name",
          status: "New Maintenance Check",
          tone: "info",
          details: [
            "Ros requested IT to verify Outlook sender/display names during maintenance or account configuration.",
            "Some recipients may otherwise see an account address such as PH1 instead of the intended staff display name such as MT Pody.",
            "This check will be added to the IT maintenance checklist."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Connectivity",
      title: "KP & PH Connectivity Update",
      subtitle: "Remote-access findings, internet priority changes, and backup planning.",
      cards: [
        {
          title: "KP CrossChex / Anviz Remote Access",
          status: "Configuration Updated / Monitoring",
          tone: "info",
          details: [
            "Local attendance access was working, but remote CrossChex / Anviz access failed.",
            "Physical troubleshooting at KP found that the Unifi PPPoE credentials had changed during the previous outage.",
            "New credentials were obtained and the network configuration was updated.",
            "Remote CCTV and attendance access will continue to be verified."
          ]
        },
        {
          title: "KP Internet Priority",
          status: "Stable / Monitoring",
          tone: "success",
          details: [
            "During the Anviz investigation, internet priority was changed from Unifi primary / U Mobile backup to U Mobile primary / Unifi backup.",
            "KP has not reported a major U Mobile outage after the change.",
            "Continue the existing U Mobile monitoring period until 7 November 2026."
          ]
        },
        {
          title: "Pendant Hut Backup Internet",
          status: "Planning",
          tone: "warning",
          details: [
            "Internet issues at PH affected customers’ ability to make QR / online payments.",
            "The proposed backup is to reuse the TP-Link AC750 router from IT storage with a prepaid mobile-data connection.",
            "Maxis / Hotlink is being considered because of reported stronger coverage at PH.",
            "The backup is intended only for transaction/payment use when Starlink or customer mobile data is unavailable."
          ]
        },
        {
          title: "PH CCTV Installation",
          status: "KIV / On Hold",
          tone: "neutral",
          details: [
            "There is no change to the project status.",
            "Installation remains on hold due to Management concern about creating additional holes at Pendant Hut.",
            "No installation work will proceed without further instruction."
          ]
        }
      ]
    },
    {
      type: "timeline",
      label: "Maintenance",
      title: "Preventive Maintenance & Warranty Plan",
      subtitle: "Planned maintenance coverage across KK Office, KP Office and Pendant Hut.",
      items: [
        {
          title: "KP Office",
          tag: "Planning",
          details: "Planned checks include 1 laptop and 4 PCs, 8 UPS units, printers, router firmware/internet stability, DVR recording/playback, and alarm-system trigger testing."
        },
        {
          title: "Pendant Hut",
          tag: "Planning",
          details: "Planned checks include 1 laptop, 4 company smartphones, 4 tablets, Anviz sync/network connectivity, laser and label printers, and network-device firmware/cabling."
        },
        {
          title: "KK Office",
          tag: "Saturday Maintenance",
          details: "Preventive maintenance will be carried out on Saturdays to reduce disruption. Scope includes computers/laptops, displays, printers, cabling, Windows updates, batteries, DVR and alarm-system checks."
        },
        {
          title: "Warranty Management",
          tag: "Next Week Review",
          details: "IT will review inventory warranty records, identify equipment approaching expiry, and perform checks while the equipment remains under warranty where appropriate."
        }
      ]
    },
    {
      type: "timeline",
      label: "Systems",
      title: "Systems & Digitalisation Updates",
      subtitle: "Current evaluations, internal development and requirements gathering.",
      items: [
        {
          title: "Odoo Trial",
          tag: "In Progress",
          details: "The trial remains under review. Accounts, Technical and Operations will first compile internal feedback before meeting the Odoo agent. Initial feedback indicates that some functions may duplicate systems already in use."
        },
        {
          title: "Department System Requests",
          tag: "Requirements Gathering",
          details: "Accounts, Admin and Operations have requested new systems or improvements. Management instructed IT to obtain a proper scope of work, data requirements, workflow and reporting needs before development starts. Adly will join the Accounts meeting on 6 October 2026."
        },
        {
          title: "KCC Youth Assessment System",
          tag: "Operational / Management Review",
          details: "The internally developed assessment system was demonstrated, including student registration, QR/bib scanning, judging, coach evaluation, ranking and public results. Madam I-Gek requested access for review."
        },
        {
          title: "PMS Simplification / Future Development",
          tag: "Evaluation Only",
          details: "A simplified PMS replacement or improvement was discussed after the KCC system demonstration. No project was approved. The existing PMS and administrator functions will be reviewed before any development decision."
        }
      ]
    },
    {
      type: "cards",
      label: "M365 & Process",
      title: "Microsoft 365 & Internal Process Improvements",
      subtitle: "Management-directed changes to licences and operational workflow.",
      cards: [
        {
          title: "Microsoft 365 / OneDrive Consolidation",
          status: "New Action",
          tone: "purple",
          details: [
            "Madam I-Gek proposed consolidating the Microsoft 365 / OneDrive licences currently used by Madam I-Gek, Ros and Mr. Wilfred.",
            "The objective is to reduce three licences to one shared account for OneDrive / administrative use while retaining individual normal email addresses.",
            "Migration review will begin when Madam I-Gek is in KK next week."
          ]
        },
        {
          title: "Courier / Equipment Shipment SOP",
          status: "Process Review",
          tone: "warning",
          details: [
            "The current courier workflow requires repeated Management approvals between the requesting department, IT and Admin.",
            "IT proposed a clearer workflow similar to Purchasing so responsibilities are defined and duplicate approvals are removed.",
            "Admin will be asked to review the existing process while current shipment requests continue to be assisted."
          ]
        }
      ]
    },
    {
      type: "table",
      label: "Subscriptions & Stock",
      title: "Subscriptions & Consumables",
      subtitle: "Items that require near-term follow-up or continued stock control.",
      columns: ["Item", "Current Position", "Next Action"],
      rows: [
        ["Info-Tech", "Renewal due 16 October 2026. Renewal invoice has been requested.", "Follow up invoice and arrange approval before renewal date."],
        ["Alarm System", "Renewed.", "Keep next renewal date updated in the subscription register."],
        ["Printer Toner", "3 black units and 2 units for each colour are currently in inventory.", "Track consumption and replenish using recorded usage history."],
        ["Spare RAM", "Karen’s additional RAM remains installed permanently.", "Consider purchasing replacement backup RAM when pricing is more favourable."]
      ]
    },
    {
      type: "nextActions",
      label: "Management Attention",
      title: "Management Attention & Next Actions",
      subtitle: "Items to carry forward after the 1 October HOD meeting.",
      actions: [
        { title: "Follow up increased spam-email reports with IPServerOne and continue staff awareness", owner: "Eizzat / Adly", due: "Ongoing", status: "In Progress" },
        { title: "Review IT equipment warranties and check equipment approaching expiry", owner: "Eizzat / Adly", due: "Next week", status: "Pending" },
        { title: "Finalize preventive-maintenance schedule for KK, KP and PH", owner: "Eizzat", due: "To be confirmed", status: "Planning" },
        { title: "Finalize PH backup-internet proposal and required approval / arrangement", owner: "Eizzat", due: "Rough target: 21 October 2026", status: "Planning" },
        { title: "Continue U Mobile as KP priority connection and monitor stability", owner: "Adly", due: "7 November 2026", status: "Monitoring" },
        { title: "Compile Odoo feedback internally before engaging the agent", owner: "Adly / Users", due: "After trial review", status: "In Progress" },
        { title: "Attend Accounts meeting and obtain proper system requirements / scope", owner: "Adly", due: "6 October 2026", status: "Pending" },
        { title: "Review Microsoft 365 / OneDrive licence consolidation", owner: "Adly / Management", due: "Next week", status: "Pending" },
        { title: "Follow up Info-Tech renewal invoice", owner: "Adly", due: "Before 16 October 2026", status: "Pending" },
        { title: "Review courier / equipment-shipment SOP with Admin", owner: "Adly / Admin", due: "To be confirmed", status: "Process Review" },
        { title: "Provide Madam I-Gek access to review the KCC Assessment system", owner: "Adly", due: "Follow-up", status: "Pending" },
        { title: "Review existing PMS before deciding whether simplified development is needed", owner: "Adly / Madam I-Gek", due: "Next-week discussion", status: "Evaluation" }
      ]
    },
    {
      type: "closing",
      label: "Closing",
      title: "End of IT HOD Update",
      subtitle: "Reporting period: 10–30 September 2026.",
      notes: [
        "Completed items will remain under observation where necessary.",
        "Priority follow-ups are email security, preventive maintenance, KP connectivity monitoring, upcoming subscription renewal, and proper scoping of new system requests.",
        "Next update will reflect decisions and instructions from the 1 October 2026 HOD Meeting."
      ]
    }
  ]
};
