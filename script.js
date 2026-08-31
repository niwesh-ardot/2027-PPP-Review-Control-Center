
const FALLBACK_DATA = {
  "sourceWorkbook": "PPP-2027-Review-Tracking(2).xlsx",
  "generatedFromWorkbookDate": "2026-08-31",
  "attentionThresholdDays": 7,
  "phases": [
    {
      "name": "1st Review",
      "stages": [
        "1st Review Sent to SB",
        "1st Review Returned from SB",
        "1st Review Sent to District",
        "1st Review Returned from District"
      ]
    },
    {
      "name": "2nd Review",
      "stages": [
        "2nd Review Sent to SB",
        "2nd Review Returned from SB",
        "2nd Review Sent to District",
        "2nd Review Returned from District"
      ]
    },
    {
      "name": "3rd Review",
      "stages": [
        "3rd Review Sent to SB",
        "3rd Review Returned from SB",
        "3rd Review Sent to District",
        "3rd Review Returned from District"
      ]
    },
    {
      "name": "4th Review",
      "stages": [
        "4th Review Sent to SB",
        "4th Review Returned from SB",
        "4th Review Sent to District",
        "4th Review Returned from District"
      ]
    },
    {
      "name": "Final Reviews",
      "stages": [
        "Submittal to SB for CCD",
        "Requested Title Sheet",
        "Received Signed Plans",
        "Sent to CCD",
        "CCD Corrections",
        "Returned to SB",
        "Returned to CCD",
        "Addendum 1 Sent to Dist",
        "Addendum 1 to SB",
        "Additional comments to District",
        "Sent to SB"
      ]
    }
  ],
  "projects": [
    {
      "sequence": 1,
      "jobNumber": "A10059",
      "description": "Hwy.49 - Hwy.44 (S)",
      "district": "1",
      "route": "85",
      "section": "1",
      "county": "Philips",
      "scope": "Level Up, Chip Seal & Fog Seal; 2' Shoulders",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "2nd Review Sent to District",
      "currentPhase": "2nd Review",
      "stageEnteredDate": "2026-08-28",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-17",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-18",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-18",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-28",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-28",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-28",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-28",
          "sequence": 7
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "4 milestones were recorded on 2026-08-28; the furthest workflow stage on that date is used as current.",
          "stages": [
            "1st Review Returned from District",
            "2nd Review Sent to SB",
            "2nd Review Returned from SB",
            "2nd Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 2,
      "jobNumber": "A20044",
      "description": "Hwy.165 - Hwy.152 (S)",
      "district": "2",
      "route": "130",
      "section": "6",
      "county": "Arkansas",
      "scope": "Level Up & 2\" Overlay",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "2nd Review Sent to District",
      "currentPhase": "2nd Review",
      "stageEnteredDate": "2026-08-31",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-25",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-27",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-27",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-28",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-28",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-29",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-31",
          "sequence": 7
        }
      ],
      "validation": []
    },
    {
      "sequence": 3,
      "jobNumber": "A30049",
      "description": "Hwy.355 - Hwy.278 (S)",
      "district": "3",
      "route": "73",
      "section": "0,1, & 2",
      "county": "Hempstead & Howard",
      "scope": "Level Up & 1.5\" Overlay (Secs. 0 & 1); 2\" Mill & 2\" Overlay (Sec. 2)",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "3rd Review Sent to District",
      "currentPhase": "3rd Review",
      "stageEnteredDate": "2026-08-27",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-11",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-12",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-12",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-18",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-18",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-20",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-20",
          "sequence": 7
        },
        {
          "stage": "2nd Review Returned from District",
          "date": "2026-08-25",
          "sequence": 8
        },
        {
          "stage": "3rd Review Sent to SB",
          "date": "2026-08-25",
          "sequence": 9
        },
        {
          "stage": "3rd Review Returned from SB",
          "date": "2026-08-27",
          "sequence": 10
        },
        {
          "stage": "3rd Review Sent to District",
          "date": "2026-08-27",
          "sequence": 11
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "2 milestones were recorded on 2026-08-27; the furthest workflow stage on that date is used as current.",
          "stages": [
            "3rd Review Returned from SB",
            "3rd Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 4,
      "jobNumber": "A40062",
      "description": "Hwy.8 - South (S)",
      "district": "4",
      "route": "375",
      "section": "1",
      "county": "Polk",
      "scope": "Level Up & 2\" Overlay; Spot Patching; 2' Shoulders",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "1st Review Sent to District",
      "currentPhase": "1st Review",
      "stageEnteredDate": "2026-08-24",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-21",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-24",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-24",
          "sequence": 3
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "2 milestones were recorded on 2026-08-24; the furthest workflow stage on that date is used as current.",
          "stages": [
            "1st Review Returned from SB",
            "1st Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 5,
      "jobNumber": "A50033",
      "description": "Hwy.67B - Hwy.13 (S)",
      "district": "5",
      "route": "367",
      "section": "15",
      "county": "White",
      "scope": "Mill & Overlay (LM 2.598-5.406); Level Up & UTBWC (LM 5.406-8.641)",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "2nd Review Sent to District",
      "currentPhase": "2nd Review",
      "stageEnteredDate": "2026-08-31",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-14",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-17",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-18",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-25",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-28",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-31",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-31",
          "sequence": 7
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "2 milestones were recorded on 2026-08-31; the furthest workflow stage on that date is used as current.",
          "stages": [
            "2nd Review Returned from SB",
            "2nd Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 6,
      "jobNumber": "A50052",
      "description": "Stone Co. Line - Hwy.25 (S)",
      "district": "5",
      "route": "14",
      "section": "8",
      "county": "Independence",
      "scope": "2\" Overlay; Spot Leveling",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "1st Review Sent to District",
      "currentPhase": "1st Review",
      "stageEnteredDate": "2026-08-28",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-26",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-27",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-28",
          "sequence": 3
        }
      ],
      "validation": []
    },
    {
      "sequence": 7,
      "jobNumber": "A60066",
      "description": "Hwy.367 - Hwy.365 (S)",
      "district": "6",
      "route": "338",
      "section": "2",
      "county": "Pulaski",
      "scope": "2\" Mill & 2\" Overlay (LM 0.00-2.60 & 3.1-5.078); 6\" Mill, 4\" HiMod & 2\" Surface (LM 2.60-3.1)",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "1st Review Sent to District",
      "currentPhase": "1st Review",
      "stageEnteredDate": "2026-08-20",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-17",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-19",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-20",
          "sequence": 3
        }
      ],
      "validation": []
    },
    {
      "sequence": 8,
      "jobNumber": "A70049",
      "description": "Ouachita River - North (S)",
      "district": "7",
      "route": "167",
      "section": "3",
      "county": "Calhoun",
      "scope": "2\" Mill & 2\" Overlay",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "1st Review Sent to SB",
      "currentPhase": "1st Review",
      "stageEnteredDate": "2026-08-31",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-31",
          "sequence": 1
        }
      ],
      "validation": []
    },
    {
      "sequence": 9,
      "jobNumber": "A70050",
      "description": "Hwy.67 - Hwy.51 (S)",
      "district": "7",
      "route": "182",
      "section": "0",
      "county": "Clark",
      "scope": "Leveling, Patching, 3\" Overlay; 2' Shoulders",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "2nd Review Sent to District",
      "currentPhase": "2nd Review",
      "stageEnteredDate": "2026-08-31",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-25",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-26",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-26",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-26",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-27",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-31",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-31",
          "sequence": 7
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "2 milestones were recorded on 2026-08-31; the furthest workflow stage on that date is used as current.",
          "stages": [
            "2nd Review Returned from SB",
            "2nd Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 10,
      "jobNumber": "A80050",
      "description": "Hwy.95 - Hwy.124 (S)",
      "district": "8",
      "route": "65",
      "section": "8",
      "county": "Van Buren",
      "scope": "UTBWC (LM 2.956-10.939); 2\" Mill & 2\" Overlay (LM 10.939-16.220)",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "2nd Review Sent to District",
      "currentPhase": "2nd Review",
      "stageEnteredDate": "2026-08-31",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-17",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-18",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-18",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-28",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-28",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-29",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-31",
          "sequence": 7
        }
      ],
      "validation": []
    },
    {
      "sequence": 11,
      "jobNumber": "A90050",
      "description": "Missouri State Line - Hwy.62 (S)",
      "district": "9",
      "route": "101",
      "section": "1",
      "county": "Baxter",
      "scope": "2\" Mill & 2\" Overlay",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "3rd Review Sent to District",
      "currentPhase": "3rd Review",
      "stageEnteredDate": "2026-08-14",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-07-30",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-03",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-04",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-05",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-05",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-07",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-10",
          "sequence": 7
        },
        {
          "stage": "2nd Review Returned from District",
          "date": "2026-08-13",
          "sequence": 8
        },
        {
          "stage": "3rd Review Sent to SB",
          "date": "2026-08-13",
          "sequence": 9
        },
        {
          "stage": "3rd Review Returned from SB",
          "date": "2026-08-14",
          "sequence": 10
        },
        {
          "stage": "3rd Review Sent to District",
          "date": "2026-08-14",
          "sequence": 11
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "2 milestones were recorded on 2026-08-14; the furthest workflow stage on that date is used as current.",
          "stages": [
            "3rd Review Returned from SB",
            "3rd Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 12,
      "jobNumber": "A90051",
      "description": "Hwy.412 Impvts. (Carroll & Madison COS.) (S)",
      "district": "9",
      "route": "412",
      "section": "3,4, & 5",
      "county": "Carroll & Madison",
      "scope": "Spot Patching, Spot Leveling & Thin Overlay (1\")",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "4th Review Sent to District",
      "currentPhase": "4th Review",
      "stageEnteredDate": "2026-08-31",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-07-30",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-05",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-05",
          "sequence": 3
        },
        {
          "stage": "1st Review Returned from District",
          "date": "2026-08-07",
          "sequence": 4
        },
        {
          "stage": "2nd Review Sent to SB",
          "date": "2026-08-07",
          "sequence": 5
        },
        {
          "stage": "2nd Review Returned from SB",
          "date": "2026-08-10",
          "sequence": 6
        },
        {
          "stage": "2nd Review Sent to District",
          "date": "2026-08-10",
          "sequence": 7
        },
        {
          "stage": "2nd Review Returned from District",
          "date": "2026-08-14",
          "sequence": 8
        },
        {
          "stage": "3rd Review Sent to SB",
          "date": "2026-08-14",
          "sequence": 9
        },
        {
          "stage": "3rd Review Returned from SB",
          "date": "2026-08-17",
          "sequence": 10
        },
        {
          "stage": "3rd Review Sent to District",
          "date": "2026-08-17",
          "sequence": 11
        },
        {
          "stage": "3rd Review Returned from District",
          "date": "2026-08-20",
          "sequence": 12
        },
        {
          "stage": "4th Review Sent to SB",
          "date": "2026-08-20",
          "sequence": 13
        },
        {
          "stage": "4th Review Returned from SB",
          "date": "2026-08-24",
          "sequence": 14
        },
        {
          "stage": "4th Review Sent to District",
          "date": "2026-08-31",
          "sequence": 15
        }
      ],
      "validation": []
    },
    {
      "sequence": 13,
      "jobNumber": "A00103",
      "description": "Monette - Mississippi",
      "district": "10",
      "route": "18",
      "section": "4",
      "county": "Craighead ",
      "scope": "UTBWC",
      "lettingDate": "2026-11-04",
      "dueToPm": "2026-08-17",
      "notes": "",
      "currentStage": "1st Review Sent to District",
      "currentPhase": "1st Review",
      "stageEnteredDate": "2026-08-14",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-14",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-14",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-14",
          "sequence": 3
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "3 milestones were recorded on 2026-08-14; the furthest workflow stage on that date is used as current.",
          "stages": [
            "1st Review Sent to SB",
            "1st Review Returned from SB",
            "1st Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 14,
      "jobNumber": "A10058",
      "description": "Monroe Co. Line - Co. RD. 625 (S)",
      "district": "1",
      "route": "49",
      "section": "10",
      "county": "Philips",
      "scope": "Level Up & Chip Seal, 2' Shoulders",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": "1st Review Sent to District",
      "currentPhase": "1st Review",
      "stageEnteredDate": "2026-08-25",
      "milestones": [
        {
          "stage": "1st Review Sent to SB",
          "date": "2026-08-21",
          "sequence": 1
        },
        {
          "stage": "1st Review Returned from SB",
          "date": "2026-08-25",
          "sequence": 2
        },
        {
          "stage": "1st Review Sent to District",
          "date": "2026-08-25",
          "sequence": 3
        }
      ],
      "validation": [
        {
          "type": "same-day-progression",
          "message": "2 milestones were recorded on 2026-08-25; the furthest workflow stage on that date is used as current.",
          "stages": [
            "1st Review Returned from SB",
            "1st Review Sent to District"
          ]
        }
      ]
    },
    {
      "sequence": 15,
      "jobNumber": "A10060",
      "description": "Monroe Co. Line \u2013 Co. Rd. 625 (S)",
      "district": "1",
      "route": "218",
      "section": "1",
      "county": "Crittenden ",
      "scope": "Mill & Overlay",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 16,
      "jobNumber": "A20042",
      "description": "Hwy. 82 \u2013 Louisiana St. Line (Sel. Secs.) (S)",
      "district": "2",
      "route": "35",
      "section": "2",
      "county": "Grant",
      "scope": "Level Up & 2\" Overlay",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 17,
      "jobNumber": "A20043",
      "description": "Saline Co. Line \u2013 Hwy. 167B (S)",
      "district": "2",
      "route": "65",
      "section": "21 & 22",
      "county": "Chicot",
      "scope": "2\" Overlay; Add 2' Shoulders ",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 18,
      "jobNumber": "A30048",
      "description": "Hwy. 71 \u2013 Howard Co. Line (S)",
      "district": "3",
      "route": "27",
      "section": "1 & 2",
      "county": "Howard & Sevier",
      "scope": "2\" Mill & 1.5\" Overlay",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 19,
      "jobNumber": "A30051",
      "description": "Hwy. 71 \u2013 Co. Rd. 28 (S)",
      "district": "3",
      "route": "237",
      "section": "1",
      "county": "Miller",
      "scope": "2\" Overlay; 2' Shoulders",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 20,
      "jobNumber": "A40061",
      "description": "Oklahoma State Line \u2013 Hwy. 71 (S)",
      "district": "4",
      "route": "28",
      "section": "1",
      "county": "Scott",
      "scope": "Level Up & UTBWC (LM 0.0-15.86); 2\" Mill & 2\" Overlay (LM 15.86-20.448)",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 21,
      "jobNumber": "A50051",
      "description": "Hwy. 62 \u2013 Hwy. 395 (Salem) (S)",
      "district": "5",
      "route": "9",
      "section": "15",
      "county": "Fulton",
      "scope": "2\" Mill & 1.5\" Overlay; 2' Shoulders",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 22,
      "jobNumber": "A50053",
      "description": "Hwy. 167 \u2013 Hwy. 122 (S)",
      "district": "5",
      "route": "14",
      "section": "9 & 10",
      "county": "Independence",
      "scope": "Level Up & UTBWC; 2' Shoulders",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 23,
      "jobNumber": "A50056",
      "description": "Hwys. 175 & 175S Impvts. (Cherokee Village) (S)",
      "district": "5",
      "route": "175",
      "section": "2, 2S, & 3",
      "county": "Fulton & Sharp",
      "scope": "Level Up & Chip Seal; Spot patching; 2' Shoulders",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 24,
      "jobNumber": "A60064",
      "description": "Jefferson Co. Line \u2013 I-40 (S)",
      "district": "6",
      "route": "13",
      "section": "9 & 10",
      "county": "Lonoke",
      "scope": "Rut Mill & 1.5\" Overlay",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 25,
      "jobNumber": "A70046",
      "description": "Pike Co. Line \u2013 Hwy. 53 (S)",
      "district": "7",
      "route": "8",
      "section": "5",
      "county": "Clark",
      "scope": "2\" Mill & 1.5\" Overlay",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 26,
      "jobNumber": "A90052",
      "description": "Hwy 102B - Walton Blvd.",
      "district": "9",
      "route": "102",
      "section": "3",
      "county": "Benton",
      "scope": "2\" Mill & 2\" Overlay",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 27,
      "jobNumber": "A00104",
      "description": "Hwy. 49 Impvts. (Craighead & Greene Cos.) (S)",
      "district": "10",
      "route": "49",
      "section": "2 & 3",
      "county": "Craighhead & Greene ",
      "scope": "2\" Mill & 2\" Overlay (Sec. 2); Level Up & Thin Overlay (Sec. 3)",
      "lettingDate": "2027-01-20",
      "dueToPm": "2026-10-26",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 28,
      "jobNumber": "A10056",
      "description": "Hwy. 49 \u2013 Hwy. 193 (S)",
      "district": "1",
      "route": "193",
      "section": "1",
      "county": "Cross",
      "scope": "Level Up & Chip Seal; 2' Shoulders",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 29,
      "jobNumber": "A10061",
      "description": "Hwy. 284 \u2013 Hwy. 64 (S)",
      "district": "1",
      "route": "306",
      "section": "1 & 2",
      "county": "St. Francis & Woodruff",
      "scope": "1\" Level Up & UTBWC; 2' Shoulders",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 30,
      "jobNumber": "A30050",
      "description": "E. of Texarkana \u2013 East (S)",
      "district": "3",
      "route": "196",
      "section": "1",
      "county": "Miller",
      "scope": "Level Up & 2\" Overlay; 2' Shoulders",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 31,
      "jobNumber": "A30052",
      "description": "Red River \u2013 Hope (S)",
      "district": "3",
      "route": "67",
      "section": "2",
      "county": "Hempstead",
      "scope": "2\" Mill & 2\" Overlay (LM 0.084-10.204); 1\" Level Up & UTBWC (LM 10.204-12.079)",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 32,
      "jobNumber": "AX0012",
      "description": "S. of Elkins \u2013 Combs (S)",
      "district": "4 & 9",
      "route": "16",
      "section": "3 & 4",
      "county": "Madison & Washington",
      "scope": "Level Up & 1.5\" Overlay (Sec. 3); Level Up (Sec. 4)",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 33,
      "jobNumber": "A50054",
      "description": "Diaz \u2013 Newport (S)",
      "district": "5",
      "route": "17, 18, 980",
      "section": "7, 1 & 1S, 26",
      "county": "Jackson",
      "scope": "Level Up & UTBWC (Hwy. 17); 2\" Mill & 1.5\" Overlay (Hwys. 18, 18S & 980); 2' Shoulders",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 34,
      "jobNumber": "A60065",
      "description": "Grant Co. Line \u2013 I-530 (S)",
      "district": "6",
      "route": "167",
      "section": "12",
      "county": "Saline",
      "scope": "2\" Mill & 2\" Overlay",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 35,
      "jobNumber": "A70047",
      "description": "Hwy. 79B \u2013 Hwy. 205 (S)",
      "district": "7",
      "route": "79",
      "section": "4",
      "county": "Ouachita",
      "scope": "2\" Mill & 1.5\" Overlay",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 36,
      "jobNumber": "A80043",
      "description": "Hwys. 10 & 27 Impvts. (Yell Co.) (S)",
      "district": "8",
      "route": "10, 27",
      "section": "3 & 4, 9",
      "county": "Yell",
      "scope": "2\" Mill & 2\" Overlay ",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 37,
      "jobNumber": "A90048",
      "description": "SW Artillery Rd. \u2013 SW Wheatgrass Blvd. (Bentonville) (S)",
      "district": "9",
      "route": "12",
      "section": "2",
      "county": "Benton",
      "scope": "2\" Mill & 2\" Overlay",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 38,
      "jobNumber": "A00105",
      "description": "Hwy. 140 \u2013 I-55 (S)",
      "district": "10",
      "route": "14",
      "section": "15 & 16",
      "county": "Mississippi & Poinsett",
      "scope": "Level Up & 2\" Overlay w/ Patching; 2' Shoulders",
      "lettingDate": "2027-03-03",
      "dueToPm": "2026-12-07",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 39,
      "jobNumber": "A10062",
      "description": "Hwys. 121 & 261 Impvts. (Lee & St. Francis Cos.) (S)",
      "district": "1",
      "route": "121, 261",
      "section": "2, 1 & 2",
      "county": "Lee & St. Francis",
      "scope": "1.5\" Overlay; 2' Shoulders ",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 40,
      "jobNumber": "A10057",
      "description": "Hwy. 64B \u2013 Hwy. 306 (S)",
      "district": "1",
      "route": "284",
      "section": "2 & 3",
      "county": "Cross & St. Francis",
      "scope": "Level Up & UTBWC",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 41,
      "jobNumber": "A10055",
      "description": "Hwy. 64 \u2013 Woodruff Co. Line (S)",
      "district": "1",
      "route": "49",
      "section": "6",
      "county": "Cross",
      "scope": "Thin Overlay (1\")",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 42,
      "jobNumber": "A40060",
      "description": "Hwy. 71 \u2013 Montgomery Co. Line (S)",
      "district": "4",
      "route": "270",
      "section": "2",
      "county": "Scott",
      "scope": "Level Up & 1.5\" Overlay (LM 0.0-8.55); 2\" Mill & 2\" Overlay (LM 8.55-12.292)",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 43,
      "jobNumber": "A50050",
      "description": "Stone Co. Line \u2013 Brandenburg (S)",
      "district": "5",
      "route": "9",
      "section": "12",
      "county": "Izard",
      "scope": "2\" Overlay ",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 44,
      "jobNumber": "A60067",
      "description": "Little Rock \u2013 Jefferson Co. Line (S)",
      "district": "6",
      "route": "365",
      "section": "12",
      "county": "Pulaski",
      "scope": "1\" Mill & 2\" Overlay",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 45,
      "jobNumber": "A70048",
      "description": "Hwy. 7B \u2013 South (S)",
      "district": "7",
      "route": "7, 167",
      "section": "2 & 1",
      "county": "Union",
      "scope": "Level Up & UTBWC (Hwy. 167 LM 18.980-19.372 & Hwy. 7 LM 0.0-2.663); 2\" Overlay (Hwy. 7 LM 2.663-6.206)",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 46,
      "jobNumber": "A90049",
      "description": "South Mountain Rd. \u2013 North (S)",
      "district": "9",
      "route": "65",
      "section": "5 & 6",
      "county": "Searcy",
      "scope": "2\" Mill & 2\" Overlay",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 47,
      "jobNumber": "A00102",
      "description": "Hwy. 93 \u2013 East (S)",
      "district": "10",
      "route": "90",
      "section": "6",
      "county": "Randolph",
      "scope": "1.5\" Overlay; 2' shoulders",
      "lettingDate": "2027-04-14",
      "dueToPm": "2027-01-11",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 48,
      "jobNumber": "A50055",
      "description": "Hwy. 11 \u2013 Kensett (S)",
      "district": "5",
      "route": "385",
      "section": "0",
      "county": "White",
      "scope": "Level Up & Chip Seal w/ patching; 2' Shoulders",
      "lettingDate": "2027-05-19",
      "dueToPm": "2027-02-22",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 49,
      "jobNumber": "A90047",
      "description": "S. of Hwy. 206 \u2013 Hwy. 123 (S)",
      "district": "9",
      "route": "65",
      "section": "2 & 3",
      "county": "Boone & Newton",
      "scope": "Mill & Overlay",
      "lettingDate": "2027-05-19",
      "dueToPm": "2027-02-22",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 50,
      "jobNumber": "A00101",
      "description": "Piggott \u2013 Marmaduke (S)",
      "district": "10",
      "route": "49",
      "section": "1 & 2",
      "county": "Clay & Greene",
      "scope": "Level Up & UTBWC, Spot Patching (Sec 1 LM 0.0-13.638); UTBWC, Spot Patching (Sec. 1 LM 13.638-15.556 & Sec. 2)",
      "lettingDate": "2027-05-19",
      "dueToPm": "2027-02-22",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    },
    {
      "sequence": 51,
      "jobNumber": "090735",
      "description": "Oklahoma State Line \u2013 East (Siloam Springs) (S)",
      "district": "9",
      "route": "412",
      "section": "1",
      "county": "Benton",
      "scope": "2\" Mill & 2\" Overlay",
      "lettingDate": "2027-05-19",
      "dueToPm": "2027-02-22",
      "notes": "",
      "currentStage": null,
      "currentPhase": null,
      "stageEnteredDate": null,
      "milestones": [],
      "validation": []
    }
  ],
  "validationSummary": {
    "projects": 51,
    "projectsWithCurrentStage": 14,
    "projectsUpcoming": 37,
    "sameDayProgressionProjects": 8,
    "dateConflictProjects": 0
  },
  "asOfDate": "2026-08-31",
  "generatedAt": "2026-08-31T12:51:00-05:00"
};


