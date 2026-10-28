/*
  HOD IT UPDATE PRESENTATION
  Reporting window: 2 October 2026 - 28 October 2026
  HOD meeting: 29 October 2026, 10:00 AM
*/

const deckData = {
  title: "IT Update & Progress",
  subtitle: "IT support, infrastructure, systems, security, maintenance and upcoming implementation work.",
  preparedBy: "Prepared by: IT Department",
  reportDate: "HOD Meeting: 29 October 2026 · 10:00 AM",
  company: "Mountain Torq Sdn. Bhd.",
  slides: [
    {
      type: "hero",
      label: "Cover",
      title: "IT Update & Progress",
      eyebrow: "Head of Department Update",
      subtitle: "Reporting period: 2–28 October 2026. October results, active monitoring and November implementation priorities.",
      chips: ["Support", "Connectivity", "Systems", "Security", "Maintenance", "November Plan"]
    },
    {
      type: "summary",
      label: "Overview",
      title: "October IT Overview",
      subtitle: "The main changes since the 1 October 2026 HOD meeting.",
      stats: [
        { value: "2", label: "Sites PM 100% Complete", tone: "success" },
        { value: "60%", label: "KK PM Complete", tone: "warning" },
        { value: "1 vs 3", label: "U Mobile vs Unifi Outages", tone: "info" },
        { value: "3", label: "Major November Actions", tone: "purple" },
        { value: "0", label: "Major Trend Micro Alerts", tone: "success" }
      ],
      highlights: [
        "PH and KP preventive maintenance are fully completed; KK Office is 60% completed.",
        "PH backup internet has been installed and the PH team was briefed by Eizzat on when and how to use it.",
        "During the KP monitoring period, U Mobile had 1 reported signal-loss outage while Unifi had 3 reported outages.",
        "Spam email reports have reduced compared with last month and remain under monitoring.",
        "Info-Tech was successfully renewed; the next renewal date is 16 October 2027.",
        "The paid/full Odoo version will not proceed. The free version remains sufficient for the current internal reporting and payment-tracking requirement.",
        "Accounts System development is scheduled to begin on 11 November 2026.",
        "The company website is targeted for launch before 15 November 2026, with IT supporting domain implementation through IPServerOne."
      ]
    },
    {
      type: "cards",
      label: "Served",
      title: "Completed / Closed This Month",
      subtitle: "October items that are now completed, implemented or closed from further paid evaluation.",
      cards: [
        {
          title: "PH Backup Internet",
          status: "Completed",
          tone: "success",
          details: [
            "Backup internet has been installed at Pendant Hut.",
            "Eizzat briefed the PH team on when the backup connection should be used and how to activate it.",
            "The backup connection is now available for operational use when the main connection is unavailable."
          ]
        },
        {
          title: "IT Equipment Warranty Review",
          status: "Completed",
          tone: "success",
          details: [
            "All warranty records in the IT inventory were reviewed.",
            "No faulty IT assets were identified during the review.",
            "Warranty information will continue to be maintained as part of the IT inventory process."
          ]
        },
        {
          title: "Info-Tech Renewal",
          status: "Renewed",
          tone: "success",
          details: [
            "The Info-Tech subscription was successfully renewed.",
            "Next renewal date: 16 October 2027.",
            "No further renewal action is required at this stage."
          ]
        },
        {
          title: "Odoo Full-Version Evaluation",
          status: "Closed / No Paid Upgrade",
          tone: "success",
          details: [
            "The full version was tested and reviewed with Accounts.",
            "The POS requirement is adequately covered without proceeding to the paid full version.",
            "Inventory will be handled under the separate internal system project.",
            "Recommendation: continue using the free Odoo version for current internal reporting and customer-payment tracking."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Support & Security",
      title: "Support & Security Update",
      subtitle: "Current user-support and security matters that still require monitoring.",
      cards: [
        {
          title: "Spam Email / IPServerOne",
          status: "Monitoring / Improved",
          tone: "info",
          details: [
            "Spam email remains under monitoring.",
            "Based on staff feedback, the number of spam reports has reduced compared with last month.",
            "IT will continue monitoring and will follow up with IPServerOne again if the volume increases."
          ]
        },
        {
          title: "Trend Micro / Antivirus",
          status: "Normal / Monitoring",
          tone: "success",
          details: [
            "No major Trend Micro security alert has been detected since the previous HOD meeting.",
            "Endpoint protection remains active.",
            "Continue routine security monitoring and scheduled checks."
          ]
        },
        {
          title: "General IT Support",
          status: "Ongoing",
          tone: "info",
          details: [
            "Continue normal user support, device troubleshooting and IT assistance across KK, KP and PH.",
            "Recurring or business-impacting issues will continue to be escalated and reported separately."
          ]
        }
      ]
    },
    {
      type: "cards",
      label: "Connectivity",
      title: "Connectivity & Remote Access",
      subtitle: "Internet reliability, backup connectivity and current remote-access troubleshooting.",
      cards: [
        {
          title: "KP U Mobile vs Unifi Monitoring",
          status: "Monitoring Until 7 Nov",
          tone: "info",
          details: [
            "U Mobile remains the primary connection with Unifi as backup during the monitoring period.",
            "Since U Mobile installation, U Mobile has had 1 reported outage caused by signal loss.",
            "During the same period, Unifi has had 3 reported outages.",
            "Monitoring continues until 7 November 2026 before the final connectivity recommendation is made."
          ]
        },
        {
          title: "MT Office VPN",
          status: "Troubleshooting",
          tone: "warning",
          details: [
            "Local VPN connection is working.",
            "Office NAS access through the VPN is working.",
            "Split tunnelling is working.",
            "External VPN users still receive Windows Error 809.",
            "Current troubleshooting is focused on the IPsec NAT-T / UDP 4500 communication path through the GN630V and TL-ER6120."
          ]
        },
        {
          title: "KP CrossChex / Anviz Remote Access",
          status: "Operational / Monitoring",
          tone: "success",
          details: [
            "The network configuration was updated after the previous Unifi credential change.",
            "Continue verifying remote attendance and related access reliability during normal operations."
          ]
        },
        {
          title: "PH CCTV",
          status: "KIV",
          tone: "neutral",
          details: [
            "The project remains on hold pending further Management direction.",
            "No installation work will proceed until approval is given."
          ]
        }
      ]
    },
    {
      type: "timeline",
      label: "Maintenance",
      title: "Preventive Maintenance Progress",
      subtitle: "Actual October PM completion by site, plus remaining KK Office work.",
      items: [
        {
          title: "Pendant Hut",
          tag: "100% Completed",
          details: "All planned PH IT preventive-maintenance work has been completed."
        },
        {
          title: "Kinabalu Park",
          tag: "100% Completed",
          details: "All planned KP IT preventive-maintenance work has been completed."
        },
        {
          title: "KK Office",
          tag: "60% Completed",
          details: "Remaining work includes network equipment preventive maintenance, alarm-system checks and several computers in the KK Office."
        },
        {
          title: "Warranty Review",
          tag: "Completed",
          details: "All IT inventory warranty records were reviewed and no faulty assets were identified."
        }
      ]
    },
    {
      type: "timeline",
      label: "Systems",
      title: "IT Systems & Implementation",
      subtitle: "Internal systems currently being implemented, developed or prepared for November.",
      items: [
        {
          title: "KP Dispatcher PC / SmartPTT",
          tag: "November Rollout",
          details: "SOPs for PH Trainer, KP Dispatcher and KK Dispatcher/server station are completed. The briefing presentation has been drafted and the trainer SOP has been finalised. Next steps are KP PC installation, staff briefing, test run and daily SOP implementation in November. Dispatcher PC must be switched off after operational activity ends."
        },
        {
          title: "Accounts System",
          tag: "Starts 11 Nov",
          details: "The system workflow has already been discussed with Accounts. Development is scheduled to begin on 11 November 2026 following the agreed workflow."
        },
        {
          title: "Mountain Torq IT Helpdesk",
          tag: "Development / Testing",
          details: "Core ticketing functions, user roles, assignment/resolution workflow, attachments, notifications and reporting are in place. Current work focuses on ticket-submission reliability, permissions and desktop/mobile behaviour."
        },
        {
          title: "Odoo",
          tag: "Paid Upgrade Closed",
          details: "The paid full version will not proceed. Continue using the free version for the current internal reporting and customer-payment tracking requirement."
        }
      ]
    },
    {
      type: "cards",
      label: "Website Launch",
      title: "Company Website Launch",
      subtitle: "IT support required for the planned website go-live before 15 November 2026.",
      cards: [
        {
          title: "Launch Target",
          status: "Before 15 Nov",
          tone: "purple",
          details: [
            "The company website is expected to launch before 15 November 2026.",
            "IT will support the launch and domain implementation."
          ]
        },
        {
          title: "IPServerOne Coordination",
          status: "Upcoming",
          tone: "info",
          details: [
            "IT will contact IPServerOne to coordinate the domain implementation and required DNS/domain changes.",
            "The domain transition will be monitored after implementation."
          ]
        },
        {
          title: "Expected Downtime / Propagation",
          status: "2–48 Hours",
          tone: "warning",
          details: [
            "A service/domain transition window of approximately 2 to 48 hours is expected during launch.",
            "The longer window allows for domain/DNS propagation and transition effects."
          ]
        }
      ]
    },
    {
      type: "table",
      label: "Subscriptions",
      title: "IT Subscriptions & Monitoring",
      subtitle: "Current subscription and security items requiring ongoing tracking.",
      columns: ["Item", "Current Status", "Next Action"],
      rows: [
        ["Info-Tech", "Successfully renewed.", "Next renewal: 16 October 2027."],
        ["Trend Micro", "Active; no major alert since last HOD.", "Continue routine monitoring."],
        ["Alarm System", "Active / previously renewed.", "Continue tracking the next renewal date in the subscription register."]
      ]
    },
    {
      type: "nextActions",
      label: "Next Service",
      title: "Management Attention & November Actions",
      subtitle: "Priority IT work to carry forward after the 29 October HOD meeting.",
      actions: [
        { title: "Complete the remaining KK Office preventive maintenance: network, alarm and remaining computers", owner: "IT", due: "November 2026", status: "In Progress" },
        { title: "Complete KP U Mobile monitoring and prepare the final connectivity recommendation", owner: "Adly", due: "7 November 2026", status: "Monitoring" },
        { title: "Install, brief and test the KP Dispatcher PC / SmartPTT workflow", owner: "IT / Operations", due: "November 2026", status: "In Progress" },
        { title: "Begin Accounts System development based on the agreed workflow", owner: "Adly", due: "11 November 2026", status: "Scheduled" },
        { title: "Support company website launch and coordinate domain implementation with IPServerOne", owner: "Adly / IT", due: "Before 15 November 2026", status: "Scheduled" },
        { title: "Continue MT Office VPN diagnosis for the external Error 809 / UDP 4500 path", owner: "Adly", due: "Ongoing", status: "In Progress" },
        { title: "Continue IT Helpdesk development and reliability testing", owner: "Adly", due: "Ongoing", status: "In Progress" },
        { title: "Continue monitoring reduced spam email volume and Trend Micro security status", owner: "IT", due: "Ongoing", status: "Monitoring" }
      ]
    },
    {
      type: "closing",
      label: "Closing",
      title: "Kitchen Closed — IT Update Served",
      subtitle: "Reporting period: 2–28 October 2026.",
      notes: [
        "October focus: complete PM, improve connectivity reliability, close unnecessary paid software evaluation and prepare November system work.",
        "November priorities: KP Dispatcher rollout, Accounts System development, website launch, remaining KK PM and continued VPN troubleshooting.",
        "Next update will reflect the results of the 7 November KP connectivity review and November implementation work."
      ]
    }
  ]
};
