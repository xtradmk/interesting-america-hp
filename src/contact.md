---
layout: layouts/base.njk
title: Contact
pageClasses: page--contact
modules:
  - type: hero
    pretitle: "Get in Touch"
    title: "Let's Talk About Your Event"
    description: "Ready to secure accommodation? Tell us what you need and we'll get back to you within 24 hours."

  - type: contact-form
    pretitle: "Send a Message"
    title: "Request a Quote"
    description: "Fill out the form below with your event details. The more information you provide, the faster we can respond."
    contact_info:
      - label: "Email"
        value: "america@interesting-sports.com"
        url: "mailto:america@interesting-sports.com"
      - label: "Phone"
        value: "+1 (Los Angeles)"
      - label: "Address"
        value: "Los Angeles, California"
      - label: "Availability"
        value: "Monday – Friday, 9:00 – 18:00 PT"
    fields:
      - name: "name"
        label: "Full Name"
        type: "text"
        placeholder: "Your name"
        required: true
      - name: "company"
        label: "Company / Organization"
        type: "text"
        placeholder: "Your organization"
        required: true
      - name: "email"
        label: "Email Address"
        type: "email"
        placeholder: "you@company.com"
        required: true
      - name: "phone"
        label: "Phone Number"
        type: "tel"
        placeholder: "+1 (555) 000-0000"
        required: false
      - name: "event"
        label: "Event"
        type: "text"
        placeholder: "e.g. FIFA World Cup 2026, Super Bowl LXI"
        required: true
      - name: "dates"
        label: "Event Dates"
        type: "text"
        placeholder: "e.g. June 15 - July 15, 2026"
        required: false
      - name: "guests"
        label: "Number of Guests / Rooms"
        type: "text"
        placeholder: "e.g. 50 guests, 25 rooms"
        required: false
      - name: "budget"
        label: "Budget Range (per room/night)"
        type: "text"
        placeholder: "e.g. $150-250"
        required: false
      - name: "message"
        label: "Additional Requirements"
        type: "textarea"
        placeholder: "Tell us about your specific needs: transfers, hospitality access, special requests..."
        required: false
    submit_text: "Send Request"
    form_action: "#"

  - type: text-block
    theme: alt
    pretitle: "What happens next?"
    title: "Our Process"
    content: |
      **1. Initial Contact** – You send us your requirements
      **2. Research** – We check availability and options in our network
      **3. Proposal** – You receive a detailed quote within 24-48 hours
      **4. Refinement** – We adjust based on your feedback
      **5. Confirmation** – Contract and deposit to secure the rooms
      **6. Execution** – We handle all logistics before and during the event

  - type: cta-banner
    theme: dark
    pretitle: "Prefer to call?"
    title: "Direct Contact"
    description: "For urgent requests or immediate assistance, reach out directly via email. We respond to all inquiries within one business day."
    cta:
      text: "Send Email"
      url: "mailto:america@interesting-sports.com"
      style: accent
---
