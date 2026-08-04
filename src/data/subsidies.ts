import { PiggyBank, Zap, FileCheck2, ListChecks, type LucideIcon } from "lucide-react";

export type SubsidyLink = {
  label: string;
  href: string;
};

// Official BC government links, as provided by the daycare.
const CCFRI_URL =
  "https://www2.gov.bc.ca/gov/content/family-social-supports/caring-for-young-children/childcarebc-programs/child-care-fee-reduction-initiative-provider-opt-in-status";
const ACCB_URL =
  "https://www2.gov.bc.ca/gov/content/family-social-supports/caring-for-young-children/childcarebc-programs/child-care-benefit";
const ESTIMATOR_URL = "https://myfamilyservices.gov.bc.ca/s/estimator";

export type SubsidyProgram = {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  links?: SubsidyLink[];
};

// BC childcare subsidy programs, as described on the daycare's existing website.
export const subsidyPrograms: SubsidyProgram[] = [
  {
    icon: PiggyBank,
    step: 1,
    title: "Parent Fee Reduction Amounts",
    description:
      "This initiative aims to make childcare more affordable for families and provide children with an educational head-start in life. Previously, this program offered up to $350 in subsidies to BC families. As of December 2022, the subsidy has increased by 201%, now offering up to $900 per child, per month. Additionally, you can combine this subsidy with other childcare benefits you qualify for, including the Affordable Child Care Benefit.",
  },
  {
    icon: Zap,
    step: 2,
    title: "Child Care Fee Reduction Initiative (CCFRI)",
    description:
      "Parents do not need to apply for this BC daycare subsidy — if your child is enrolled in a participating school, they will automatically receive the discount.",
    links: [{ label: "Child Care Fee Reduction Initiative (CCFRI)", href: CCFRI_URL }],
  },
  {
    icon: FileCheck2,
    step: 3,
    title: "Affordable Child Care Benefit (ACCB)",
    description:
      "Unlike CCFRI, families must apply for this benefit directly with the provincial government. See the full overview, links, and qualifications below.",
    links: [
      { label: "Affordable Child Care Benefit (ACCB)", href: ACCB_URL },
      { label: "Online Estimator", href: ESTIMATOR_URL },
    ],
  },
  {
    icon: ListChecks,
    step: 4,
    title: "Qualifications for Affordable Child Care Benefit",
    description:
      "See the full eligibility breakdown below, including residency, type of care, reason for care, income, and application timing.",
  },
];

export type QualificationGroup = {
  title: string;
  intro?: string;
  items?: string[];
};

export const ccfriDetail = {
  title: "Child Care Fee Reduction Initiative (CCFRI)",
  paragraphs: [
    "The Child Care Fee Reduction Initiative (CCFRI) is a provincially funded child care subsidy program designed to reduce and stabilize child care costs for families. This program provides funds to eligible, licensed child care providers, allowing parents to save up to $900 per month per child in tuition fees for children up to Kindergarten age.",
    "Parents do not need to apply for this BC daycare subsidy. If your child is enrolled in a participating school, they will automatically receive the discount.",
  ],
  link: { label: "Child Care Fee Reduction Initiative (CCFRI)", href: CCFRI_URL } as SubsidyLink,
};

export const accbDetail = {
  title: "Affordable Child Care Benefit (ACCB)",
  paragraphs: [
    "The Affordable Child Care Benefit (ACCB) provides financial assistance to families with a household income under $111k, offering up to $1,250 per child, per month for childcare. The benefit amount is determined by your child's age, family size, and type of care. Families must apply for this benefit directly with the provincial government and renew their application annually.",
  ],
  links: [
    { label: "Affordable Child Care Benefit (ACCB)", href: ACCB_URL },
    { label: "Online Estimator", href: ESTIMATOR_URL },
  ] as SubsidyLink[],
  qualifications: [
    {
      title: "Residency and Citizenship",
      intro: "A parent or guardian must be:",
      items: [
        "A resident of B.C. (you must have a current B.C. address)",
        "A Canadian citizen",
        "A permanent resident of Canada",
        "A Convention refugee or a person in need of protection",
      ],
    },
    {
      title: "Type of Care",
      items: ["Little Bubz is a Licensed Group Care for children under 36 months."],
    },
    {
      title: "Reason for Childcare",
      intro: "Parents must provide one of the following reasons for requiring childcare:",
      items: [
        "Working or self-employed",
        "Attending school",
        "Participating in an employment program",
        "Looking for work (only one parent or guardian)",
        "Living with a medical condition that interferes with your ability to care for your child",
        "Your child is attending licensed preschool",
        "You have been referred by a Ministry of Children and Family Development or Delegated Aboriginal Agency social worker",
      ],
    },
    {
      title: "Income",
      intro:
        "Your household income determines your benefit amount — see the ACCB link above for full details and to check your family's threshold.",
    },
    {
      title: "Application Date",
      items: [
        "Apply for funding before the end of the month in which you need child care. For example, if you would like to receive funding for child care starting September 1, you need to apply by September 30.",
      ],
    },
  ] as QualificationGroup[],
};