const WORKBOOK_URL = "data/PPP-2027-Review-Tracking.xlsx";
let lastWorkbookHash = null;

function readU16(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function readU32(bytes, offset) {
  return (bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)) >>> 0;
}

function findZipEocd(bytes) {
  const min = Math.max(0, bytes.length - 65557);
  for (let i = bytes.length - 22; i >= min; i--) {
    if (readU32(bytes, i) === 0x06054b50) return i;
  }
  throw new Error("Workbook ZIP directory was not found.");
}

function listZipEntries(bytes) {
  const eocd = findZipEocd(bytes);
  const entryCount = readU16(bytes, eocd + 10);
  let offset = readU32(bytes, eocd + 16);
  const decoder = new TextDecoder("utf-8");
  const entries = new Map();

  for (let i = 0; i < entryCount; i++) {
    if (readU32(bytes, offset) !== 0x02014b50) {
      throw new Error("Workbook ZIP directory is invalid.");
    }
    const method = readU16(bytes, offset + 10);
    const compressedSize = readU32(bytes, offset + 20);
    const nameLength = readU16(bytes, offset + 28);
    const extraLength = readU16(bytes, offset + 30);
    const commentLength = readU16(bytes, offset + 32);
    const localOffset = readU32(bytes, offset + 42);
    const name = decoder.decode(bytes.slice(offset + 46, offset + 46 + nameLength));
    entries.set(name, { method, compressedSize, localOffset });
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

async function extractZipEntry(bytes, entries, name, required = true) {
  const entry = entries.get(name);
  if (!entry) {
    if (required) throw new Error(`Workbook entry missing: ${name}`);
    return null;
  }

  const local = entry.localOffset;
  if (readU32(bytes, local) !== 0x04034b50) {
    throw new Error(`Workbook entry is invalid: ${name}`);
  }
  const nameLength = readU16(bytes, local + 26);
  const extraLength = readU16(bytes, local + 28);
  const dataStart = local + 30 + nameLength + extraLength;
  const compressed = bytes.slice(dataStart, dataStart + entry.compressedSize);

  if (entry.method === 0) return compressed;
  if (entry.method !== 8) throw new Error(`Unsupported workbook compression method: ${entry.method}`);

  const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  const buffer = await new Response(stream).arrayBuffer();
  return new Uint8Array(buffer);
}

function xmlUnescape(value) {
  return String(value ?? "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function getXmlAttr(attrs, name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`(?:^|\\s)${escaped}="([^"]*)"`).exec(attrs);
  return match ? xmlUnescape(match[1]) : null;
}

function parseSharedStrings(xml) {
  const strings = [];
  const siRegex = /<si\b[^>]*>([\s\S]*?)<\/si>/g;
  let si;
  while ((si = siRegex.exec(xml))) {
    let combined = "";
    const tRegex = /<t\b[^>]*>([\s\S]*?)<\/t>/g;
    let t;
    while ((t = tRegex.exec(si[1]))) combined += xmlUnescape(t[1]);
    strings.push(combined);
  }
  return strings;
}

function normalizeZipPath(target) {
  const raw = target.startsWith("/") ? target.slice(1) : `xl/${target}`;
  const parts = [];
  raw.replaceAll("\\", "/").split("/").forEach(part => {
    if (!part || part === ".") return;
    if (part === "..") parts.pop();
    else parts.push(part);
  });
  return parts.join("/");
}

function findWorksheetPath(workbookXml, relsXml, sheetName) {
  const sheetRegex = /<sheet\b([^>]*)\/?>/g;
  let sheet;
  let relationshipId = null;
  while ((sheet = sheetRegex.exec(workbookXml))) {
    const attrs = sheet[1];
    if (getXmlAttr(attrs, "name") === sheetName) {
      relationshipId = getXmlAttr(attrs, "r:id");
      break;
    }
  }
  if (!relationshipId) throw new Error(`Worksheet not found: ${sheetName}`);

  const relRegex = /<Relationship\b([^>]*)\/?>/g;
  let rel;
  while ((rel = relRegex.exec(relsXml))) {
    const attrs = rel[1];
    if (getXmlAttr(attrs, "Id") === relationshipId) {
      const target = getXmlAttr(attrs, "Target");
      if (!target) break;
      return normalizeZipPath(target);
    }
  }
  throw new Error(`Worksheet relationship not found: ${sheetName}`);
}

function columnNumber(reference) {
  const letters = String(reference).match(/^[A-Z]+/i)?.[0] || "";
  let number = 0;
  for (const ch of letters.toUpperCase()) number = number * 26 + ch.charCodeAt(0) - 64;
  return number;
}

function rowNumber(reference) {
  return Number(String(reference).match(/\d+$/)?.[0] || 0);
}

function parseWorksheet(xml, sharedStrings) {
  const rows = new Map();
  const cellRegex = /<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g;
  let cell;
  while ((cell = cellRegex.exec(xml))) {
    const attrs = cell[1];
    const body = cell[2] || "";
    const ref = getXmlAttr(attrs, "r");
    if (!ref) continue;

    const row = rowNumber(ref);
    const col = columnNumber(ref);
    const type = getXmlAttr(attrs, "t");
    let value = "";

    if (type === "inlineStr") {
      const pieces = [];
      const tRegex = /<t\b[^>]*>([\s\S]*?)<\/t>/g;
      let t;
      while ((t = tRegex.exec(body))) pieces.push(xmlUnescape(t[1]));
      value = pieces.join("");
    } else {
      const v = /<v\b[^>]*>([\s\S]*?)<\/v>/.exec(body)?.[1];
      if (v !== undefined) {
        if (type === "s") value = sharedStrings[Number(v)] ?? "";
        else value = xmlUnescape(v);
      }
    }

    if (!rows.has(row)) rows.set(row, new Map());
    rows.get(row).set(col, value);
  }
  return rows;
}

function excelDateToIso(raw) {
  if (raw === null || raw === undefined || raw === "") return null;
  const text = String(raw).trim();
  if (!text) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;

  const number = Number(text);
  if (Number.isFinite(number) && number > 0) {
    const epoch = Date.UTC(1899, 11, 30);
    return new Date(epoch + Math.round(number * DAY_MS)).toISOString().slice(0, 10);
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return new Date(Date.UTC(parsed.getFullYear(), parsed.getMonth(), parsed.getDate())).toISOString().slice(0, 10);
  }
  return text;
}

function localIsoDate(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function hashWorkbook(bytes) {
  let hash = 2166136261;
  for (let i = 0; i < bytes.length; i++) {
    hash ^= bytes[i];
    hash = Math.imul(hash, 16777619);
  }
  return `${(hash >>> 0).toString(16)}-${bytes.length}`;
}

async function parseWorkbookArrayBuffer(buffer) {
  const bytes = new Uint8Array(buffer);
  const entries = listZipEntries(bytes);
  const decoder = new TextDecoder("utf-8");

  const workbookXml = decoder.decode(await extractZipEntry(bytes, entries, "xl/workbook.xml"));
  const relsXml = decoder.decode(await extractZipEntry(bytes, entries, "xl/_rels/workbook.xml.rels"));
  const sharedBytes = await extractZipEntry(bytes, entries, "xl/sharedStrings.xml", false);
  const sharedStrings = sharedBytes ? parseSharedStrings(decoder.decode(sharedBytes)) : [];
  const worksheetPath = findWorksheetPath(workbookXml, relsXml, "PPP Projects");
  const worksheetXml = decoder.decode(await extractZipEntry(bytes, entries, worksheetPath));
  const rows = parseWorksheet(worksheetXml, sharedStrings);

  const headerRow = rows.get(1) || new Map();
  const headers = new Map();
  for (const [col, value] of headerRow.entries()) {
    const header = String(value || "").trim();
    if (header) headers.set(header, col);
  }

  const required = ["Job Number", "Project Description", "Letting Date", "Due to PM", "Notes"];
  for (const phase of FALLBACK_DATA.phases) required.push(...phase.stages);
  for (const header of required) {
    if (!headers.has(header)) throw new Error(`Required workbook column missing: ${header}`);
  }

  const sequenceByStage = new Map();
  const phaseByStage = new Map();
  let stageSequence = 0;
  FALLBACK_DATA.phases.forEach(phase => {
    phase.stages.forEach(stage => {
      stageSequence++;
      sequenceByStage.set(stage, stageSequence);
      phaseByStage.set(stage, phase.name);
    });
  });

  const getCell = (row, header) => String(row.get(headers.get(header)) ?? "");
  const projects = [];
  const rowNumbers = [...rows.keys()].filter(n => n > 1).sort((a, b) => a - b);

  for (const rowIndex of rowNumbers) {
    const row = rows.get(rowIndex);
    const jobNumber = getCell(row, "Job Number").trim();
    if (!jobNumber) continue;

    const milestones = [];
    FALLBACK_DATA.phases.forEach(phase => {
      phase.stages.forEach(stage => {
        const date = excelDateToIso(getCell(row, stage));
        if (date) milestones.push({ stage, date, sequence: sequenceByStage.get(stage) });
      });
    });

    const validation = [];
    let maxPriorDate = null;
    let maxPriorStage = null;
    [...milestones].sort((a, b) => a.sequence - b.sequence).forEach(m => {
      if (maxPriorDate && m.date < maxPriorDate) {
        validation.push({
          type: "date-conflict",
          message: `Date sequence conflict: '${m.stage}' is dated ${m.date}, earlier than prior milestone '${maxPriorStage}' dated ${maxPriorDate}. Current stage is determined from the latest applicable date.`
        });
      }
      if (!maxPriorDate || m.date > maxPriorDate) {
        maxPriorDate = m.date;
        maxPriorStage = m.stage;
      }
    });

    const latest = milestones.length
      ? [...milestones].sort((a, b) => a.date.localeCompare(b.date) || a.sequence - b.sequence).at(-1)
      : null;

    if (latest) {
      const sameDateMilestones = milestones
        .filter(m => m.date === latest.date)
        .sort((a, b) => a.sequence - b.sequence);
      if (sameDateMilestones.length > 1) {
        validation.push({
          type: "same-day-progression",
          message: `${sameDateMilestones.length} milestones were recorded on ${latest.date}; the furthest workflow stage on that date is used as current.`,
          stages: sameDateMilestones.map(m => m.stage)
        });
      }
    }

    projects.push({
      sequence: projects.length + 1,
      jobNumber,
      description: getCell(row, "Project Description"),
      district: getCell(row, "District"),
      route: getCell(row, "Route"),
      section: getCell(row, "Section"),
      county: getCell(row, "County"),
      scope: getCell(row, "Scope"),
      lettingDate: excelDateToIso(getCell(row, "Letting Date")),
      dueToPm: excelDateToIso(getCell(row, "Due to PM")),
      notes: getCell(row, "Notes"),
      currentStage: latest?.stage || null,
      currentPhase: latest ? phaseByStage.get(latest.stage) : null,
      stageEnteredDate: latest?.date || null,
      milestones,
      validation
    });
  }

  const now = new Date();
  return {
    sourceWorkbook: "PPP-2027-Review-Tracking.xlsx",
    generatedFromWorkbookDate: localIsoDate(now),
    generatedAt: now.toISOString(),
    asOfDate: localIsoDate(now),
    attentionThresholdDays: 7,
    phases: FALLBACK_DATA.phases,
    projects
  };
}

async function fetchWorkbookBytes() {
  const response = await fetch(`${WORKBOOK_URL}?_=${Date.now()}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`Workbook request failed (${response.status})`);
  return new Uint8Array(await response.arrayBuffer());
}


const DAY_MS = 86400000;
let APP_DATA = JSON.parse(JSON.stringify(FALLBACK_DATA));
let connectionMode = "snapshot";
let toastTimer = null;

const state = {
  search: "",
  letting: "all",
  phase: "all",
  stage: "all",
  selectedPhase: "1st Review",
  selectedFinalStage: null
};

const els = {
  summaryGrid: document.getElementById("summaryGrid"),
  projectSearch: document.getElementById("projectSearch"),
  lettingFilter: document.getElementById("lettingFilter"),
  phaseFilter: document.getElementById("phaseFilter"),
  stageFilter: document.getElementById("stageFilter"),
  clearFilters: document.getElementById("clearFilters"),
  attentionStrip: document.getElementById("attentionStrip"),
  phaseOverview: document.getElementById("phaseOverview"),
  phaseTabs: document.getElementById("phaseTabs"),
  workspaceTitle: document.getElementById("workspaceTitle"),
  workspaceNote: document.getElementById("workspaceNote"),
  detailBoard: document.getElementById("detailBoard"),
  upcomingStrip: document.getElementById("upcomingStrip"),
  resultCount: document.getElementById("resultCount"),
  validationSummary: document.getElementById("validationSummary"),
  dataStatus: document.getElementById("dataStatus"),
  dataMode: document.getElementById("dataMode"),
  dataTimestamp: document.getElementById("dataTimestamp"),
  detailDrawer: document.getElementById("detailDrawer"),
  drawerContent: document.getElementById("drawerContent"),
  drawerClose: document.getElementById("drawerClose"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  toast: document.getElementById("toast")
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseIsoDate(value) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function formatDate(value, short = false) {
  const d = parseIsoDate(value);
  if (!d) return "—";
  return new Intl.DateTimeFormat("en-US", short
    ? { month: "short", day: "numeric", year: "2-digit" }
    : { month: "short", day: "numeric", year: "numeric" }
  ).format(d);
}

function formatDateTime(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
  }).format(d);
}

function asOfDate() {
  const configured = parseIsoDate(APP_DATA.asOfDate);
  if (configured) return configured;
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function waitingDays(project) {
  const entered = parseIsoDate(project.stageEnteredDate);
  if (!entered) return 0;
  return Math.max(0, Math.floor((asOfDate() - entered) / DAY_MS));
}

function attentionClass(project) {
  const hasConflict = (project.validation || []).some(v => v.type === "date-conflict");
  if (hasConflict) return "conflict";
  const days = waitingDays(project);
  if (days >= 14) return "critical";
  if (days >= (APP_DATA.attentionThresholdDays || 7)) return "attention";
  return "";
}

function stageEntries() {
  const entries = [];
  APP_DATA.phases.forEach((phase, phaseIndex) => {
    phase.stages.forEach((stage, stageIndex) => {
      entries.push({ phase: phase.name, stage, phaseIndex, stageIndex });
    });
  });
  return entries;
}

function phaseForStage(stage) {
  for (const phase of APP_DATA.phases) {
    if (phase.stages.includes(stage)) return phase.name;
  }
  return null;
}

function activeProjects() {
  return APP_DATA.projects.filter(p => p.currentStage);
}

function upcomingProjects() {
  return APP_DATA.projects.filter(p => !p.currentStage);
}

function textMatch(project) {
  if (!state.search) return true;
  const haystack = [
    project.jobNumber, project.description, project.county, project.district,
    project.route, project.section, project.scope, project.notes
  ].join(" ").toLowerCase();
  return haystack.includes(state.search.toLowerCase());
}

function baseFilteredProjects() {
  return APP_DATA.projects.filter(project => {
    if (!textMatch(project)) return false;
    if (state.letting !== "all" && project.lettingDate !== state.letting) return false;
    if (state.phase !== "all" && project.currentPhase !== state.phase) return false;
    if (state.stage !== "all" && project.currentStage !== state.stage) return false;
    return true;
  });
}

function upcomingFilteredProjects() {
  return APP_DATA.projects.filter(project => {
    if (project.currentStage) return false;
    if (!textMatch(project)) return false;
    if (state.letting !== "all" && project.lettingDate !== state.letting) return false;
    return true;
  });
}

function countsByStage(projects) {
  const counts = new Map(stageEntries().map(item => [item.stage, 0]));
  projects.filter(p => p.currentStage).forEach(p => {
    counts.set(p.currentStage, (counts.get(p.currentStage) || 0) + 1);
  });
  return counts;
}

function countPhase(projects, phaseName) {
  return projects.filter(p => p.currentPhase === phaseName).length;
}

function nextLettingDate(projects) {
  const dates = [...new Set(projects.map(p => p.lettingDate).filter(Boolean))].sort();
  return dates[0] || null;
}

function renderSummary() {
  const active = activeProjects();
  const upcoming = upcomingProjects();
  const attention = active.filter(p => waitingDays(p) >= (APP_DATA.attentionThresholdDays || 7) ||
    (p.validation || []).some(v => v.type === "date-conflict"));
  const nextLetting = nextLettingDate(APP_DATA.projects);
  const conflicts = APP_DATA.projects.filter(p => (p.validation || []).some(v => v.type === "date-conflict")).length;

  const cards = [
    {
      label: "Total PPP projects",
      value: APP_DATA.projects.length,
      note: conflicts ? `${conflicts} project${conflicts === 1 ? "" : "s"} with date conflict` : "Workbook project count verified"
    },
    {
      label: "Active reviews",
      value: active.length,
      note: "Projects with a populated workflow milestone"
    },
    {
      label: "Need attention",
      value: attention.length,
      note: `${APP_DATA.attentionThresholdDays || 7}+ days waiting or a date conflict`,
      className: "attention"
    },
    {
      label: "Upcoming",
      value: upcoming.length,
      note: nextLetting ? `Next letting ${formatDate(nextLetting)}` : "No future letting date recorded"
    }
  ];

  els.summaryGrid.innerHTML = cards.map(card => `
    <article class="summary-card ${card.className || ""}">
      <div>
        <span class="summary-label">${escapeHtml(card.label)}</span>
        <span class="summary-note">${escapeHtml(card.note)}</span>
      </div>
      <strong class="summary-value">${card.value}</strong>
    </article>
  `).join("");
}

function renderAttention() {
  const filtered = baseFilteredProjects();
  const threshold = APP_DATA.attentionThresholdDays || 7;
  const attention = filtered
    .filter(p => p.currentStage)
    .filter(p => waitingDays(p) >= threshold || (p.validation || []).some(v => v.type === "date-conflict"))
    .sort((a, b) => waitingDays(b) - waitingDays(a));

  if (!attention.length) {
    els.attentionStrip.innerHTML = `
      <span class="attention-title">Needs attention</span>
      <span class="attention-empty">No matching projects are at or beyond the ${threshold}-day attention threshold.</span>
    `;
    return;
  }

  els.attentionStrip.innerHTML = `
    <span class="attention-title">Needs attention · ${attention.length}</span>
    <div class="attention-items">
      ${attention.map(p => {
        const conflict = (p.validation || []).some(v => v.type === "date-conflict");
        return `<button type="button" class="attention-chip" data-project="${escapeHtml(p.jobNumber)}">
          ${escapeHtml(p.jobNumber)} · <strong>${conflict ? "date conflict" : `${waitingDays(p)}d`}</strong>
        </button>`;
      }).join("")}
    </div>
  `;
  els.attentionStrip.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function renderPhaseOverview() {
  const filtered = baseFilteredProjects().filter(p => p.currentStage);
  const counts = countsByStage(filtered);
  const accents = ["#2b5d79", "#44785f", "#816a3a", "#76576b", "#6b596f"];

  els.phaseOverview.innerHTML = APP_DATA.phases.map((phase, phaseIndex) => {
    const phaseProjects = filtered.filter(p => p.currentPhase === phase.name);
    const total = phaseProjects.length;
    const occupiedStages = phase.stages.filter(stage => (counts.get(stage) || 0) > 0);
    const rail = phase.stages.map(stage => {
      const count = counts.get(stage) || 0;
      return `<span class="phase-rail-segment ${count ? "occupied" : ""}"
        title="${escapeHtml(stage)}: ${count} project${count === 1 ? "" : "s"}"></span>`;
    }).join("");

    let summary;
    if (phase.name === "Final Reviews") {
      summary = `
        <div class="phase-summary-metrics final-summary">
          <span><b>${occupiedStages.length}</b><em>occupied stages</em></span>
          <span><b>${phase.stages.length}</b><em>workflow stages</em></span>
        </div>`;
    } else {
      const sbCount = phaseProjects.filter(p => /SB/i.test(p.currentStage || "")).length;
      const districtCount = phaseProjects.filter(p => /District/i.test(p.currentStage || "")).length;
      summary = `
        <div class="phase-summary-metrics">
          <span><b>${sbCount}</b><em>SB workflow</em></span>
          <span><b>${districtCount}</b><em>District workflow</em></span>
        </div>`;
    }

    return `
      <button type="button"
        class="phase-card ${phase.name === state.selectedPhase ? "selected" : ""} ${phase.name === "Final Reviews" ? "final-phase" : ""}"
        data-phase="${escapeHtml(phase.name)}"
        style="--phase-accent:${accents[phaseIndex]};"
        aria-label="Open ${escapeHtml(phase.name)} detail">
        <div class="phase-card-top">
          <span class="phase-card-title">${escapeHtml(phase.name)}</span>
          <span class="phase-total-wrap"><strong class="phase-total">${total}</strong><small>projects</small></span>
        </div>
        ${summary}
        <div class="phase-stage-rail" aria-hidden="true">${rail}</div>
      </button>
    `;
  }).join("");

  els.phaseOverview.querySelectorAll("[data-phase]").forEach(button => {
    button.addEventListener("click", () => selectPhase(button.dataset.phase));
  });
}

function renderTabs() {
  const filtered = baseFilteredProjects().filter(p => p.currentStage);
  els.phaseTabs.innerHTML = APP_DATA.phases.map(phase => `
    <button type="button"
      class="phase-tab ${phase.name === state.selectedPhase ? "active" : ""}"
      role="tab"
      aria-selected="${phase.name === state.selectedPhase}"
      data-phase="${escapeHtml(phase.name)}">
      ${escapeHtml(phase.name)} <b>${countPhase(filtered, phase.name)}</b>
    </button>
  `).join("");
  els.phaseTabs.querySelectorAll("[data-phase]").forEach(button => {
    button.addEventListener("click", () => selectPhase(button.dataset.phase));
  });
}

function projectCard(project) {
  const days = waitingDays(project);
  const status = attentionClass(project);
  const conflict = (project.validation || []).some(v => v.type === "date-conflict");
  const attention = status === "attention" || status === "critical" || status === "conflict";
  const waitText = project.stageEnteredDate
    ? `${attention ? "⚠ " : ""}${days} DAY${days === 1 ? "" : "S"}`
    : "—";
  return `
    <article class="project-card ${status}" tabindex="0" role="button"
      data-project="${escapeHtml(project.jobNumber)}"
      aria-label="Open ${escapeHtml(project.jobNumber)} details">
      <div class="project-card-head">
        <strong class="job-number">${escapeHtml(project.jobNumber)}</strong>
        <span class="wait-pill">${waitText}</span>
      </div>
      <div class="project-description" title="${escapeHtml(project.description)}">${escapeHtml(project.description)}</div>
      <div class="project-meta">
        <span><b>Letting</b> ${formatDate(project.lettingDate, true)}</span>
        <span><b>Entered</b> ${formatDate(project.stageEnteredDate, true)}</span>
      </div>
      ${conflict ? `<div class="card-warning">⚠ Workbook date conflict</div>` : ""}
    </article>
  `;
}

function bindProjectCards(container) {
  container.querySelectorAll("[data-project]").forEach(card => {
    const open = () => openProject(card.dataset.project);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

function selectPhase(phaseName) {
  if (!APP_DATA.phases.some(p => p.name === phaseName)) return;
  state.selectedPhase = phaseName;
  if (phaseName === "Final Reviews") {
    const finalPhase = APP_DATA.phases.find(p => p.name === "Final Reviews");
    const finalProjects = baseFilteredProjects().filter(p => p.currentPhase === "Final Reviews");
    const firstOccupied = finalPhase.stages.find(stage => finalProjects.some(p => p.currentStage === stage));
    if (!state.selectedFinalStage || !finalPhase.stages.includes(state.selectedFinalStage)) {
      state.selectedFinalStage = firstOccupied || finalPhase.stages[0];
    }
  }
  renderPhaseOverview();
  renderTabs();
  renderDetailBoard();
}

function renderDetailBoard() {
  const phase = APP_DATA.phases.find(p => p.name === state.selectedPhase) || APP_DATA.phases[0];
  const filtered = baseFilteredProjects().filter(p => p.currentPhase === phase.name);
  els.workspaceTitle.textContent = phase.name;
  els.workspaceNote.textContent = `${filtered.length} matching project${filtered.length === 1 ? "" : "s"} currently in this phase`;

  if (phase.name === "Final Reviews") {
    renderFinalReviews(phase, filtered);
    return;
  }

  els.detailBoard.innerHTML = `
    <div class="stage-columns">
      ${phase.stages.map(stage => {
        const projects = filtered.filter(p => p.currentStage === stage)
          .sort((a, b) => waitingDays(b) - waitingDays(a));
        return `
          <section class="stage-column">
            <div class="stage-column-header">
              <strong>${escapeHtml(stage)}</strong>
              <span class="stage-count">${projects.length}</span>
            </div>
            <div class="card-stack">
              ${projects.length ? projects.map(projectCard).join("") : `<div class="empty-stage">No projects at this stage</div>`}
            </div>
          </section>
        `;
      }).join("")}
    </div>
  `;
  bindProjectCards(els.detailBoard);
}

function renderFinalReviews(phase, filtered) {
  const counts = countsByStage(filtered);
  if (!state.selectedFinalStage || !phase.stages.includes(state.selectedFinalStage)) {
    state.selectedFinalStage = phase.stages.find(stage => (counts.get(stage) || 0) > 0) || phase.stages[0];
  }
  const selectedProjects = filtered
    .filter(p => p.currentStage === state.selectedFinalStage)
    .sort((a, b) => waitingDays(b) - waitingDays(a));

  els.detailBoard.innerHTML = `
    <div class="final-stage-selector" aria-label="Final review workflow stages">
      ${phase.stages.map(stage => `
        <button type="button" class="final-stage-button ${stage === state.selectedFinalStage ? "active" : ""}"
          data-final-stage="${escapeHtml(stage)}" title="${escapeHtml(stage)}">
          <span>${escapeHtml(stage)}</span><b>${counts.get(stage) || 0}</b>
        </button>
      `).join("")}
    </div>
    <div class="final-project-grid">
      ${selectedProjects.length
        ? selectedProjects.map(projectCard).join("")
        : `<div class="empty-stage">No projects currently at <strong>${escapeHtml(state.selectedFinalStage)}</strong>.</div>`}
    </div>
  `;

  els.detailBoard.querySelectorAll("[data-final-stage]").forEach(button => {
    button.addEventListener("click", () => {
      state.selectedFinalStage = button.dataset.finalStage;
      renderDetailBoard();
    });
  });
  bindProjectCards(els.detailBoard);
}

function renderUpcoming() {
  // The lower workload strip is intentionally driven by Due to PM, not Letting Date.
  // Letting Date remains available elsewhere in the dashboard as schedule context.
  const projects = upcomingFilteredProjects().sort((a, b) =>
    (a.dueToPm || "9999").localeCompare(b.dueToPm || "9999") ||
    (a.lettingDate || "9999").localeCompare(b.lettingDate || "9999") ||
    String(a.jobNumber).localeCompare(String(b.jobNumber))
  );
  const today = asOfDate();
  const dueWithin = days => projects.filter(p => {
    const d = parseIsoDate(p.dueToPm);
    if (!d) return false;
    const delta = Math.floor((d - today) / DAY_MS);
    return delta >= 0 && delta <= days;
  }).length;
  const futureDueDates = projects
    .map(p => p.dueToPm)
    .filter(Boolean)
    .filter(d => parseIsoDate(d) >= today)
    .sort();
  const nextDueToPm = futureDueDates[0] || null;
  const pmDueAhead = projects.filter(p => {
    const d = parseIsoDate(p.dueToPm);
    return d && d >= today;
  }).length;

  els.upcomingStrip.innerHTML = `
    <div class="upcoming-main">
      <strong>Upcoming submissions & lettings · ${projects.length} projects</strong>
      <span>${nextDueToPm ? `Next Due to PM: ${formatDate(nextDueToPm)}` : "No matching future Due to PM date available"}</span>
    </div>
    <div class="upcoming-stats">
      <div class="upcoming-stat"><b>${dueWithin(60)}</b><span>PM due next 60 days</span></div>
      <div class="upcoming-stat"><b>${dueWithin(120)}</b><span>PM due next 120 days</span></div>
      <div class="upcoming-stat"><b>${pmDueAhead}</b><span>PM due date ahead</span></div>
    </div>
    <button type="button" class="secondary-button" id="viewUpcoming">View projects</button>
  `;
  document.getElementById("viewUpcoming").addEventListener("click", openUpcomingDrawer);
}

function openProject(jobNumber) {
  const project = APP_DATA.projects.find(p => String(p.jobNumber) === String(jobNumber));
  if (!project) return;
  const days = waitingDays(project);
  const validations = project.validation || [];

  els.drawerContent.innerHTML = `
    <div class="drawer-job">${escapeHtml(project.jobNumber)}</div>
    <h2 class="drawer-title" id="drawerTitle">${escapeHtml(project.description)}</h2>

    <div class="drawer-stage">
      <strong>${escapeHtml(project.currentStage || "Not yet in review")}</strong>
      <span>${project.currentStage
        ? `Entered ${formatDate(project.stageEnteredDate)} · ${days} calendar day${days === 1 ? "" : "s"} waiting`
        : `Letting ${formatDate(project.lettingDate)}`}</span>
    </div>

    <div class="detail-grid">
      ${detailItem("Letting date", formatDate(project.lettingDate))}
      ${detailItem("Due to PM", formatDate(project.dueToPm))}
      ${detailItem("District", project.district || "—")}
      ${detailItem("Route", project.route || "—")}
      ${detailItem("Section", project.section || "—")}
      ${detailItem("County", project.county || "—")}
      ${detailItem("Scope", project.scope || "—", true)}
      ${detailItem("Notes", project.notes || "—", true)}
    </div>

    ${validations.length ? `
      <div class="drawer-section-title">Workbook validation</div>
      ${validations.map(v => `<div class="validation-box">${escapeHtml(v.message)}</div>`).join("")}
    ` : ""}

    <div class="drawer-section-title">Recorded workflow history</div>
    <div class="timeline">
      ${(project.milestones || []).length
        ? project.milestones.map(m => `
          <div class="timeline-item">
            <strong>${escapeHtml(m.stage)}</strong>
            <span>${formatDate(m.date)}</span>
          </div>
        `).join("")
        : `<div class="attention-empty">No review milestones have been entered in the workbook.</div>`}
    </div>
  `;
  openDrawer();
}

function detailItem(label, value, wide = false) {
  return `
    <div class="detail-item ${wide ? "detail-wide" : ""}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function openUpcomingDrawer() {
  const projects = upcomingFilteredProjects().sort((a, b) =>
    (a.dueToPm || "9999").localeCompare(b.dueToPm || "9999") ||
    (a.lettingDate || "9999").localeCompare(b.lettingDate || "9999") ||
    String(a.jobNumber).localeCompare(String(b.jobNumber))
  );
  els.drawerContent.innerHTML = `
    <div class="drawer-job">PPP 2027</div>
    <h2 class="drawer-title" id="drawerTitle">Upcoming submissions & lettings</h2>
    <div class="drawer-stage">
      <strong>${projects.length} matching projects not yet in review</strong>
      <span>Sorted by Due to PM. Letting date is shown as secondary schedule context.</span>
    </div>
    <div class="upcoming-list-drawer">
      ${projects.length ? projects.map(p => `
        <button type="button" class="upcoming-row" data-upcoming-project="${escapeHtml(p.jobNumber)}">
          <strong>${escapeHtml(p.jobNumber)}</strong>
          <span class="upcoming-row-description">${escapeHtml(p.description)}</span>
          <span class="upcoming-row-dates">
            <b>PM ${formatDate(p.dueToPm, true)}</b>
            <small>Let ${formatDate(p.lettingDate, true)}</small>
          </span>
        </button>
      `).join("") : `<div class="attention-empty">No upcoming projects match the current search/letting filter.</div>`}
    </div>
  `;
  els.drawerContent.querySelectorAll("[data-upcoming-project]").forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.upcomingProject));
  });
  openDrawer();
}

function openDrawer() {
  els.detailDrawer.classList.add("open");
  els.detailDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  els.detailDrawer.classList.remove("open");
  els.detailDrawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function populateFilters() {
  const lettingDates = [...new Set(APP_DATA.projects.map(p => p.lettingDate).filter(Boolean))].sort();
  const phaseNames = APP_DATA.phases.map(p => p.name);

  els.lettingFilter.innerHTML = `<option value="all">All letting dates</option>` +
    lettingDates.map(d => `<option value="${d}">${formatDate(d)}</option>`).join("");
  els.phaseFilter.innerHTML = `<option value="all">All review phases</option>` +
    phaseNames.map(p => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join("");

  if (!lettingDates.includes(state.letting)) state.letting = "all";
  if (!phaseNames.includes(state.phase)) state.phase = "all";
  els.lettingFilter.value = state.letting;
  els.phaseFilter.value = state.phase;
  populateStageFilter();
}

function populateStageFilter() {
  const stages = state.phase === "all"
    ? stageEntries().map(x => x.stage)
    : (APP_DATA.phases.find(p => p.name === state.phase)?.stages || []);

  if (!stages.includes(state.stage)) state.stage = "all";
  els.stageFilter.innerHTML = `<option value="all">All current stages</option>` +
    stages.map(stage => `<option value="${escapeHtml(stage)}">${escapeHtml(stage)}</option>`).join("");
  els.stageFilter.value = state.stage;
}

function renderResultCount() {
  const filtered = baseFilteredProjects();
  const total = APP_DATA.projects.length;
  const activeFiltered = filtered.filter(p => p.currentStage).length;
  const upcomingFiltered = upcomingFilteredProjects().length;
  const filtersActive = state.search || state.letting !== "all" || state.phase !== "all" || state.stage !== "all";
  els.resultCount.textContent = filtersActive
    ? `${filtered.length} matching projects · ${activeFiltered} active · ${upcomingFiltered} upcoming`
    : `${total} total projects · ${activeProjects().length} active`;
}

function renderValidation() {
  const conflicts = APP_DATA.projects.filter(p => (p.validation || []).some(v => v.type === "date-conflict")).length;
  const sameDay = APP_DATA.projects.filter(p => (p.validation || []).some(v => v.type === "same-day-progression")).length;
  els.validationSummary.textContent = conflicts
    ? `${conflicts} project${conflicts === 1 ? "" : "s"} contain chronological date conflicts; review the red flags.`
    : `Milestone validation: no chronological conflicts${sameDay ? ` · ${sameDay} same-day progression project${sameDay === 1 ? "" : "s"}` : ""}.`;
}

function renderAll() {
  if (!APP_DATA.phases.some(p => p.name === state.selectedPhase)) {
    state.selectedPhase = APP_DATA.phases[0]?.name || "";
  }
  renderSummary();
  renderAttention();
  renderPhaseOverview();
  renderTabs();
  renderDetailBoard();
  renderUpcoming();
  renderResultCount();
  renderValidation();
  updateConnectionLabel();
}

function updateConnectionLabel(errorMessage = "") {
  els.dataStatus.classList.remove("live", "snapshot", "error");
  if (connectionMode === "live") {
    els.dataStatus.classList.add("live");
    els.dataMode.textContent = "Excel linked · auto-refresh on";
    els.dataTimestamp.textContent = `${APP_DATA.sourceWorkbook || "Workbook"} · refreshed ${formatDateTime(APP_DATA.generatedAt) || "now"}`;
  } else if (errorMessage) {
    els.dataStatus.classList.add("error");
    els.dataMode.textContent = "Snapshot mode";
    els.dataTimestamp.textContent = errorMessage;
  } else {
    els.dataStatus.classList.add("snapshot");
    els.dataMode.textContent = "Snapshot mode";
    els.dataTimestamp.textContent = "Use Start Dashboard.bat to read the Excel file in the data folder";
  }
}

function showToast(message = "Dashboard refreshed from Excel.") {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2400);
}

async function loadWorkbookFromDataFolder({ announce = false } = {}) {
  try {
    const bytes = await fetchWorkbookBytes();
    const workbookHash = hashWorkbook(bytes);
    if (workbookHash === lastWorkbookHash && connectionMode === "live") return true;

    const parsed = await parseWorkbookArrayBuffer(bytes.buffer);
    APP_DATA = parsed;
    lastWorkbookHash = workbookHash;
    connectionMode = "live";
    populateFilters();
    renderAll();
    if (announce) showToast("Dashboard refreshed from the Excel data file.");
    return true;
  } catch (error) {
    if (connectionMode === "live") {
      els.dataStatus.classList.remove("live", "snapshot");
      els.dataStatus.classList.add("error");
      els.dataMode.textContent = "Excel refresh pending";
      els.dataTimestamp.textContent = "Workbook is unavailable or being saved; retrying automatically";
      return false;
    }
    connectionMode = "snapshot";
    populateFilters();
    renderAll();
    updateConnectionLabel("Excel data file unavailable; using embedded snapshot");
    return false;
  }
}

async function initializeLiveMode() {
  if (location.protocol !== "http:" && location.protocol !== "https:") {
    populateFilters();
    renderAll();
    return;
  }

  await loadWorkbookFromDataFolder();

  setInterval(async () => {
    await loadWorkbookFromDataFolder({ announce: true });
  }, 4000);
}

function applyFilters() {
  state.search = els.projectSearch.value.trim();
  state.letting = els.lettingFilter.value;
  state.phase = els.phaseFilter.value;
  state.stage = els.stageFilter.value;

  if (state.phase !== "all") state.selectedPhase = state.phase;
  renderAll();
}

els.projectSearch.addEventListener("input", applyFilters);
els.lettingFilter.addEventListener("change", applyFilters);
els.phaseFilter.addEventListener("change", () => {
  state.phase = els.phaseFilter.value;
  populateStageFilter();
  state.stage = els.stageFilter.value;
  if (state.phase !== "all") state.selectedPhase = state.phase;
  applyFilters();
});
els.stageFilter.addEventListener("change", applyFilters);

els.clearFilters.addEventListener("click", () => {
  state.search = "";
  state.letting = "all";
  state.phase = "all";
  state.stage = "all";
  els.projectSearch.value = "";
  populateFilters();
  renderAll();
});

els.drawerClose.addEventListener("click", closeDrawer);
els.drawerBackdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && els.detailDrawer.classList.contains("open")) closeDrawer();
});

initializeLiveMode();
